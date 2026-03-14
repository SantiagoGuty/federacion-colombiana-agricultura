import styles from '../styles/Innovacion.module.css'

const items = [
  { icon: '🛰️', title: 'Tecnologia agricola', desc: 'Drones, sensores y sistemas de monitoreo para mejorar la produccion.' },
  { icon: '💧', title: 'Gestion del agua', desc: 'Soluciones tecnologicas para el uso eficiente del recurso hidrico.' },
  { icon: '📊', title: 'Datos y analisis', desc: 'Informacion y datos para la toma de decisiones en el campo.' },
  { icon: '🌱', title: 'Agricultura sostenible', desc: 'Practicas innovadoras que cuidan el suelo y el medio ambiente.' },
]

export default function Innovacion() {
  return (
    <section id="innovacion" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* Tech cards */}
          <div className={styles.cardsGrid}>
            {items.map((item) => (
              <div key={item.title} className={styles.card}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <p className={styles.tagline}>El campo del futuro</p>
            <h2 className={styles.title}>Innovacion y tecnologia</h2>
            <p className={styles.body}>
              El desarrollo rural del futuro requiere integrar innovacion, conocimiento
              y tecnologia. Hoy existen tecnologias en el mundo que pueden fortalecer
              la produccion agricola y mejorar la gestion ambiental.
            </p>
            <p className={styles.body}>
              La federacion busca articular estas herramientas con las necesidades del
              campo colombiano, generando soluciones sostenibles para las comunidades.
            </p>
            <div className={styles.commitment}>
              <p className={styles.commitmentTitle}>Nuestro compromiso</p>
              <p className={styles.commitmentText}>
                Conectar las tecnologias existentes en el mundo con las necesidades
                reales del campo colombiano.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}