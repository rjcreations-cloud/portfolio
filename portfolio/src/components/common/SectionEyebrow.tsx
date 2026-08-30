import { cn } from '@/lib/cn'

interface SectionEyebrowProps {
  id: string
  label: string
  className?: string
}

/** A test-case-style label (e.g. "TC-02 / SKILLS") — a nod to QA test-case IDs. */
export function SectionEyebrow({ id, label, className }: SectionEyebrowProps) {
  return (
    <div className={cn('flex items-center gap-3 font-mono text-xs tracking-widest text-muted', className)}>
      <span className="text-accent">{id}</span>
      <span className="h-px w-6 bg-current opacity-40" />
      <span>{label.toUpperCase()}</span>
    </div>
  )
}
