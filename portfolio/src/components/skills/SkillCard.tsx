import { motion } from 'framer-motion'
import type { Skill } from '@/data/skills'

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-5 dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex items-center justify-between">
        <span className="font-display font-semibold">{skill.name}</span>
        <span className="font-mono text-[11px] text-muted">{skill.level}%</span>
      </div>
      <p className="text-sm text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {skill.note}
      </p>
      <div className="h-1 w-full overflow-hidden rounded-full bg-surface dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </motion.div>
  )
}
