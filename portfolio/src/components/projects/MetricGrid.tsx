import { motion } from 'framer-motion'
import type { CaseStudyMetric } from '@/data/projects'

export function MetricGrid({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
          className="flex flex-col gap-1 rounded-2xl border border-ink/10 bg-white p-5 dark:border-white/10 dark:bg-white/5"
        >
          <span className="font-display text-2xl font-bold text-emerald-deep dark:text-accent sm:text-3xl">
            {m.value}
          </span>
          <span className="text-xs text-muted">{m.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
