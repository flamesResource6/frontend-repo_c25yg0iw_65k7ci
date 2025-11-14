import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI Task Manager',
    description: 'Smart task planner with NLP-powered prioritization and calendar sync.',
    stack: ['React', 'FastAPI', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    title: 'Realtime Chat',
    description: 'WebSocket chat platform with rooms, typing indicators, and file sharing.',
    stack: ['Next.js', 'Socket.io', 'Redis'],
    live: '#',
    code: '#',
  },
  {
    title: 'E‑commerce API',
    description: 'Modular, secure commerce API with payments, inventory, and analytics.',
    stack: ['Node', 'PostgreSQL', 'Stripe'],
    live: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-neutral-100/60 dark:from-neutral-900/60 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Projects</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Selected work that showcases my craft.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-5 py-2 text-sm text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5">Start a project</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition">
              <div className="aspect-video rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20 border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-500">Preview</div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-300">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-sm text-neutral-900 dark:text-white hover:underline"><ExternalLink size={16} /> Live</a>
                <a href={p.code} className="inline-flex items-center gap-1 text-sm text-neutral-900 dark:text-white hover:underline"><Github size={16} /> Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
