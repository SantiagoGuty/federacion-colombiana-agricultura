import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from '../styles/Navbar.module.css'

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
    <ul className={styles.desktopList}>
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className={styles.desktopLink}>{l.label}</a>
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
    <ul className={styles.mobileList}>
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} onClick={onClose} className={styles.mobileLink}>{l.label}</a>
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
    <nav className={styles.nav}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <span className={styles.brandName}>FEDERACION COLOMBIANA</span>
          <span className={styles.brandSub}>de Agricultores</span>
        </div>

        <DesktopNav />

        <button
          className={styles.menuButton}
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