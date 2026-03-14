import styles from '../styles/Footer.module.css'

const navLinks = ['Quienes Somos', 'Sectores', 'Innovacion', 'Proyectos', 'Alianzas', 'Noticias', 'Contacto']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* Brand */}
          <div>
            <p className={styles.brandName}>FEDERACION COLOMBIANA</p>
            <p className={styles.brandSub}>de Agricultores</p>
            <p className={styles.brandDesc}>
              Impulsamos el desarrollo rural sostenible integrando agricultura, ambiente
              y turismo rural para fortalecer las comunidades del campo colombiano.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className={styles.colTitle}>Navegacion</p>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className={styles.navLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={styles.colTitle}>Contacto</p>
            <ul className={styles.contactList}>
              <li>Colombia</li>
              <li>info@federacioncolombianadeagricultura.co</li>
              <li className="pt-4">
                <p className={styles.sloganLabel}>Slogan</p>
                <p className={styles.slogan}>Progreso y desarrollo integral</p>
              </li>
            </ul>
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