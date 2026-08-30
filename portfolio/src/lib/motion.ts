import type { Variants, Transition } from 'framer-motion'

export const signatureEase = [0.16, 1, 0.3, 1] as const

export const baseTransition: Transition = {
  duration: 0.6,
  ease: signatureEase,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: baseTransition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: signatureEase } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: baseTransition },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: baseTransition },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: baseTransition },
}

export const staggerContainer = (stagger = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: signatureEase } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: signatureEase } },
}

export const viewportOnce = { once: true, margin: '-80px' }
