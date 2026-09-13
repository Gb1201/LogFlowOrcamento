import { PROCESS_STEPS } from '../data/content'

export function HowItWorks() {
  return (
    <section id="processo" className="dark-surface bg-forest py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-linen sm:text-[44px]">
            Do pedido ao site no ar
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-linen/70">
            Um processo direto, sem etapas escondidas, cinco passos entre
            sua solicitação e o projeto entregue.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Uma única linha, posicionada pela fração de cada coluna — o centro
              do primeiro círculo fica em 1/10 da largura, o do último em 9/10,
              então a linha vai de 10% a 90%. Não depende do padding de cada
              item, então não desalinha com o primeiro/último elemento. */}
          <span
            aria-hidden="true"
            className="absolute top-5 hidden h-px bg-linen/15 lg:block"
            style={{ left: 'calc(100% / 10)', right: 'calc(100% / 10)' }}
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="relative flex flex-col lg:px-5">
                <span className="font-display relative flex h-10 w-10 shrink-0 items-center justify-center border border-citron/50 bg-forest text-sm text-citron">
                  {index + 1}
                </span>
                <h3 className="font-display mt-5 text-lg font-medium text-linen">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-linen/60">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}