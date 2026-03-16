import { useState, useEffect } from 'react'
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

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <nav
      className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
      aria-label="Menu movil"
    >
      {links.map((l) => (
        <a key={l.label} href={l.href} onClick={onClose} className={styles.mobileLink}>{l.label}</a>
      ))}
    </nav>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={styles.navbar}>

      <div className={styles.inner}>
        <a href="#hero" className={styles.logoWrapper}>
          <img
            src="/src/assets/logo_federacion_agricultura_hd.png"
            alt="Federacion Colombiana de Agricultura"
            className={styles.logo}
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Navegacion principal">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={styles.desktopLink}>{l.label}</a>
          ))}
        </nav>

        <div className={styles.menuToggle}>
          <button
            type="button"
            className={`${styles.menuButton} ${open ? styles.opened : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Main Menu"
            aria-expanded={open}
          >
            <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true">
              <path
                className={`${styles.line} ${styles.line1}`}
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className={`${styles.line} ${styles.line2}`}
                d="M 20,50 H 80"
              />
              <path
                className={`${styles.line} ${styles.line3}`}
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.wavesWrapper} aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={styles.wavesSvg}
        >
          {/* white wave fill */}
          <path
            d="M0 0H1440V20C1260 20 1240 56 1080 56C920 56 880 32 720 32C560 32 520 56 360 56C200 56 180 20 0 20V0Z"
            fill="#ffffff"
          />
          {/* green outline following the bottom edge of the wave */}
          <path
            d="M0 20C180 20 200 56 360 56C520 56 560 32 720 32C880 32 920 56 1080 56C1240 56 1260 20 1440 20"
            stroke="#0CA81B"
            strokeWidth="6.7"
            fill="none"
          />
        </svg>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  )
}