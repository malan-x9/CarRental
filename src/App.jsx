import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedVehicles from './components/FeaturedVehicles'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import StatsBanner from './components/StatsBanner'
import Testimonials from './components/Testimonials'
import DownloadApp from './components/DownloadApp'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'


export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <HowItWorks />
      <StatsBanner />
      <Testimonials />
      <DownloadApp />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}