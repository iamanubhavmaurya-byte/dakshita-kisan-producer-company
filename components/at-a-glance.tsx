import { Reveal, SectionHeading } from '@/components/reveal'
import { glance } from '@/lib/site-data'

export function AtAGlance() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="At a Glance" title="The company in brief" />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {glance.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-base font-semibold leading-snug text-foreground text-pretty">
                  {item.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
