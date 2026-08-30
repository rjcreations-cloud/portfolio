import { stats } from '@/data/site'
import { AnimatedStat } from '@/components/common/AnimatedStat'

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-8 border-t border-ink/8 pt-10 sm:grid-cols-4 dark:border-white/10">
      {stats.map((s) => (
        <AnimatedStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
      ))}
    </div>
  )
}
