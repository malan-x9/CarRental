const steps = [
  {
    icon: 'fa-search',
    step: 1,
    title: 'Choose Your Car',
    desc: 'Browse our wide selection and pick the car that suits your needs and budget.',
  },
  {
    icon: 'fa-calendar-alt',
    step: 2,
    title: 'Set Your Dates',
    desc: 'Select your pickup and return dates along with your preferred location.',
  },
  {
    icon: 'fa-credit-card',
    step: 3,
    title: 'Make a Payment',
    desc: 'Secure online payment with multiple options. Fast, safe, and encrypted.',
  },
  {
    icon: 'fa-key',
    step: 4,
    title: 'Enjoy Your Ride',
    desc: 'Pick up your car and enjoy your journey with full support from our team.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
            <i className="fas fa-list-ol mr-2"></i>Simple Steps
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Renting a car has never been easier. Follow these 4 simple steps and get on the road in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ icon, step, title, desc }) {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300 step-icon relative z-10">
        <i className={`fas ${icon} text-2xl text-blue-500 group-hover:text-slate-900 transition-all`}></i>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white text-xs font-black rounded-full flex items-center justify-center">
          {step}
        </span>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  )
}