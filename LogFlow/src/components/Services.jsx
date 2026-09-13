import { Check } from 'lucide-react'
import { SERVICES } from '../data/content'

export function Services() {
  return (
    <section id="servicos" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-forest sm:text-[44px]">
            Três formatos. Um único padrão de qualidade.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-forest/65">
            Desenvolvo a interface e a experiência visual do seu site em Front-end, com foco em apresentação, responsividade, navegação e conversão.
            O serviço não inclui sistemas administrativos, áreas restritas, banco de dados ou regras de negócio próprias. Veja onde o seu se encaixa.
          </p>
        </div>

        <div className="mt-16 divide-y divide-forest/10 border-y border-forest/10">
          {SERVICES.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <div className="grid gap-6 py-12 sm:grid-cols-[80px_1fr] sm:gap-10 lg:grid-cols-[100px_1.1fr_1fr]">
      <span className="font-mark text-sm text-pine/60">{number}</span>

      <div>
        <h3 className="font-display text-2xl font-semibold text-forest">
          {service.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-forest/60">
          {service.audience}
        </p>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-forest/75">
          {service.goal}
        </p>
      </div>

      <ul className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1 lg:justify-self-end">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14.5px] text-forest/70">
            <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-pine" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}