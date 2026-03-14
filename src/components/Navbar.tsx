import { useState } from 'react'
import { Menu, X } from 'lucide-react'

type NavLink = {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: 'Quienes Somos', href: '#quienes' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Innovacion', href: '#innovacion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
]

function DesktopNav() {
  return (
    <ul className="hidden md:flex gap-8 text-sm font-medium">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="hover:text-verde-mid transition-colors duration-200">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

type MobileNavProps = {
  onClose: () => void
}

function MobileNav({ onClose }: MobileNavProps) {
  return (
    <ul className="md:hidden bg-verde-dark border-t border-white/10 px-6 pb-6 pt-2 flex flex-col gap-4 text-sm">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} onClick={onClose} className="hover:text-verde-mid transition-colors duration-200 block py-1">{l.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-verde-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex flex-col leading-tight">
          <span className="font-display text-base md:text-lg font-bold tracking-wide">
            FEDERACION COLOMBIANA
          </span>
          <span className="text-verde-mid text-xs tracking-widest uppercase">
            de Agricultores
          </span>
        </div>

        <DesktopNav />

        <button
          className="md:hidden focus:outline-none"
          onClick={open ? handleClose : handleOpen}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {open && <MobileNav onClose={handleClose} />}

    </nav>
  )
}