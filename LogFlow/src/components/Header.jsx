import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Logo } from './ui/Logo'
import { Button } from './ui/Button'

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#portfolio', label: 'Portfólio' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`dark-surface fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-forest/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#topo" className="shrink-0">
          <Logo tone="dark" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-linen/75 transition-colors hover:text-citron"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#orcamento" variant="citron" className="px-5 py-2.5 text-sm">
            Solicitar orçamento
          </Button>
        </div>

        <button
          type="button"
          className="text-linen lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="flex flex-col gap-1 border-t border-linen/10 bg-forest px-6 pb-6 pt-2 lg:hidden"
          aria-label="Navegação mobile"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-2 py-3 text-[15px] text-linen/85 hover:text-citron"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#orcamento"
            variant="citron"
            onClick={() => setMenuOpen(false)}
            className="mt-3 w-full"
          >
            Solicitar orçamento
          </Button>
        </nav>
      )}
    </header>
  )
}