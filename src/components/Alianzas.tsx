const aliados = [
  { tipo: 'Asociaciones rurales', icon: '🤝', desc: 'Organizaciones de base que representan comunidades del campo.' },
  { tipo: 'Instituciones publicas', icon: '🏛️', desc: 'Entidades del Estado que apoyan el desarrollo rural.' },
  { tipo: 'Cooperacion internacional', icon: '🌍', desc: 'Organismos internacionales que financian proyectos sostenibles.' },
  { tipo: 'Sector privado', icon: '🏢', desc: 'Empresas comprometidas con el desarrollo del campo colombiano.' },
]

export default function Alianzas() {
  return (
    <section id="alianzas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-verde-mid text-sm tracking-widest uppercase text-center mb-3 font-body">
          Trabajo en equipo
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-verde-dark mb-4">
          Alianzas
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 font-body">
          El trabajo en el campo se fortalece cuando se hace en equipo. La federacion
          promueve alianzas estrategicas para impulsar proyectos de desarrollo rural sostenible.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {aliados.map((a) => (
            <div key={a.tipo} className="text-center p-8 rounded-3xl border border-gray-100 hover:border-verde-mid hover:shadow-md transition-all duration-300 group">
              <div className="text-5xl mb-4">{a.icon}</div>
              <h4 className="font-display font-bold text-verde-dark mb-2 group-hover:text-verde-mid transition-colors">{a.tipo}</h4>
              <p className="text-gray-500 text-xs font-body leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-verde-dark to-verde-mid rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="font-display text-3xl font-bold mb-4">Quieres ser aliado?</h3>
          <p className="text-white/80 font-body mb-8 max-w-xl mx-auto">
            Si tu organizacion trabaja por el desarrollo rural sostenible, nos interesa
            conocerte y explorar oportunidades de trabajo conjunto.
          </p>
          <a href="#contacto" className="inline-block bg-white text-verde-dark font-semibold px-8 py-3 rounded-full hover:bg-verde-light transition-all duration-300 font-body">Contactanos</a>
        </div>
      </div>
    </section>
  )
}