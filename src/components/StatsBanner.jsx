const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Cars Available' },
  { value: '15+',  label: 'Cities Covered' },
  { value: '4.9★', label: 'Average Rating' },
]

export default function StatsBanner() {
  return (
    <section className="py-16 bg-blue-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-extrabold mb-1">{s.value}</p>
              <p className="font-semibold text-blue-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}