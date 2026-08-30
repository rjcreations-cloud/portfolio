import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { site } from '@/data/site'
import { StatusChip } from '@/components/common/StatusChip'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-surface dark:border-white/10 dark:bg-surface-dark">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <span className="font-display text-xl font-bold">{site.name}</span>
          <p className="max-w-xs text-sm text-muted">
            Building better digital experiences through technology, data, and quality.
          </p>
          <StatusChip className="mt-2 w-fit" />
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs tracking-widest text-muted">NAVIGATE</span>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-ink transition-colors hover:text-emerald dark:text-white/90 dark:hover:text-accent">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs tracking-widest text-muted">CONNECT</span>
          <a href={`mailto:${site.email}`} className="text-sm text-ink transition-colors hover:text-emerald dark:text-white/90 dark:hover:text-accent">
            {site.email}
          </a>
          <div className="mt-1 flex items-center gap-3">
            <a aria-label="GitHub" href={`https://${site.social.github}`} className="text-muted transition-colors hover:text-ink dark:hover:text-white">
              <FaGithub size={18} />
            </a>
            <a aria-label="LinkedIn" href={`https://${site.social.linkedin}`} className="text-muted transition-colors hover:text-ink dark:hover:text-white">
              <FaLinkedin size={18} />
            </a>
            <a aria-label="Facebook" href={`https://${site.social.facebook}`} className="text-muted transition-colors hover:text-ink dark:hover:text-white">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/8 py-6 dark:border-white/10">
        <div className="container-shell flex flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>{site.status.build}</span>
        </div>
      </div>
    </footer>
  )
}
