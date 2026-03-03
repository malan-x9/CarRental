export default function DownloadApp() {
  return (
    <section className="py-24 bg-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">

          {/* Text */}
          <div className="flex-1">
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">
              <i className="fas fa-mobile-alt mr-2"></i>Mobile App
            </p>
            <h2 className="text-4xl font-extrabold mb-4">
              Book on the <span className="gradient-text">Go!</span>
            </h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Download our app and get exclusive discounts, real-time tracking, and
              instant booking from anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <AppStoreButton icon="fa-apple" store="App Store" sub="Download on" />
              <AppStoreButton icon="fa-google-play" store="Google Play" sub="Get it on" green />
            </div>
          </div>

          {/* Phone Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 md:w-56">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80"
                alt="Mobile App"
                className="relative rounded-3xl shadow-2xl border-4 border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AppStoreButton({ icon, store, sub, green }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-xl transition-all"
    >
      <i className={`fab ${icon} text-2xl ${green ? 'text-green-400' : ''}`}></i>
      <div>
        <p className="text-xs text-slate-400">{sub}</p>
        <p className="font-bold text-sm">{store}</p>
      </div>
    </a>
  )
}