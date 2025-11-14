import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import Lottie from 'lottie-web'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const animRef = useRef(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    // Lightweight inline animation using Lottie if available; fallback to gradient blob
    try {
      if (animRef.current) {
        const instance = Lottie.loadAnimation({
          container: animRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: {
            v: '5.7.4',
            fr: 30,
            ip: 0,
            op: 180,
            w: 400,
            h: 400,
            nm: 'pulse-orb',
            ddd: 0,
            assets: [],
            layers: [
              {
                ty: 4,
                nm: 'orb',
                ks: { o: { a: 0, k: 100 }, r: { a: 0, k: 0 }, p: { a: 0, k: [200, 200, 0] }, a: { a: 0, k: [0, 0, 0] }, s: { a: 1, k: [ { t: 0, s: [80,80,100] }, { t: 90, s: [100,100,100] }, { t: 180, s: [80,80,100] } ] } },
                shapes: [ { ty: 'el', p: { a: 0, k: [0,0] }, s: { a: 0, k: [240,240] }, d: 1 }, { ty: 'fl', c: { a: 0, k: [0.46,0.27,0.93,1] }, o: { a: 0, k: 100 } } ]
              }
            ]
          }
        })
        return () => instance?.destroy()
      }
    } catch {}
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-transparent to-neutral-100/60 dark:to-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s build something great</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">Share a bit about your project and I’ll get back within 24 hours.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">Name</label>
              <input required className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">Email</label>
              <input type="email" required className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">Message</label>
              <textarea required rows={4} className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Tell me about your goals" />
            </div>
            <button className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl transition">
              Send Message
            </button>
            {sent && <div className="text-sm text-emerald-600 dark:text-emerald-400">Thanks! I’ll be in touch shortly.</div>}
          </form>
          <div className="mt-6 flex items-center gap-4">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-neutral-900 dark:text-white"><Mail size={18}/> Email</a>
            <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 text-neutral-900 dark:text-white" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" className="inline-flex items-center gap-2 text-neutral-900 dark:text-white" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20 blur-3xl rounded-3xl" />
          <div ref={animRef} className="relative h-[360px] rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl flex items-center justify-center" />
        </div>
      </div>
    </section>
  )
}
