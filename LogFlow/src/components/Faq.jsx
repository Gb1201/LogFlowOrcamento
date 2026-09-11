import { Plus } from 'lucide-react'
import { useState } from 'react'
import { FAQ_ITEMS } from '../data/content'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-forest sm:text-[44px]">
            Perguntas frequentes
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-forest/65">
            Reuni aqui as dúvidas mais comuns sobre prazo, valores e como
            funciona o processo. Não encontrou o que procurava? É só chamar.
          </p>
        </div>

        <div className="mt-16 divide-y divide-forest/12 border-t border-b border-forest/12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-forest sm:text-xl">
                    {item.question}
                  </span>
                  <Plus
                    size={20}
                    strokeWidth={1.75}
                    className={`shrink-0 text-pine transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-forest/65">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}