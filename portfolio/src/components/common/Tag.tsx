import { cn } from '@/lib/cn'

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-ink/10 px-3 py-1 font-mono text-[11px] tracking-wide text-muted dark:border-white/10',
        className,
      )}
    >
      {children}
    </span>
  )
}
