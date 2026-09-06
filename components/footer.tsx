import { Sprout, MessageCircle, MapPin, Phone } from 'lucide-react'
import { company, navLinks } from '@/lib/site-data'
import { FacebookIcon, LinkedinIcon } from '@/components/brand-icons'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sprout className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight text-foreground">
                  Dakshita Kisan
                </span>
                <span className="text-[11px] font-medium text-muted-foreground">
                  Producer Company Ltd.
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              {company.tagline} — a farmer-led producer company strengthening agriculture through
              collective action in {company.location}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={company.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Reach Us
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                {company.location}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                <a href={company.phoneHref} className="hover:text-primary">
                  {company.phone}
                </a>
              </li>
              <li className="text-xs">CIN: {company.cin}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 {company.name}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
