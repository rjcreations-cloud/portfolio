import { motion } from 'framer-motion'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

// Native drag/animation handlers conflict with Framer Motion's own prop types,
// so they're omitted from the HTML attribute sets we spread onto motion components.
type ConflictingKeys = 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
type SafeButtonAttrs = Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingKeys>
type SafeAnchorAttrs = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingKeys>

const styles: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-emerald-deep dark:bg-accent dark:text-ink dark:hover:bg-accent/90',
  secondary: 'border border-ink/15 text-ink hover:border-ink/40 dark:border-white/20 dark:text-white dark:hover:border-white/50',
  ghost: 'text-ink underline decoration-accent decoration-2 underline-offset-4 dark:text-white',
}

const motionProps = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.98 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
}

function classes(variant: Variant, className?: string) {
  return cn(
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300',
    styles[variant],
    className,
  )
}

interface CommonProps {
  variant?: Variant
  className?: string
  icon?: ReactNode
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className,
  icon,
  children,
  ...rest
}: CommonProps & SafeButtonAttrs) {
  return (
    <motion.button className={classes(variant, className)} {...motionProps} {...rest}>
      <span>{children}</span>
      {icon}
    </motion.button>
  )
}

export function ButtonLink({
  variant = 'primary',
  className,
  icon,
  children,
  ...rest
}: CommonProps & LinkProps) {
  return (
    <motion.div className="inline-block" {...motionProps}>
      <Link className={classes(variant, className)} {...rest}>
        <span>{children}</span>
        {icon}
      </Link>
    </motion.div>
  )
}

export function ButtonAnchor({
  variant = 'primary',
  className,
  icon,
  children,
  ...rest
}: CommonProps & SafeAnchorAttrs) {
  return (
    <motion.a className={classes(variant, className)} {...motionProps} {...rest}>
      <span>{children}</span>
      {icon}
    </motion.a>
  )
}
