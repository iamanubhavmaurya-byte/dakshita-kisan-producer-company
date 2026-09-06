import { Reveal, SectionHeading } from '@/components/reveal'
import { workSteps } from '@/lib/site-data'

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="A clear path from need to lasting value"
            description="Seven deliberate steps that turn individual farmers into a coordinated, opportunity-rich community."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* vertical connector line */}
          <div
            aria-hidden="true"
            className="absolute left-[1.4rem] top-4 bottom-4 hidden w-px bg-border md:block"
          />
          <ol className="flex flex-col gap-4">
            {workSteps.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 0.05}>
                <div className="relative flex items-start gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md md:pl-6">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground shadow-sm">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
