'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Leaf } from 'lucide-react'
import { company } from '@/lib/site-data'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const scale = useTransform(scrollY, [0, 600], [1, 1.12])

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Parallax background — static on reduced motion / mobile handled by object-cover */}
      <motion.div
        className="absolute inset-0 z-0"
        style={reduceMotion ? undefined : { y, scale }}
      >
        <img
          src="/images/hero-farm.png"
          alt="Lush green agricultural fields at golden hour in rural Uttar Pradesh"
          className="h-[110%] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-background backdrop-blur-sm"
        >
          <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
          {company.tagline}
        </motion.span>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-background sm:text-6xl lg:text-7xl"
        >
          Growing Together. Farming Smarter.
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-background/85 text-pretty sm:text-lg"
        >
          {company.name} is a farmer-led producer company in {company.location}, uniting farmers
          through collective action to build stronger, more valuable and more resilient
          agriculture.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Connect With Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#how-we-work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/40 bg-background/10 px-7 py-3.5 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
