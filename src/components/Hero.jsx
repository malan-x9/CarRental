import { assets } from "../assets/assets"

export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              <i className="fas fa-star text-xs"></i> #1 Car Rental Service
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Drive Your{' '}
              <span className="gradient-text">Dream Car</span>
              <br />Today!
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              Experience the freedom of the open road with our premium fleet.
              Affordable rates, flexible plans, and unmatched customer service.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#vehicles"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <i className="fas fa-car"></i> Explore Cars
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 text-white px-7 py-3.5 rounded-xl transition-all duration-200 hover:text-blue-500"
              >
                <i className="fas fa-play-circle"></i> How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '10K+', label: 'Happy Customers' },
                { value: '500+', label: 'Cars Available' },
                { value: '15+', label: 'Cities Covered' },
              ].map((stat, i) => (
                <div key={stat.label} className={`${i > 0 ? 'border-l border-slate-700 pl-8' : ''}`}>
                  <p className="text-3xl font-extrabold text-blue-500">{stat.value}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Car Image */}
          <div className="relative flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl scale-75"></div>
            <img
              src={assets.banner_car_image}
              alt="Featured Car"
              className="relative z-10 w-full max-w-lg rounded-2xl object-cover drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Booking Search Bar */}
        <BookingBar />
      </div>
    </section>
  )
}

function BookingBar() {
  return (
    <div className="mt-16 bg-slate-800/80 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 search-bar">
      <p className="text-sm font-semibold text-blue-500 mb-4 uppercase tracking-wider">
        <i className="fas fa-search mr-2"></i>Find Your Perfect Ride
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1.5 font-medium">Pick-up Location</label>
          <select className="w-full bg-slate-700 border border-slate-600 text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500">
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Miami</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5 font-medium">Pick-up Date</label>
          <input
            type="date"
            className="w-full bg-slate-700 border border-slate-600 text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5 font-medium">Return Date</label>
          <input
            type="date"
            className="w-full bg-slate-700 border border-slate-600 text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-end">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-all hover:scale-105">
            <i className="fas fa-search mr-2"></i>Search Cars
          </button>
        </div>
      </div>
    </div>
  )
}