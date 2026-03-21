import styles from '../styles/Inclusion.module.css'

const grupos = [
  { icon: '👩‍🌾', label: 'Mujeres rurales y cabeza de hogar' },
  { icon: '🧑‍🌾', label: 'Jovenes del campo' },
  { icon: '🕊️', label: 'Victimas del conflicto' },
  { icon: '🤝', label: 'Firmantes de paz' },
  { icon: '🏘️', label: 'Comunidades en vulnerabilidad' },
]

export default function Inclusion() {
  return (
    <section id="inclusion" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={styles.tagline}>Desarrollo incluyente</p>
          <h2 className={styles.title}>Inclusion y oportunidades para todos</h2>
          <p className={styles.subtitle}>
            La federacion promueve un desarrollo rural incluyente que genera oportunidades
            para diferentes poblaciones del campo. Creemos que el desarrollo del campo
            debe construirse con participacion y oportunidades para todos.
          </p>
        </div>

        <div className={styles.cardsWrapper}>
          {grupos.map((g) => (
            <div key={g.label} className={styles.card}>
              <div className={styles.cardIcon}>{g.icon}</div>
              <p className={styles.cardLabel}>{g.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.quote}>
          <p className={styles.quoteText}>
            "El campo colombiano avanza cuando incluye a todos"
          </p>
          <p className={styles.quoteAuthor}>Federacion Colombiana de Agricultura</p>
        </div>

      </div>
    </section>
  )
}