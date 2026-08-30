import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, viewportOnce } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  as?: 'div' | 'span'
}

export function Reveal({ children, className, variants = fadeUp, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}
