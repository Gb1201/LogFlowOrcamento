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
            <Button href="#orcamento" variant="citron" className="group">
              Solicitar orçamento
              <ArrowRight
                size={18}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
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
              <dt className="font-mark text-[11px] text-linen/45">entrega</dt>
              <dd className="mt-1 font-display text-sm text-linen/85">Prazo combinado</dd>
            </div>
            <div>
              <dt className="font-mark text-[11px] text-linen/45">contato</dt>
              <dd className="mt-1 font-display text-sm text-linen/85">Direto comigo</dd>
            </div>
          </dl>
        </div>

        <SitePreviewPanel />
      </div>
    </section>
  )
}

/**
 * Painel decorativo: um mockup de navegador com um site sendo montado peça
 * por peça (menu, título, botão, cards). Comunica "um site sendo construído
 * para você" de forma direta, sem jargão técnico, com uma animação de
 * entrada que dá vida à seção.
 */
function SitePreviewPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
      <div className="absolute -inset-3 -z-10 border border-pine-light/25" aria-hidden="true" />
      <div className="overflow-hidden border border-linen/10 bg-forest-soft shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 border-b border-linen/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-linen/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-linen/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-citron/70" />
          <span className="ml-2 flex-1 truncate rounded-[2px] bg-forest/60 px-3 py-1 text-[11px] text-linen/35">
            seunegocio.vercel.app
          </span>
        </div>

        <div className="px-6 py-7" aria-hidden="true">
          <div className="flex items-center justify-between">
            <span
              className="hero-mock-fade h-3 w-3 rounded-[2px] bg-citron"
              style={{ animationDelay: '0.05s' }}
            />
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="hero-mock-bar h-1.5 w-6 rounded-full bg-linen/20"
                  style={{ animationDelay: `${0.15 + i * 0.05}s` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-9 space-y-3">
            <span
              className="hero-mock-bar block h-3.5 w-[78%] rounded-sm bg-linen/70"
              style={{ animationDelay: '0.3s' }}
            />
            <span
              className="hero-mock-bar block h-3.5 w-[52%] rounded-sm bg-linen/70"
              style={{ animationDelay: '0.4s' }}
            />
            <span
              className="hero-mock-bar block h-2 w-[85%] rounded-sm bg-linen/20"
              style={{ animationDelay: '0.5s' }}
            />
          </div>

          <span
            className="hero-mock-cta mt-6 inline-block h-8 w-28 rounded-[3px] bg-citron"
            style={{ animationDelay: '0.6s' }}
          />

          <div className="mt-9 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="hero-mock-fade border border-linen/10 p-3"
                style={{ animationDelay: `${0.7 + i * 0.1}s` }}
              >
                <span className="block h-4 w-4 rounded-[2px] bg-pine-light/70" />
                <span className="mt-3 block h-1.5 w-full rounded-full bg-linen/20" />
                <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-linen/15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}