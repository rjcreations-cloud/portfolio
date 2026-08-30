import { motion } from 'framer-motion'
import type { ExperienceEntry } from '@/data/experience'
import { Tag } from '@/components/common/Tag'
import { viewportOnce } from '@/lib/motion'

export function TimelineItem({ entry, index }: { entry: ExperienceEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="relative grid gap-2 pb-14 pl-10 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-8 sm:pl-0"
    >
      <div className="absolute left-0 top-1.5 h-full w-px bg-ink/10 sm:left-[140px] dark:bg-white/10" />
      <span className="absolute -left-[5px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-paper sm:left-[135px] dark:bg-bg-dark" />

      <p className="font-mono text-sm text-muted sm:pr-8 sm:text-right">{entry.year}</p>

      <div className="sm:pl-8">
        <h3 className="font-display text-lg font-bold sm:text-xl">{entry.role}</h3>
        <p className="text-sm text-emerald dark:text-accent">{entry.org}</p>
        <p className="mt-3 text-sm text-muted">{entry.summary}</p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {entry.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
