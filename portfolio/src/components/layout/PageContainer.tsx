import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageTransition } from '@/lib/motion'

interface PageContainerProps {
  children: ReactNode
  crumb?: string
  className?: string
}

export function PageContainer({ children, crumb, className }: PageContainerProps) {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageTransition}
      className={className}
    >
      {crumb && (
        <div className="container-shell pt-28">
          <nav className="flex items-center gap-2 font-mono text-xs text-muted">
            <Link to="/" className="transition-colors hover:text-ink dark:hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink dark:text-white">{crumb}</span>
          </nav>
        </div>
      )}
      {children}
    </motion.main>
  )
}
