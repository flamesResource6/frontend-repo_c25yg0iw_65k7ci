import { motion } from 'framer-motion'
import { Database, Server, Code2, Cloud, Wrench } from 'lucide-react'

const categories = [
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind', level: 90 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Jest', level: 70 },
      { name: 'Storybook', level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Skills</h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">A snapshot of the technologies I use to build robust products.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
              <div className="flex items-center gap-3">
                <cat.icon className="text-indigo-500" size={20} />
                <h3 className="font-semibold text-neutral-900 dark:text-white">{cat.title}</h3>
              </div>
              <div className="mt-6 space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm text-neutral-700 dark:text-neutral-300">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-neutral-200/70 dark:bg-neutral-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
