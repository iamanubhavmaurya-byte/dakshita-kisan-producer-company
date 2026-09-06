import { Quote } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { farmerStories } from '@/lib/site-data'

export function FarmerStories() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Farmer Stories"
            title="Voices from the field"
            description="Real stories from our farming community will be shared here soon."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {farmerStories.map((story, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col items-start rounded-2xl border border-dashed border-primary/30 bg-card p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Quote className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 font-display text-lg font-semibold text-foreground">
                  {story.placeholder}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  We&apos;re gathering authentic experiences from our farmers. Check back soon to
                  read their journeys.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
