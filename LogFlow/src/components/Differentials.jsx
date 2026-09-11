import { Code2, MessageCircle, Palette, Ruler, Smartphone, Zap } from 'lucide-react'
import { DIFFERENTIALS } from '../data/content'

const ICONS = [Ruler, Palette, Smartphone, Zap, Code2, MessageCircle]

export function Differentials() {
  return (
    <section id="diferenciais" className="dark-surface bg-pine py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-linen sm:text-[44px]">
            Por que contratar um projeto sob medida
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-linen/70">
            Um site genérico entrega o básico. Estes são os pontos que fazem
            diferença no resultado final.
          </p>
        </div>

        <div className="mt-16 grid gap-3 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = ICONS[index]
            return (
              <div
                key={item.title}
                className="flex flex-col gap-6 border border-linen/10 bg-forest/30 p-6 transition-colors duration-300 hover:border-citron/50 hover:bg-forest/50"
              >
                <Icon size={22} strokeWidth={1.75} className="text-citron" />
                <div>
                  <h3 className="font-display text-lg font-medium text-linen">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-linen/60">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}