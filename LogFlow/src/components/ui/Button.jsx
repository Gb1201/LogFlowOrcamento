const VARIANTS = {
  citron:
    'bg-citron text-forest hover:bg-citron-dim active:scale-[0.98] shadow-[0_1px_0_rgba(9,33,34,0.15)]',
  outline:
    'border border-linen/30 text-linen hover:border-citron hover:text-citron active:scale-[0.98]',
  'outline-dark':
    'border border-forest/25 text-forest hover:border-pine hover:bg-forest/5 active:scale-[0.98]',
  ghost: 'text-forest hover:text-pine underline decoration-1 underline-offset-4',
}

/**
 * Renderiza como <a> quando `href` é fornecido, ou <button> caso contrário.
 */
export function Button({
  as,
  href,
  variant = 'citron',
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3.5 font-display text-[15px] font-medium tracking-tight transition-all duration-200 ease-out focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-50'
  const classes = `${base} ${VARIANTS[variant] ?? VARIANTS.citron} ${className}`

  const Tag = as ?? (href ? 'a' : 'button')

  return (
    <Tag href={href} className={classes} {...rest}>
      {children}
    </Tag>
  )
}