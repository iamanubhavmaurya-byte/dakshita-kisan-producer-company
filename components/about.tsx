import { Reveal, SectionHeading } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/about-farmers.png"
                alt="Indian farmers standing together in a green field"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden max-w-[15rem] rounded-2xl border border-border bg-card p-5 shadow-lg sm:block lg:-right-8">
              <p className="font-display text-sm font-semibold leading-snug text-foreground">
                Farmer → Collective → Opportunity → Growth
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="Building Strength Through Collective Farming"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              We bring farmers together through aggregation and collective action — unlocking better
              market access, shared knowledge, quality agricultural inputs and modern technology. By
              organising as one, farmers gain the scale and strength that individual effort alone
              cannot reach.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              Everything we do is farmer-led development: practical, grounded and rooted in the real
              needs of our community.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="rounded-2xl border-l-4 border-primary bg-secondary/60 p-6">
              <p className="font-display text-lg font-semibold leading-snug text-foreground text-pretty md:text-xl">
                &ldquo;Our purpose is not simply to produce more, but to help farmers create more
                value from what they produce.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
