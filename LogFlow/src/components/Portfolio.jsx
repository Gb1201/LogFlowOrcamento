import { PORTFOLIO_PLACEHOLDERS } from '../data/content'

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-forest sm:text-[44px]">
              Espaço reservado para projetos
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-forest/65">
              Esta área foi estruturada para receber projetos reais conforme
              forem entregues. Por enquanto, três estudos de caso
              conceituais ilustram os formatos oferecidos.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PLACEHOLDERS.map((project) => (
            <article key={project.type} className="group">
              <div className="overflow-hidden border border-forest/12 bg-linen-dim">
                <div className="flex items-center gap-1.5 border-b border-forest/10 bg-linen px-3.5 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-forest/15" />
                  <span className="h-2 w-2 rounded-full bg-forest/15" />
                  <span className="h-2 w-2 rounded-full bg-forest/15" />
                </div>
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 px-6 text-center">
                  <span className="font-mark text-[11px] tracking-wide text-pine/70">
                    {project.label}
                  </span>
                  <span className="font-display text-lg text-forest/35">
                    {project.type}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-forest/60">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}