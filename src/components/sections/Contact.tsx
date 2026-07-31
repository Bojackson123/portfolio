import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../../data/site'
import { Section } from '../layout/Section'
import { GitHubIcon, LinkedInIcon } from '../ui/Icons'
import { Reveal } from '../ui/Reveal'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const formId = import.meta.env.VITE_FORMSPREE_ID

const fieldClass =
  'w-full rounded-card border border-rule bg-graphite/60 px-3.5 py-2.5 text-[0.9375rem] text-paper transition-colors placeholder:text-mute/60 hover:border-mute/40 focus:border-brass focus:outline-none'

function Field({
  id,
  label,
  type = 'text',
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  )
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formId) return

    const form = event.currentTarget
    setStatus('submitting')

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch."
      lede="Open to roles and interesting problems. I read everything that comes through here."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-16">
        <Reveal>
          {formId ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name" autoComplete="name" />
                <Field id="email" label="Email" type="email" autoComplete="email" />
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={`${fieldClass} resize-y`}
                />
              </div>

              {/* Formspree's honeypot. Real people never see or fill this. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-card border border-rule px-5 py-2.5 font-mono text-[0.8125rem] text-paper transition-colors hover:border-brass hover:text-brass-bright focus-visible:border-brass disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                <p aria-live="polite" className="font-mono text-[0.8125rem]">
                  {status === 'success' && (
                    <span className="text-brass-bright">
                      Sent. I&rsquo;ll get back to you.
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="text-paper">
                      That didn&rsquo;t send. Email me directly at{' '}
                      <a href={`mailto:${site.email}`} className="link-underline text-brass">
                        {site.email}
                      </a>
                      .
                    </span>
                  )}
                </p>
              </div>
            </form>
          ) : (
            <div className="rounded-card border border-rule bg-graphite/40 p-6">
              <p className="leading-relaxed text-paper/85">
                The quickest way to reach me is email.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block font-mono text-[0.9375rem] text-brass link-underline"
              >
                {site.email}
              </a>
              {import.meta.env.DEV && (
                <p className="eyebrow mt-6 leading-relaxed">
                  Dev note — set VITE_FORMSPREE_ID to enable the contact form
                </p>
              )}
            </div>
          )}
        </Reveal>

        <Reveal delay={80}>
          <ul className="flex flex-col gap-5 border-t border-rule pt-6 lg:border-t-0 lg:pt-0">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 text-paper/85 transition-colors hover:text-brass-bright"
              >
                <span className="eyebrow w-16 shrink-0">Email</span>
                <span className="link-underline font-mono text-[0.8125rem]">
                  {site.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-paper/85 transition-colors hover:text-brass-bright"
              >
                <span className="eyebrow w-16 shrink-0">GitHub</span>
                <GitHubIcon className="size-4" />
                <span className="link-underline font-mono text-[0.8125rem]">
                  Bojackson123
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-paper/85 transition-colors hover:text-brass-bright"
              >
                <span className="eyebrow w-16 shrink-0">LinkedIn</span>
                <LinkedInIcon className="size-4" />
                <span className="link-underline font-mono text-[0.8125rem]">
                  rashid-al-marri
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="eyebrow w-16 shrink-0">Based</span>
              <span className="font-mono text-[0.8125rem] text-paper/85">
                {site.location}
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
