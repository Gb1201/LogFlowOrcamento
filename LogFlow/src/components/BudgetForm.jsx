import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { BUDGET_RANGES, CONTACT, PROJECT_TYPES, TIMELINE_OPTIONS } from '../data/content'
import { isEmailJsConfigured, sendBudgetEmail } from '../lib/email'
import { hasErrors, validateStep1, validateStep2 } from '../lib/validation'
import { buildMailtoUrl, buildWhatsappUrl } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { SelectField, TextAreaField, TextField } from './ui/FormField'

const STEPS = ['dados', 'projeto', 'envio']
const STEP_LABELS = ['01_dados.md', '02_projeto.md', '03_envio.md']

const INITIAL_DATA = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  description: '',
  timeline: '',
  budget: '',
  extra: '',
}

export function BudgetForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(INITIAL_DATA)
  const [errors, setErrors] = useState({})
  const [emailStatus, setEmailStatus] = useState('idle') // idle | sending | sent | error

  function updateField(field, value) {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function goNext() {
    const stepErrors = step === 0 ? validateStep1(data) : validateStep2(data)
    if (hasErrors(stepErrors)) {
      setErrors(stepErrors)
      return
    }
    setErrors({})
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0))
  }

  function handleWhatsapp() {
    window.open(buildWhatsappUrl(data), '_blank', 'noopener,noreferrer')
  }

  async function handleEmail() {
    if (!isEmailJsConfigured) {
      window.location.href = buildMailtoUrl(data)
      return
    }

    setEmailStatus('sending')
    try {
      await sendBudgetEmail(data)
      setEmailStatus('sent')
    } catch {
      setEmailStatus('error')
    }
  }

  return (
    <section id="orcamento" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-forest sm:text-[44px]">
            Solicite seu orçamento
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-forest/65">
            Três passos rápidos. No final, você escolhe se prefere enviar
            pelo WhatsApp ou por e-mail.
          </p>
        </div>

        <div className="mt-14 border border-forest/12 bg-white/40">
          <div className="flex border-b border-forest/12">
            {STEP_LABELS.map((label, index) => (
              <div
                key={label}
                className={`font-mark flex-1 border-r border-forest/12 px-4 py-3 text-center text-[11px] tracking-wide transition-colors last:border-r-0 ${
                  index === step
                    ? 'bg-forest text-citron'
                    : index < step
                      ? 'text-pine'
                      : 'text-forest/35'
                }`}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-10">
            {step === 0 && (
              <StepDados data={data} errors={errors} onChange={updateField} />
            )}
            {step === 1 && (
              <StepProjeto data={data} errors={errors} onChange={updateField} />
            )}
            {step === 2 && (
              <StepEnvio
                data={data}
                emailStatus={emailStatus}
                onWhatsapp={handleWhatsapp}
                onEmail={handleEmail}
              />
            )}

            <div className="mt-10 flex items-center justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="inline-flex items-center gap-2 font-display text-sm text-forest/60 transition-colors hover:text-forest disabled:opacity-0"
              >
                <ArrowLeft size={16} />
                Voltar
              </button>

              {step < STEPS.length - 1 && (
                <Button variant="citron" onClick={goNext} type="button" className="px-6 py-3">
                  Continuar
                  <ArrowRight size={16} strokeWidth={2.25} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepDados({ data, errors, onChange }) {
  return (
    <div className="grid gap-6">
      <TextField
        id="name"
        label="Nome"
        placeholder="Seu nome completo"
        value={data.name}
        error={errors.name}
        onChange={(e) => onChange('name', e.target.value)}
        autoComplete="name"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id="email"
          type="email"
          label="E-mail"
          placeholder="voce@email.com"
          value={data.email}
          error={errors.email}
          onChange={(e) => onChange('email', e.target.value)}
          autoComplete="email"
        />
        <TextField
          id="phone"
          type="tel"
          label="WhatsApp"
          placeholder="(00) 00000-0000"
          value={data.phone}
          error={errors.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          autoComplete="tel"
        />
      </div>
    </div>
  )
}

function StepProjeto({ data, errors, onChange }) {
  return (
    <div className="grid gap-6">
      <div>
        <span className="mb-2 block text-[13.5px] font-medium text-forest/80">
          Tipo de site
        </span>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4" role="radiogroup" aria-label="Tipo de site">
          {PROJECT_TYPES.map((type) => {
            const selected = data.projectType === type
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onChange('projectType', type)}
                className={`border px-3 py-3 text-[13.5px] font-medium transition-colors ${
                  selected
                    ? 'border-pine bg-pine text-linen'
                    : 'border-forest/20 text-forest/70 hover:border-pine/60'
                }`}
              >
                {type}
              </button>
            )
          })}
        </div>
        {errors.projectType && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-[#a4402a]">
            {errors.projectType}
          </p>
        )}
      </div>

      <TextAreaField
        id="description"
        label="Descrição do projeto"
        placeholder="Conte o que o site precisa ter, para quem é e o que ele deve resolver."
        value={data.description}
        error={errors.description}
        onChange={(e) => onChange('description', e.target.value)}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          id="timeline"
          label="Prazo desejado"
          placeholder="Selecione um prazo"
          options={TIMELINE_OPTIONS}
          value={data.timeline}
          onChange={(e) => onChange('timeline', e.target.value)}
        />
        <SelectField
          id="budget"
          label="Faixa de investimento (opcional)"
          placeholder="Selecione uma faixa"
          options={BUDGET_RANGES}
          value={data.budget}
          onChange={(e) => onChange('budget', e.target.value)}
        />
      </div>

      <TextAreaField
        id="extra"
        label="Informações adicionais (opcional)"
        placeholder="Referências, funcionalidades específicas, ou qualquer outro detalhe relevante."
        value={data.extra}
        onChange={(e) => onChange('extra', e.target.value)}
      />
    </div>
  )
}

function StepEnvio({ data, emailStatus, onWhatsapp, onEmail }) {
  return (
    <div>
      <h3 className="font-display text-lg font-medium text-forest">Revisar e enviar</h3>

      <dl className="mt-6 grid gap-4 border border-forest/12 p-5 text-sm sm:grid-cols-2">
        <SummaryItem label="Nome" value={data.name} />
        <SummaryItem label="Contato" value={`${data.email} · ${data.phone}`} />
        <SummaryItem label="Tipo de projeto" value={data.projectType} />
        <SummaryItem label="Prazo" value={data.timeline || 'Não informado'} />
        <SummaryItem label="Investimento" value={data.budget || 'A combinar'} />
        <SummaryItem label="Descrição" value={data.description} full />
      </dl>

      <p className="mt-6 text-sm text-forest/60">
        Escolha como prefere enviar sua solicitação:
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Button
          type="button"
          variant="citron"
          onClick={onWhatsapp}
          className="w-full"
        >
          <MessageCircle size={18} strokeWidth={2.25} />
          Solicitar pelo WhatsApp
        </Button>
        <Button
          type="button"
          variant="outline-dark"
          onClick={onEmail}
          disabled={emailStatus === 'sending'}
          className="w-full"
        >
          {emailStatus === 'sent' ? (
            <>
              <Check size={18} strokeWidth={2.25} />
              E-mail enviado
            </>
          ) : (
            <>
              <Mail size={18} strokeWidth={2.25} />
              {emailStatus === 'sending' ? 'Enviando…' : 'Solicitar por e-mail'}
            </>
          )}
        </Button>
      </div>

      {emailStatus === 'error' && (
        <p role="alert" className="mt-3 text-xs font-medium text-[#a4402a]">
          Não foi possível enviar agora. Tente novamente ou fale direto pelo
          WhatsApp, ou escreva para {CONTACT.email}.
        </p>
      )}
    </div>
  )
}

function SummaryItem({ label, value, full = false }) {
  return (
    <div className={full ? 'sm:col-span-2' : undefined}>
      <dt className="font-mark text-[11px] text-forest/40">{label}</dt>
      <dd className="mt-1 text-forest/80">{value}</dd>
    </div>
  )
}