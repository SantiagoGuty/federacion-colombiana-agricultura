const grupos = [
  { icon: '👩‍🌾', label: 'Mujeres rurales y cabeza de hogar' },
  { icon: '🧑‍🌾', label: 'Jóvenes del campo' },
  { icon: '🕊️', label: 'Víctimas del conflicto' },
  { icon: '🤝', label: 'Firmantes de paz' },
  { icon: '🏘️', label: 'Comunidades en vulnerabilidad' },
]

export default function Inclusion() {
  return (
    <section id="inclusion" className="py-24 bg-verde-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-verde-mid text-sm tracking-widest uppercase mb-3 font-body">
            Desarrollo incluyente
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Inclusión y oportunidades para todos
          </h2>
          <p className="text-white/70 leading-relaxed font-body">
            La federación promueve un desarrollo rural incluyente que genera oportunidades 
            para diferentes poblaciones del campo. Creemos que el desarrollo del campo 
            debe construirse con participación y oportunidades para todos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {grupos.map(g => (
            <div
              key={g.label}
              className="bg-white/10 backdrop-blur rounded-2xl px-8 py-6 text-center hover:bg-white/20 transition-all duration-300 min-w-[200px]"
            >
              <div className="text-5xl mb-3">{g.icon}</div>
              <p className="text-sm font-body text-white/90 leading-snug">{g.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <p className="font-display text-2xl font-bold mb-4">
            "El campo colombiano avanza cuando incluye a todos"
          </p>
          <p className="text-white/70 font-body text-sm">
            Federación Colombiana de Agricultura
          </p>
        </div>
      </div>
    </section>
  )
}