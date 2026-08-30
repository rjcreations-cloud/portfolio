import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, opts?: { duration?: number; start?: boolean }) {
  const duration = opts?.duration ?? 1400
  const start = opts?.start ?? true
  const [value, setValue] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    const t0 = performance.now()
    const tick = (t: number) => {
      const progress = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, target, duration])

  return value
}
