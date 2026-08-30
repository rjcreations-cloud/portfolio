import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useScrolled } from '@/hooks/useScrolled'
import { site } from '@/data/site'
import { ButtonLink } from '@/components/common/Button'
import { ThemeToggle } from '@/components/common/ThemeToggle'

export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-500',
          scrolled || open
            ? 'border-b border-ink/8 bg-paper/80 backdrop-blur-md dark:border-white/10 dark:bg-bg-dark/80'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="container-shell flex h-[4.5rem] items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-white dark:bg-accent dark:text-ink">
              {site.initials}
            </span>
            <span className="font-mono text-xs tracking-widest text-muted">
              {site.name.split(' ')[1]?.toUpperCase() ?? site.name.toUpperCase()}
            </span>
          </NavLink>

          <div className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'relative py-1 text-sm text-muted transition-colors hover:text-ink dark:hover:text-white',
                    isActive && 'text-ink dark:text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <ButtonLink to="/contact" variant="primary" className="text-xs">
              Let's Work Together
            </ButtonLink>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-white/15"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-ink/8 bg-paper dark:border-white/10 dark:bg-bg-dark lg:hidden"
          >
            <div className="container-shell flex flex-col gap-1 py-6">
              {site.nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-3 text-base text-muted transition-colors',
                      isActive && 'bg-surface text-ink dark:bg-white/5 dark:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <ButtonLink to="/contact" variant="primary" className="mt-3 justify-center" onClick={() => setOpen(false)}>
                Let's Work Together
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
