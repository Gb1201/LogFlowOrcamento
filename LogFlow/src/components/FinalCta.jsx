import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

export function FinalCta() {
  return (
    <section className="dark-surface bg-forest py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
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
          <Button href="#orcamento" variant="citron">
            Solicitar orçamento
            <ArrowRight size={18} strokeWidth={2.25} />
          </Button>
        </div>
      </div>
    </section>
  )
}