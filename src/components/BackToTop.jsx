import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-11 h-11 bg-blue-500 hover:bg-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${
        visible ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-90'
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up text-sm font-bold"></i>
    </button>
  )
}