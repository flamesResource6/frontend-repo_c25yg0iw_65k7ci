import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(124,58,237,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 left-0 h-56 blur-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-fuchsia-500/10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" /> Open to opportunities
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 text-5xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            Backend Developer with Full‑Stack versatility. I craft scalable APIs, robust systems, and sleek user experiences.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition">Hire Me</a>
            <a href="#projects" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition">View Projects</a>
          </motion.div>
        </div>
        <div className="relative h-[480px] sm:h-[560px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl shadow-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
