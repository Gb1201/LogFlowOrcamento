import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { LogoMark } from './ui/Logo'

export function Hero() {
  return (
    <section
      id="topo"
      className="dark-surface relative overflow-hidden bg-forest pt-32 pb-20 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      {/* Textura sutil de fundo: grade fina, sem gradiente decorativo genérico */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-linen) 1px, transparent 1px), linear-gradient(90deg, var(--color-linen) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-10">
        <div>
          <div className="mb-8 flex items-center gap-3 text-pine-light">
            <LogoMark className="h-6 w-6" animated />
            <span className="font-mark text-xs tracking-wide text-linen/50">
              LogFlow / Criações de sites profissionais
            </span>
          </div>

          <h1 className="font-display text-[42px] leading-[1.08] font-semibold tracking-tight text-linen sm:text-6xl lg:text-[64px]">
            Transforme sua ideia
            <br />
            em presença
            <br />
            <span className="text-citron">digital.</span>
          </h1>

          <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-linen/70">
            Desenvolvo sites institucionais, landing pages e portfólios sob
            medida para empresas, profissionais liberais e criativos que
            precisam de uma presença online que pareça, e funcione, como um
            produto profissional, não como um template preenchido.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#orcamento" variant="citron">
              Solicitar orçamento
              <ArrowRight size={18} strokeWidth={2.25} />
            </Button>
            <Button href="#processo" variant="outline">
              Ver como funciona
            </Button>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-linen/10 pt-6">
            <div>
              <dt className="font-mark text-[11px] text-linen/45">projeto</dt>
              <dd className="mt-1 font-display text-sm text-linen/85">Sob medida</dd>
            </div>
            <div>
              <dt className="font-mark text-[11px] text-linen/45">código</dt>
              <dd className="mt-1 font-display text-sm text-linen/85">Limpo e leve</dd>
            </div>
            <div>
              <dt className="font-mark text-[11px] text-linen/45">contato</dt>
              <dd className="mt-1 font-display text-sm text-linen/85">Direto comigo</dd>
            </div>
          </dl>
        </div>

        <BudgetPreviewPanel />
      </div>
    </section>
  )
}

/**
 * Painel decorativo em estilo editor de código — reforça o posicionamento
 * "desenvolvedor" da marca em vez de uma ilustração genérica ou gradiente.
 */
function BudgetPreviewPanel() {
  const rows = [
    { key: 'servico', value: '"site sob medida"' },
    { key: 'para', value: '"o seu projeto"' },
    { key: 'prazo', value: '"combinado com você"' },
    { key: 'orcamento', value: '"sem burocracia"' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
      <div className="absolute -inset-3 -z-10 border border-pine-light/25" aria-hidden="true" />
      <div className="overflow-hidden border border-linen/10 bg-forest-soft shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 border-b border-linen/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-linen/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-linen/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-citron/70" />
          <span className="font-mark ml-2 text-[11px] text-linen/40">orcamento.json</span>
        </div>
        <div className="font-mark px-6 py-8 text-[13.5px] leading-loose">
          <p className="text-linen/40">{'{'}</p>
          {rows.map((row, i) => (
            <p key={row.key} className="pl-4">
              <span className="text-citron">"{row.key}"</span>
              <span className="text-linen/40">: </span>
              <span className="text-pine-light">{row.value}</span>
              {i < rows.length - 1 && <span className="text-linen/40">,</span>}
            </p>
          ))}
          <p className="text-linen/40">{'}'}</p>
        </div>
      </div>
    </div>
  )
}