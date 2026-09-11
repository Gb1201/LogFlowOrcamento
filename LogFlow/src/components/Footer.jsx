import { Mail, MessageCircle } from 'lucide-react'
import { CONTACT, SERVICES } from '../data/content'
import { Logo } from './ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="dark-surface border-t border-linen/10 bg-forest-soft py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-linen/55">
              Sites institucionais, landing pages e portfólios sob medida,
              desenvolvidos do zero para o seu projeto.
            </p>
          </div>

          <div>
            <h3 className="font-mark text-[11px] tracking-wide text-linen/40">
              Serviços
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicos"
                    className="text-sm text-linen/70 transition-colors hover:text-citron"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mark text-[11px] tracking-wide text-linen/40">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-linen/70 transition-colors hover:text-citron"
                >
                  <MessageCircle size={15} />
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-sm text-linen/70 transition-colors hover:text-citron"
                >
                  <Mail size={15} />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-linen/10 pt-6">
          <p className="text-xs text-linen/40">
            © {year} LogFlow. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}