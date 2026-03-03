import { useState } from 'react'
import { assets } from '../assets/assets'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

const services = [
  'Airport Transfer',
  'Long Term Rental',
  'Corporate Rental',
  'Chauffeur Service',
  'Self Drive',
]

const socials = [
  { icon: 'fa-facebook-f', href: '#' },
  { icon: 'fa-twitter', href: '#' },
  { icon: 'fa-instagram', href: '#' },
  { icon: 'fa-youtube', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Subscribed with ${email}!`)
      setEmail('')
    }
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img src={assets.logo} className='mb-5'/>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your trusted car rental partner. Premium cars, unbeatable prices, and outstanding service.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-500 hover:text-white text-slate-400 rounded-lg flex items-center justify-center transition-all text-sm"
                >
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="footer-link">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-5">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get exclusive deals and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors min-w-0"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-lg transition-all flex-shrink-0"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CarRental. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((p) => (
              <a key={p} href="#" className="hover:text-blue-500 transition-colors">{p}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}