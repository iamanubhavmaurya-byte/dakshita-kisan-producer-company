import { Reveal } from '@/components/reveal'

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)',
          backgroundSize: '48px 48px, 64px 64px',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            Our Vision
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 font-display text-2xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
            To build an organised, empowered and economically stronger farming community — where
            farmers stand together, grow together and share in the value they create.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
