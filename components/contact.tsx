'use client'

import { useState } from 'react'
import { MapPin, Phone, Hash, MessageCircle, CheckCircle2 } from 'lucide-react'
import { company } from '@/lib/site-data'
import { Reveal, SectionHeading } from '@/components/reveal'
import { FacebookIcon, LinkedinIcon } from '@/components/brand-icons'

type Errors = { name?: string; phone?: string; email?: string; message?: string }

export function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): Errors {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim()))
      next.phone = 'Please enter a valid phone number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (values.message.trim().length < 10)
      next.message = 'Please enter a message (at least 10 characters).'
    return next
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      setValues({ name: '', phone: '', email: '', message: '' })
    }
  }

  function field(name: keyof typeof values) {
    return {
      value: values[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValues((v) => ({ ...v, [name]: e.target.value })),
    }
  }

  const inputBase =
    'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40'

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's grow together"
            description="Reach out to learn more, collaborate or join our farming community."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info */}
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground">{company.name}</h3>
              <ul className="mt-5 flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">{company.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={company.phoneHref} className="text-muted-foreground hover:text-primary">
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Hash className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">CIN: {company.cin}</span>
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                </a>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call
                </a>
                <a
                  href={company.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <FacebookIcon className="h-4 w-4" /> Facebook
                </a>
                <a
                  href={company.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              {submitted ? (
                <div className="mb-5 flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  Thank you! Your message has been received.
                </div>
              ) : null}

              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={`${inputBase} ${errors.name ? 'border-destructive' : 'border-input'}`}
                    aria-invalid={!!errors.name}
                    {...field('name')}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      className={`${inputBase} ${errors.phone ? 'border-destructive' : 'border-input'}`}
                      aria-invalid={!!errors.phone}
                      {...field('phone')}
                    />
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={`${inputBase} ${errors.email ? 'border-destructive' : 'border-input'}`}
                      aria-invalid={!!errors.email}
                      {...field('email')}
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help?"
                    className={`${inputBase} resize-none ${errors.message ? 'border-destructive' : 'border-input'}`}
                    aria-invalid={!!errors.message}
                    {...field('message')}
                  />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
