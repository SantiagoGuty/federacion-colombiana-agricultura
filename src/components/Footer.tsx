import styles from '../styles/Footer.module.css'
import logo from '../../public/images/logo_federacion_agricultura_hd.png'


const navLinks = [
  { label: 'Quienes Somos', href: '#quienes' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Innovacion', href: '#innovacion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Alianzas', href: '#alianzas' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.main}>

          {/* LEFT — logo circle */}
          <div className={styles.left}>
            <a href="#hero" className={styles.logoCircle}>
              <img
                src={logo}
                alt="Federacion Colombiana de Agricultura"
                className={styles.logo}
              />
            </a>
          </div>

          {/* RIGHT — nav + contact */}
          <div className={styles.right}>

            <div className={styles.col}>
              <p className={styles.colTitle}>Navegacion</p>
              <ul className={styles.navList}>
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={styles.navLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Contacto</p>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactLabel}>Pais</span>
                  <span>Colombia</span>
                </li>
                <li>
                  <span className={styles.contactLabel}>Correo</span>
                  <a href="mailto:info@federacioncolombianadeagricultura.co" className={styles.contactEmail}>
                    info@federacioncolombianadeagricultura.co
                  </a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Slogan</span>
                  <span className={styles.slogan}>Progreso y desarrollo integral</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            &copy; 2026 Federacion Colombiana de Agricultura. Todos los derechos reservados.
          </p>
          <p className={styles.bottomText}>
            Legalmente constituida ante la Camara de Comercio de Colombia
          </p>
        </div>

      </div>
    </footer>
  )
}