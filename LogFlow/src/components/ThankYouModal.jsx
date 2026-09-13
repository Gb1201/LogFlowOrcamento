import { Mail, MessageCircle, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { BracketFrame } from './ui/BracketFrame'

/**
 * Confirmação exibida depois que o visitante solicita o orçamento pelo
 * WhatsApp ou por e-mail — fecha o ciclo da solicitação em vez de deixar a
 * pessoa sem retorno nenhum na tela.
 */
export function ThankYouModal({ channel, onClose }) {
  const closeButtonRef = useRef(null)
  const isOpen = channel !== null

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const isWhatsapp = channel === 'whatsapp'
  const Icon = isWhatsapp ? MessageCircle : Mail

  return (
    <div
      className="thank-you-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-forest/80 px-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="thank-you-title"
        onClick={(event) => event.stopPropagation()}
        className="thank-you-panel dark-surface relative w-full max-w-sm border border-linen/10 bg-forest-soft px-8 py-10 text-center shadow-[0_30px_70px_-20px_rgba(0,0,0,0.65)]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-linen/45 transition-colors hover:text-citron"
        >
          <X size={20} />
        </button>

        <BracketFrame tone="light" className="mx-auto inline-flex">
          <span className="flex h-14 w-14 items-center justify-center border border-citron/40 bg-forest">
            <Icon size={24} strokeWidth={1.75} className="text-citron" />
          </span>
        </BracketFrame>

        <h3 id="thank-you-title" className="font-display mt-6 text-2xl font-semibold text-linen">
          Pedido enviado
        </h3>

        <p className="mt-3 text-[15px] leading-relaxed text-linen/65">
          {isWhatsapp
            ? 'Abrimos o WhatsApp com sua solicitação já escrita. É só conferir e enviar a mensagem por lá.'
            : 'Abrimos seu aplicativo de e-mail com a solicitação já escrita. É só conferir e enviar por lá.'}
        </p>

        <p className="mt-4 text-sm text-linen/45">Costumo responder em até um dia útil.</p>

        <button
          type="button"
          onClick={onClose}
          className="font-display mt-8 inline-flex w-full items-center justify-center gap-2 border border-linen/20 px-6 py-3 text-sm text-linen transition-colors hover:border-citron hover:text-citron"
        >
          Voltar ao site
        </button>
      </div>
    </div>
  )
}