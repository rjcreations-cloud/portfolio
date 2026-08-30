import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { processSteps } from '@/data/services'

export function ProcessFlow() {
  return (
    <div className="flex flex-col gap-6 overflow-x-auto pb-4 lg:flex-row lg:items-stretch lg:justify-between lg:overflow-visible">
      {processSteps.map((step, i) => (
        <Fragment key={step.id}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            className="flex min-w-[150px] flex-1 flex-col gap-2 rounded-2xl border border-ink/10 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <span className="font-display font-semibold">{step.label}</span>
            <span className="text-xs text-muted">{step.detail}</span>
          </motion.div>
          {i < processSteps.length - 1 && (
            <div className="hidden shrink-0 items-center justify-center text-muted/40 lg:flex">
              <ArrowRight size={16} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
