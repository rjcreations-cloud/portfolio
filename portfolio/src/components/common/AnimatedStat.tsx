import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

interface AnimatedStatProps {
  value: number
  suffix?: string
  label: string
}

export function AnimatedStat({ value, suffix = '', label }: AnimatedStatProps) {
  const [inView, setInView] = useState(false)
  const count = useCountUp(value, { start: inView })

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, margin: '-40px' }}
      className="flex flex-col gap-1"
    >
      <span className="font-display text-4xl font-bold text-ink dark:text-white sm:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-muted">{label}</span>
    </motion.div>
  )
}
