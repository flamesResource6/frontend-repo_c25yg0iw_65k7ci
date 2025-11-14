import { useEffect, useState } from 'react'
import { Menu, Sun, Moon, Github, Linkedin } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('theme')
    const initial = stored ? stored === 'dark' : prefersDark
    setIsDark(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white text-lg">Portfolio</a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-neutral-300/60 dark:bg-neutral-700/60" />
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
              <Linkedin size={18} />
            </a>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 p-2 hover:bg-black/5 dark:hover:bg-white/5">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-white text-sm font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition">
              Hire Me
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 p-2 text-neutral-700 dark:text-neutral-300">
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-neutral-800 dark:text-neutral-200">
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 p-2">
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-white text-sm font-medium shadow-lg shadow-purple-500/30">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
