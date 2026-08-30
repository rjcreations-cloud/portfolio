import { useState } from 'react'
import { Check, Copy, MapPin, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { site } from '@/data/site'

export function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const rows = [
    { icon: Mail, label: 'Email', value: site.email, action: copyEmail },
    { icon: FaLinkedin, label: 'LinkedIn', value: site.social.linkedin, href: `https://${site.social.linkedin}` },
    { icon: FaGithub, label: 'GitHub', value: site.social.github, href: `https://${site.social.github}` },
    { icon: MapPin, label: 'Location', value: site.location },
  ]

  return (
    <div className="flex flex-col gap-5">
      {rows.map((row) => (
        <div key={row.label} className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-emerald-deep dark:bg-white/10 dark:text-accent">
            <row.icon size={17} strokeWidth={1.75} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-muted">{row.label}</span>
            {row.href ? (
              <a href={row.href} className="text-sm font-medium hover:text-emerald dark:hover:text-accent">
                {row.value}
              </a>
            ) : row.action ? (
              <button onClick={row.action} className="flex items-center gap-1.5 text-left text-sm font-medium hover:text-emerald dark:hover:text-accent">
                {row.value}
                {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} className="text-muted" />}
              </button>
            ) : (
              <span className="text-sm font-medium">{row.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
