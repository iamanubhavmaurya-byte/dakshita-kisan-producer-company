import { Users, Handshake, TrendingUp, Sprout } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { missions } from '@/lib/site-data'

const icons = [Users, Handshake, TrendingUp, Sprout]

export function Mission() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Mission"
            title="What drives us forward"
            description="Four commitments that shape every step we take alongside our farmers."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missions.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
