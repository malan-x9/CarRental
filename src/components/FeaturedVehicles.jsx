import { useState } from 'react'

const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    year: '2024',
    price: 49,
    type: 'sedan',
    typeLabel: 'Sedan',
    typeBg: 'bg-blue-500 text-white',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Auto',
    available: true,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80',
  },
  {
    id: 2,
    name: 'Ford Explorer',
    year: '2024',
    price: 75,
    type: 'suv',
    typeLabel: 'SUV',
    typeBg: 'bg-blue-500 text-white',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Auto',
    available: true,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
  },
  {
    id: 3,
    name: 'BMW 5 Series',
    year: '2024',
    price: 120,
    type: 'luxury',
    typeLabel: 'Luxury',
    typeBg: 'bg-purple-500 text-white',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Auto',
    available: true,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    year: '2024',
    price: 95,
    type: 'electric',
    typeLabel: 'Electric',
    typeBg: 'bg-emerald-500 text-white',
    seats: 5,
    fuel: 'Electric',
    transmission: 'Auto',
    available: true,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80',
  },
  {
    id: 5,
    name: 'Mercedes GLE',
    year: '2024',
    price: 140,
    type: 'suv',
    typeLabel: 'SUV',
    typeBg: 'bg-blue-500 text-white',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Auto',
    available: false,
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80',
  },
  {
    id: 6,
    name: 'Honda Accord',
    year: '2023',
    price: 55,
    type: 'sedan',
    typeLabel: 'Sedan',
    typeBg: 'bg-blue-500 text-white',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    available: true,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
  },
]

const filters = ['all', 'sedan', 'suv', 'luxury', 'electric']

export default function FeaturedVehicles() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? cars
    : cars.filter((c) => c.type === activeFilter)

  return (
    <section id="vehicles" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
            <i className="fas fa-car mr-2"></i>Our Fleet
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="gradient-text">Vehicles</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Choose from our wide selection of premium cars, SUVs, and luxury vehicles.
            All regularly maintained and fully insured.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all capitalize ${
                activeFilter === f
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            View All Cars <i className="fas fa-chevron-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

function CarCard({ car }) {
  const fuelIcon = car.fuel === 'Electric' ? 'fa-bolt' : 'fa-gas-pump'

  return (
    <div className="car-card bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={car.image}
          alt={car.name}
          className="img-zoom w-full h-full object-cover"
        />
        <div className={`absolute top-3 left-3 ${car.typeBg} text-xs font-bold px-2.5 py-1 rounded-full`}>
          {car.typeLabel}
        </div>
        <div
          className={`absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full ${
            car.available ? 'bg-green-500' : 'bg-blue-400'
          }`}
        >
          {car.available ? 'Available' : 'Booked'}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold">{car.name}</h3>
            <p className="text-slate-400 text-sm">{car.year} Model</p>
          </div>
          <div className="text-right">
            <p className="text-blue-500 font-extrabold text-xl">${car.price}</p>
            <p className="text-slate-400 text-xs">per day</p>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-3 my-4 text-center text-xs text-slate-400">
          <div className="bg-slate-700/60 rounded-lg py-2">
            <i className="fas fa-users text-blue-500 block mb-1 mr-2"></i>
            {car.seats} Seats
          </div>
          <div className="bg-slate-700/60 rounded-lg py-2">
            <i className={`fas ${fuelIcon} text-blue-500 block mb-1 mr-2`}></i>
            {car.fuel}
          </div>
          <div className="bg-slate-700/60 rounded-lg py-2">
            <i className="fas fa-cog text-blue-500 block mb-1 mr-2"></i>
            {car.transmission}
          </div>
        </div>

        {/* CTA */}
        {car.available ? (
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2.5 rounded-xl transition-all hover:scale-105">
            Book Now <i className="fas fa-arrow-right ml-1"></i>
          </button>
        ) : (
          <button
            className="w-full bg-slate-600 text-slate-400 font-bold text-sm py-2.5 rounded-xl cursor-not-allowed"
            disabled
          >
            Currently Booked
          </button>
        )}
      </div>
    </div>
  )
}