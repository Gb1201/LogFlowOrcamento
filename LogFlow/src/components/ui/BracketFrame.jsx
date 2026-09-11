/**
 * Envolve o conteúdo com colchetes decorativos nos cantos opostos —
 * o mesmo motivo `<` `>` da marca, usado como assinatura visual em vez de
 * bordas arredondadas genéricas ou sombras difusas.
 */
export function BracketFrame({ children, tone = 'light', className = '' }) {
  const strokeColor = tone === 'light' ? 'border-citron' : 'border-pine'

  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute -top-2 -left-2 h-5 w-5 border-t-2 border-l-2 ${strokeColor}`}
      />
      <span
        aria-hidden="true"
        className={`absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 ${strokeColor}`}
      />
      {children}
    </div>
  )
}