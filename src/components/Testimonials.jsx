const testimonials = [
  {
    id: 1,
    rating: 5,
    text: '"Absolutely amazing service! The car was clean, well-maintained, and the booking process was super smooth. Will definitely use again for my next trip!"',
    name: 'John Davidson',
    role: 'Business Traveler',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    highlight: false,
  },
  {
    id: 2,
    rating: 5,
    text: '"Best car rental company I\'ve ever used. The prices are unbeatable and the customer service is outstanding. The Tesla Model 3 was a dream to drive!"',
    name: 'Sarah Mitchell',
    role: 'Travel Blogger',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    highlight: true,
  },
  {
    id: 3,
    rating: 4.5,
    text: '"Rented a BMW for a weekend getaway. Seamless experience from start to finish. The 24/7 support is truly a lifesaver when you\'re on the road late!"',
    name: 'Robert Kim',
    role: 'Weekend Adventurer',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    highlight: false,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
            <i className="fas fa-quote-left mr-2"></i>Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Real experiences from real customers. See why thousands choose us for their car rental needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-blue-500 text-sm mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <i
          key={i}
          className={`fas ${
            i <= Math.floor(rating)
              ? 'fa-star'
              : rating % 1 !== 0 && i === Math.ceil(rating)
              ? 'fa-star-half-alt'
              : 'fa-star text-slate-600'
          }`}
        ></i>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  const { rating, text, name, role, avatar, highlight } = testimonial
  return (
    <div
      className={`testimonial-card rounded-2xl p-6 relative ${
        highlight
          ? 'bg-slate-800 border border-blue-500/40'
          : 'bg-slate-800 border border-slate-700/50'
      }`}
    >
      {highlight && (
        <div className="absolute top-4 right-4 text-blue-500/20 text-5xl font-serif leading-none select-none">
          "
        </div>
      )}
      <StarRating rating={rating} />
      <p className="text-slate-300 text-sm leading-relaxed mb-5">{text}</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-slate-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}