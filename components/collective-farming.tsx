import { ArrowRight, Sprout, Users, Layers, Sparkles, TrendingUp } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { collectiveFlow } from '@/lib/site-data'

const flowIcons = [Sprout, Users, Layers, Sparkles, TrendingUp]

export function CollectiveFarming() {
  return (
    <section id="collective-farming" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Collective Farming"
            title="Individually strong. Together, unstoppable."
            description="Collective procurement, aggregation, market linkage, shared knowledge and stronger bargaining power — the heart of how farmers gain more from what they grow."
          />
        </Reveal>

        {/* Flow */}
        <div className="mt-16">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
            {collectiveFlow.map((node, i) => {
              const Icon = flowIcons[i]
              const isLast = i === collectiveFlow.length - 1
              return (
                <Reveal as="li" key={node.title} delay={i * 0.08} className="relative">
                  <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-foreground">
                      {node.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {node.description}
                    </p>
                  </div>
                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-full z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center text-primary/50 lg:left-full lg:top-[3.25rem] lg:-translate-x-1/2 lg:-translate-y-0"
                    >
                      <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
                    </span>
                  ) : null}
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
