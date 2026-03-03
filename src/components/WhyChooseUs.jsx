const features = [
  {
    icon: 'fa-tag',
    title: 'Best Price Guarantee',
    desc: 'Competitive pricing with no hidden fees. We match any lower price you find.',
  },
  {
    icon: 'fa-headset',
    title: '24/7 Customer Support',
    desc: 'Our support team is always available to assist you anytime, anywhere.',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Fully Insured Vehicles',
    desc: 'Every car in our fleet comes with comprehensive insurance coverage included.',
  },
  {
    icon: 'fa-map-marker-alt',
    title: 'Multiple Pickup Locations',
    desc: 'Conveniently located across 15+ cities. Pick up and drop off anywhere.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80"
              alt="Why Choose Us"
              className="relative rounded-2xl w-full object-cover shadow-2xl"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-extrabold">12+</p>
              <p className="text-sm font-semibold">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
              <i className="fas fa-shield-alt mr-2"></i>Why Choose Us
            </p>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              We Offer The Best{' '}
              <span className="gradient-text">Car Rental</span> Experience
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We're committed to giving you the smoothest rental experience possible — from
              booking to return. Our fleet is modern, clean, and ready for any adventure.
            </p>

            <div className="space-y-5">
              {features.map((f) => (
                <FeatureItem key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-all duration-200">
        <i className={`fas ${icon} text-blue-500 group-hover:text-slate-900 transition-all`}></i>
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm">{desc}</p>
      </div>
    </div>
  )
}