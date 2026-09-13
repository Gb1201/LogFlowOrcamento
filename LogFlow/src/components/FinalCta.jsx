import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

export function FinalCta() {
  return (
    <section className="dark-surface relative overflow-hidden bg-forest py-24 sm:py-32">
      {/* Mesma textura sutil do Hero — fecha a composição visual entre
          o início e o fim da página. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-linen) 1px, transparent 1px), linear-gradient(90deg, var(--color-linen) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 className="font-display mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-linen sm:text-5xl">
          Seu projeto merece um site
          <br />
          <span className="text-citron">construído para ele.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-linen/65">
          Envie os detalhes do seu projeto e receba uma proposta objetiva,
          sem enrolação.
        </p>
        <div className="mt-10">
          <Button href="#orcamento" variant="citron" className="group">
            Solicitar orçamento
            <ArrowRight
              size={18}
              strokeWidth={2.25}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
        </div>
      </div>
    </section>
  )
}