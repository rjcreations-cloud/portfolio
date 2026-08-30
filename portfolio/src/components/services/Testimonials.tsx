import { Reveal } from '@/components/common/Reveal'
import { testimonials } from '@/data/services'

export function Testimonials() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08} className="flex flex-col gap-4">
          <p className="text-balance font-display text-lg leading-snug">“{t.quote}”</p>
          <div>
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-muted">
              {t.position}, {t.org}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
