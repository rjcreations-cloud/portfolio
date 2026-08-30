import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { SkillCard } from './SkillCard'
import { cn } from '@/lib/cn'
import { staggerContainer, fadeUp } from '@/lib/motion'

export function SkillsGrid() {
  const [active, setActive] = useState<string>('all')

  const tabs = useMemo(
    () => [{ id: 'all', title: 'All' }, ...skillCategories.map((c) => ({ id: c.id, title: c.title }))],
    [],
  )

  const visibleCategories =
    active === 'all' ? skillCategories : skillCategories.filter((c) => c.id === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === tab.id
                ? 'border-ink bg-ink text-white dark:border-accent dark:bg-accent dark:text-ink'
                : 'border-ink/10 text-muted hover:border-ink/30 dark:border-white/10 dark:hover:border-white/30',
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-14">
        {visibleCategories.map((category) => (
          <div key={category.id}>
            <div className="mb-5 flex items-baseline gap-3">
              <h3 className="font-display text-xl font-bold">{category.title}</h3>
              <span className="text-sm text-muted">{category.description}</span>
            </div>
            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={fadeUp}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
