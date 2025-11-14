import { motion } from 'framer-motion'

const items = [
  { period: '2024 — Present', title: 'Backend Developer', org: 'Acme Tech', desc: 'Building cloud-native services, APIs, and internal tooling.' },
  { period: '2023', title: 'Full‑Stack Intern', org: 'Beta Labs', desc: 'Shipped product features end‑to‑end with React and FastAPI.' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 sm:left-2 top-2 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-5 shadow">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">{it.period}</div>
                  <div className="mt-1 font-medium text-neutral-900 dark:text-white">{it.title} • {it.org}</div>
                  <p className="mt-1 text-neutral-700 dark:text-neutral-300 text-sm">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
