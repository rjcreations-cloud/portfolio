import { cn } from '@/lib/cn'
import { site } from '@/data/site'

export function StatusChip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted dark:border-white/10 dark:bg-white/5',
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {site.status.label} · UPTIME {site.status.uptime}
    </div>
  )
}
