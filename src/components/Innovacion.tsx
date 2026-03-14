const items = [
  { icon: '🛰️', title: 'Tecnología agrícola', desc: 'Drones, sensores y sistemas de monitoreo para mejorar la producción.' },
  { icon: '💧', title: 'Gestión del agua', desc: 'Soluciones tecnológicas para el uso eficiente del recurso hídrico.' },
  { icon: '📊', title: 'Datos y análisis', desc: 'Información y datos para la toma de decisiones en el campo.' },
  { icon: '🌱', title: 'Agricultura sostenible', desc: 'Prácticas innovadoras que cuidan el suelo y el medio ambiente.' },
]

export default function Innovacion() {
  return (
    <section id="innovacion" className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {items.map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-display text-base font-bold text-verde-dark mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <p className="text-verde-mid text-sm tracking-widest uppercase mb-3 font-body">
              El campo del futuro
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-verde-dark mb-6 leading-tight">
              Innovación y tecnología
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-body">
              El desarrollo rural del futuro requiere integrar innovación, conocimiento 
              y tecnología. Hoy existen tecnologías en el mundo que pueden fortalecer 
              la producción agrícola y mejorar la gestión ambiental.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-body">
              La federación busca articular estas herramientas con las necesidades del 
              campo colombiano, generando soluciones sostenibles para las comunidades.
            </p>
            <div className="bg-verde-dark text-white rounded-2xl p-6">
              <p className="font-display text-lg font-bold mb-2">Nuestro compromiso</p>
              <p className="text-white/80 text-sm font-body leading-relaxed">
                Conectar las tecnologías existentes en el mundo con las necesidades 
                reales del campo colombiano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}