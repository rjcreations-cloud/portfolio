import { motion } from 'framer-motion'
import { Code2, LineChart, ShieldCheck, Workflow, type LucideIcon } from 'lucide-react'
import type { Service } from '@/data/services'

const icons: Record<string, LucideIcon> = {
  frontend: Code2,
  data: LineChart,
  qa: ShieldCheck,
  business: Workflow,
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.id] ?? Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col gap-4 rounded-3xl border border-ink/10 bg-white p-7 transition-colors hover:border-emerald/40 dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-emerald-deep transition-colors group-hover:bg-accent group-hover:text-ink dark:bg-white/10 dark:text-accent">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-lg font-bold">{service.title}</h3>
      <p className="text-sm text-muted">{service.description}</p>
    </motion.div>
  )
}
