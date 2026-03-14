import styles from '../styles/Noticias.module.css'

const noticias = [
  {
    categoria: 'Proyectos',
    titulo: 'Avances en el fortalecimiento de cadenas productivas de cafe en el Huila',
    fecha: 'Marzo 2025',
    descripcion: 'La federacion acompana a productores rurales en la mejora de sus procesos productivos y acceso a mercados.',
  },
  {
    categoria: 'Eventos',
    titulo: 'Primera asamblea general de asociaciones cofundadoras',
    fecha: 'Febrero 2025',
    descripcion: 'Las 9 asociaciones cofundadoras se reunieron para definir el plan de trabajo para 2025.',
  },
  {
    categoria: 'Convocatorias',
    titulo: 'Convocatoria abierta para proyectos de turismo rural comunitario',
    fecha: 'Enero 2025',
    descripcion: 'La federacion abre convocatoria para comunidades interesadas en desarrollar proyectos de turismo rural.',
  },
]

export default function Noticias() {
  return (
    <section id="noticias" className={styles.section}>
      <div className={styles.container}>

        <p className={styles.tagline}>Ultimas novedades</p>
        <h2 className={styles.title}>Noticias</h2>
        <p className={styles.subtitle}>
          Avances, actividades, convocatorias y eventos de la Federacion Colombiana de Agricultura.
        </p>

        <div className={styles.grid}>
          {noticias.map((n) => (
            <article key={n.titulo} className={styles.card}>
              <div className={styles.cardBar} />
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategoria}>{n.categoria}</span>
                  <span className={styles.cardFecha}>{n.fecha}</span>
                </div>
                <h3 className={styles.cardTitle}>{n.titulo}</h3>
                <p className={styles.cardDesc}>{n.descripcion}</p>
                <button className={styles.cardBtn}>Leer mas</button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}