import { motion } from 'framer-motion'
import { Tag } from '@/components/common/Tag'

const codeLines = [
  { indent: 0, text: 'function Dashboard() {' },
  { indent: 1, text: 'const [data] = useQuery(fetchMetrics)' },
  { indent: 1, text: 'return <Panel data={data} />' },
  { indent: 0, text: '}' },
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3.4] w-full max-w-lg">
      <div className="noise-grid absolute inset-0 rounded-[28px] text-ink/[0.06] dark:text-white/[0.06]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-6 rounded-[24px] border border-ink/10 bg-ink shadow-2xl shadow-emerald-deep/10 dark:border-white/10"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </div>
        <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed text-white/70">
          {codeLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
              style={{ paddingLeft: line.indent * 16 }}
            >
              <span className="text-accent">{'>'}</span> {line.text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="absolute -bottom-6 left-0 w-52 rounded-2xl border border-ink/10 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-surface-dark"
      >
        <p className="font-mono text-[11px] tracking-wide text-muted">SYSTEM RELIABILITY</p>
        <p className="mt-1 font-display text-3xl font-bold text-emerald-deep dark:text-accent">99.8%</p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface dark:bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '99.8%' }}
            transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="absolute -right-4 top-8 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-surface-dark"
      >
        <Tag className="border-none p-0 text-accent">✓ REACT</Tag>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="absolute -right-8 top-24 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-surface-dark sm:right-0"
      >
        <Tag className="border-none p-0 text-accent">✓ TYPESCRIPT</Tag>
      </motion.div>
    </div>
  )
}
