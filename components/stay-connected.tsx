import { MessageCircle } from 'lucide-react'
import { company } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { FacebookIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  { label: 'LinkedIn', href: company.linkedinUrl, Icon: LinkedinIcon },
  { label: 'Facebook', href: company.facebookUrl, Icon: FacebookIcon },
  { label: 'WhatsApp', href: company.whatsapp, Icon: MessageCircle },
]

export function StayConnected() {
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Stay Connected
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-pretty">
            Follow our journey and reach out anytime — we&apos;re building this farming community
            together.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
