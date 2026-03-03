import { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const navigate= useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/30 py-3 border-b border-slate-700/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={assets.logo} alt="" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button 
            onClick={()=> navigate('/Signup')}
            className="hidden md:inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            SignUp <i className="fas fa-arrow-right text-xs"></i>
          </button>
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-slate-800 px-6 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="py-4 flex flex-col gap-4 text-slate-300 font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#vehicles"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg text-center block"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}