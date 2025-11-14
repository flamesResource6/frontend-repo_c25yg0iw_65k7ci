import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-transparent to-neutral-100/60 dark:to-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 blur-2xl opacity-30" />
              <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 shadow-2xl">
                <div className="rounded-full overflow-hidden bg-white dark:bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I’m a backend‑first developer who enjoys shaping ideas into resilient, elegant systems. I build APIs, services, and platforms with a strong focus on performance, DX, and maintainability—while staying comfortable across the full stack.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects', value: '20+' },
                { label: 'Clients', value: '10+' },
                { label: 'Certifications', value: '4' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-4 text-center backdrop-blur">
                  <div className="text-xl font-semibold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
