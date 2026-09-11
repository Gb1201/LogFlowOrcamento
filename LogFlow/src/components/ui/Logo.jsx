const MARK_ID = 'logflow-mark-gradient'

/**
 * Marca vetorial da LogFlow: o par de colchetes de código com a barra
 * central, reconstruída em SVG para funcionar em qualquer fundo (a versão
 * em .jpeg fica presa a um fundo creme). O gradiente citron -> pine reflete
 * a identidade visual fornecida.
 */
export function LogoMark({ className = 'h-8 w-8', animated = false }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Marca LogFlow"
    >
      <defs>
        <linearGradient id={MARK_ID} x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="var(--color-citron)" />
          <stop offset="100%" stopColor="var(--color-pine-light)" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={`url(#${MARK_ID})`}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          animated
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                animation: 'mark-draw 1.1s ease forwards',
              }
            : undefined
        }
      >
        <path d="M18 14L8 24L18 34" />
        <path d="M30 14L40 24L30 34" />
      </g>
      <line
        x1="26"
        y1="10"
        x2="20"
        y2="38"
        stroke="var(--color-citron)"
        strokeWidth="4.2"
        strokeLinecap="round"
        style={
          animated
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                animation: 'mark-draw 1.1s ease 0.15s forwards',
              }
            : undefined
        }
      />
    </svg>
  )
}

export function Logo({ className = '', tone = 'dark' }) {
  const textColor = tone === 'dark' ? 'text-linen' : 'text-forest'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
        LogFlow
      </span>
    </span>
  )
}