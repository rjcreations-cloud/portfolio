import { Moon, Sun } from 'lucide-react'
import { useThemeStore } from '@/store/theme'
import { cn } from '@/lib/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useThemeStore()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-ink/30 dark:border-white/15 dark:text-white dark:hover:border-white/40',
        className,
      )}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
