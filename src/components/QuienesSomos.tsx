export default function QuienesSomos() {
  return (
    <section id="quienes" className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <p className="text-verde-mid text-sm tracking-widest uppercase mb-3 font-body">
              Nuestra organización
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-verde-dark mb-6 leading-tight">
              Quiénes Somos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-body">
              La Federación Colombiana de Agricultura es una organización de carácter nacional 
              conformada por <strong className="text-verde-dark">9 asociaciones cofundadoras</strong>, 
              que trabajan de manera articulada para promover el desarrollo rural sostenible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-body">
              La federación impulsa iniciativas que fortalecen las comunidades rurales, 
              promueven el cuidado del medio ambiente y generan nuevas oportunidades 
              económicas para los territorios.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { number: '9', label: 'Asociaciones cofundadoras' },
                { number: '3', label: 'Sectores de trabajo' },
                { number: '100%', label: 'Compromiso nacional' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl px-6 py-4 shadow-sm text-center">
                  <p className="font-display text-3xl font-bold text-verde-mid">{stat.number}</p>
                  <p className="text-gray-500 text-xs mt-1 font-body">{stat.label}</p>
                </div>
              ))}
            </div>
            <a href="#sectores" className="inline-block bg-verde-dark text-white px-8 py-3 rounded-full hover:bg-verde-mid transition-all duration-300 font-body font-medium">
              Conocer más
            </a>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-verde-dark to-verde-mid rounded-3xl p-10 text-white">
              <h3 className="font-display text-2xl font-bold mb-6">Nuestra Visión</h3>
              <p className="text-white/80 leading-relaxed mb-6 font-body text-sm">
                Contribuir a un modelo de desarrollo rural donde la agricultura, el cuidado 
                del medio ambiente y el turismo rural se conviertan en pilares de crecimiento 
                económico y social para los territorios.
              </p>
              <h3 className="font-display text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-white/80 leading-relaxed font-body text-sm">
                Promover el desarrollo rural sostenible mediante el fortalecimiento de las 
                asociaciones rurales, la implementación de proyectos productivos y la 
                protección de los recursos naturales.
              </p>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-verde-light rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-verde-mid/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}