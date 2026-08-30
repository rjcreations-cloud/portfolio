import { motion } from 'framer-motion'
import { site } from '@/data/site'

export function PortraitPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-[4/5] w-full max-w-sm"
    >
      <div className="absolute -inset-3 -z-10 rounded-[32px] border border-dashed border-emerald/30" />

      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-gradient-to-br from-[#0b1220] via-[#101b2d] to-[#0d172a] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-surface-dark">
        <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
          <span>Profile</span>
          <span className="rounded-full border border-emerald/40 bg-emerald/10 px-2 py-1 text-[9px] tracking-[0.24em] text-emerald-light">
            Available
          </span>
        </div>

        <div className="relative mt-8 flex flex-1 items-center justify-center">
          <div className="absolute inset-6 rounded-[30px] border border-dashed border-white/10" />
          <div className="absolute inset-10 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.32),transparent_55%)]" />

          <div className="relative flex h-56 w-56 items-center justify-center rounded-[30px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-sm">
            <span className="font-display text-[5.5rem] font-bold leading-none tracking-[-0.08em] text-white/90">
              {site.initials}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-left">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Based</p>
            <p className="mt-1 text-sm font-semibold text-white">Davao</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Focus</p>
            <p className="mt-1 text-sm font-semibold text-white">UX + QA</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-surface-dark">
        <p className="font-mono text-[11px] tracking-wide text-muted">ROLE</p>
        <p className="text-sm font-semibold">{site.role}</p>
      </div>
    </motion.div>
  )
}
