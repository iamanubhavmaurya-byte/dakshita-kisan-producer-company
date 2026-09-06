import { Sprout, ShoppingBasket, Layers, Route, Megaphone, Store } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { supportAreas } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  'shopping-basket': ShoppingBasket,
  layers: Layers,
  route: Route,
  megaphone: Megaphone,
  store: Store,
}

export function SupportingFarmers() {
  return (
    <section id="supporting-farmers" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Supporting Farmers"
            title="How we stand beside our farmers"
            description="Practical support across the areas that matter most to farming livelihoods."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? Sprout
            return (
              <Reveal key={area.title} delay={(i % 3) * 0.07}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {area.description}
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
