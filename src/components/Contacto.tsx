import { useState } from 'react'
import styles from '../styles/Contacto.module.css'

type FormData = {
  nombre: string
  correo: string
  asunto: string
  mensaje: string
}

export default function Contacto() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>

        <p className={styles.tagline}>Hablemos</p>
        <h2 className={styles.title}>Contacto</h2>
        <p className={styles.subtitle}>
          Interesado en alianzas, afiliacion o informacion? Escribenos y te responderemos pronto.
        </p>

        {enviado ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✅</div>
            <h3 className={styles.successTitle}>Mensaje enviado!</h3>
            <p className={styles.successText}>Gracias por contactarnos. Te responderemos pronto.</p>
          </div>
        ) : (
          <div className={styles.form}>

            <div className={styles.row}>
              <div>
                <label className={styles.label}>Nombre</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" className={styles.input} />
              </div>
              <div>
                <label className={styles.label}>Correo electronico</label>
                <input type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="tucorreo@ejemplo.com" className={styles.input} />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Asunto</label>
              <select name="asunto" value={form.asunto} onChange={handleChange} className={styles.select}>
                <option value="">Selecciona un asunto</option>
                <option value="alianzas">Alianzas estrategicas</option>
                <option value="afiliacion">Afiliacion</option>
                <option value="proyectos">Proyectos</option>
                <option value="informacion">Informacion general</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Mensaje</label>
              <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={5} placeholder="Escribe tu mensaje aqui..." className={styles.textarea} />
            </div>

            <button onClick={handleSubmit} className={styles.button}>
              Enviar mensaje
            </button>

          </div>
        )}

      </div>
    </section>
  )
}