import { Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { impactAreas } from '@/lib/site-data'

export function Impact() {
  return (
    <section id="impact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Impact"
            title="Progress measured by people, not just numbers"
            description="Our impact shows up in stronger coordination, wider awareness and a more connected farming economy."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impactAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.07}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {area.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
