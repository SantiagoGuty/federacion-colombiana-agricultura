import { useState } from 'react'

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
    // TODO: connect to backend or email service
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-verde-mid text-sm tracking-widest uppercase text-center mb-3 font-body">
          Hablemos
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-verde-dark mb-4">
          Contacto
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 font-body">
          ¿Interesado en alianzas, afiliación o información? Escríbenos y te responderemos pronto.
        </p>

        {enviado ? (
          <div className="bg-verde-light border border-verde-mid rounded-3xl p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="font-display text-2xl font-bold text-verde-dark mb-2">¡Mensaje enviado!</h3>
            <p className="text-gray-600 font-body">Gracias por contactarnos. Te responderemos pronto.</p>
          </div>
        ) : (
          <div className="bg-crema rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-verde-mid transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-verde-mid transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-body font-medium text-gray-700 mb-2">Asunto</label>
              <select
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-verde-mid transition-colors bg-white"
              >
                <option value="">Selecciona un asunto</option>
                <option value="alianzas">Alianzas estratégicas</option>
                <option value="afiliacion">Afiliación</option>
                <option value="proyectos">Proyectos</option>
                <option value="informacion">Información general</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-body font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-verde-mid transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-verde-dark text-white font-body font-semibold py-4 rounded-xl hover:bg-verde-mid transition-all duration-300 text-sm"
            >
              Enviar mensaje
            </button>
          </div>
        )}
      </div>
    </section>
  )
}