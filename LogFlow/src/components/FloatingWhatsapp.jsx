import { MessageCircle } from 'lucide-react'
import { CONTACT } from '../data/content'

const GREETING = 'Olá! Vim pelo site e gostaria de solicitar um orçamento para a criação de um site.'

/**
 * Atalho fixo para o WhatsApp, sempre visível. Como o objetivo do site é
 * gerar contato, manter esse canal a um clique de distância — em qualquer
 * ponto da página — ajuda a converter quem já decidiu falar, sem precisar
 * rolar até o formulário ou o rodapé.
 */
export function FloatingWhatsapp() {
  const href = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(GREETING)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="floating-whatsapp fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center border border-forest/10 bg-citron text-forest shadow-[0_12px_28px_-8px_rgba(9,33,34,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-citron-dim sm:right-8 sm:bottom-8"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  )
}