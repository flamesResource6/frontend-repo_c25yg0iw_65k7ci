import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-black/5 dark:border-white/10 py-10 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <button onClick={scrollTop} aria-label="Scroll to top" className={`inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition ${showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <ArrowUp size={16} /> Top
        </button>
      </div>
    </footer>
  )
}
