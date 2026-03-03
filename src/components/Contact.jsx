import { useState } from 'react'

const contactInfo = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Our Address',
    detail: '123 Rental Street, New York, NY 10001, USA',
  },
  {
    icon: 'fa-phone',
    title: 'Phone Number',
    detail: '+1 (555) 123-4567',
  },
  {
    icon: 'fa-envelope',
    title: 'Email Address',
    detail: 'info@carrental.com',
  },
  {
    icon: 'fa-clock',
    title: 'Working Hours',
    detail: 'Mon – Sat: 8:00 AM – 8:00 PM\nSun: 10:00 AM – 5:00 PM',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! We will get back to you shortly.')
    setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
            <i className="fas fa-envelope mr-2"></i>Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have questions? We're here to help. Reach out to our friendly team anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            {contactInfo.map((c) => (
              <ContactItem key={c.title} {...c} />
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700/50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">First Name</label>
                <input
                  type="text" name="firstName" value={form.firstName}
                  onChange={handleChange} placeholder="John"
                  className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Last Name</label>
                <input
                  type="text" name="lastName" value={form.lastName}
                  onChange={handleChange} placeholder="Doe"
                  className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email</label>
              <input
                type="email" name="email" value={form.email}
                onChange={handleChange} placeholder="john@example.com"
                className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Subject</label>
              <input
                type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="How can we help?"
                className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                rows="4" placeholder="Tell us more..."
                className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all hover:scale-105"
            >
              <i className="fas fa-paper-plane mr-2"></i>Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, title, detail }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <i className={`fas ${icon} text-blue-500`}></i>
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm whitespace-pre-line">{detail}</p>
      </div>
    </div>
  )
}