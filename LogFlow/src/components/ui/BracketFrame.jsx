/**
 * Envolve o conteúdo com colchetes decorativos nos cantos opostos —
 * o mesmo motivo `<` `>` da marca, usado como assinatura visual em vez de
 * bordas arredondadas genéricas ou sombras difusas.
 *
 * Com `revealOnHover`, os colchetes ficam praticamente invisíveis em repouso
 * e surgem no hover do elemento pai (que precisa ter a classe `group`).
 */
export function BracketFrame({ children, tone = 'light', revealOnHover = false, className = '' }) {
  const strokeColor = tone === 'light' ? 'border-citron' : 'border-pine'
  const visibility = revealOnHover
    ? 'opacity-0 -translate-x-0.5 -translate-y-0.5 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100'
    : ''

  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-2 -left-2 h-5 w-5 border-t-2 border-l-2 ${strokeColor} ${visibility}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 ${strokeColor} ${visibility}`}
      />
      {children}
    </div>
  )
}