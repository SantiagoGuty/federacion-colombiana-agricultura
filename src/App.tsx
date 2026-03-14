import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Sectores from './components/Sectores'
import Innovacion from './components/Innovacion'
import Inclusion from './components/Inclusion'
import Asociaciones from './components/Asociaciones'
import Proyectos from './components/Proyectos'
import Alianzas from './components/Alianzas'
import Noticias from './components/Noticias'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Sectores />
      <Innovacion />
      <Inclusion />
      <Asociaciones />
      <Proyectos />
      <Alianzas />
      <Noticias />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App