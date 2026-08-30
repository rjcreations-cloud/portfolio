import { marqueeWords, site } from '@/data/site'

export function Marquee() {
  const track = [...marqueeWords, ...marqueeWords]

  return (
    <section className="border-y border-ink/8 bg-ink py-6 dark:border-white/10 dark:bg-surface-dark">
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap">
          {[...track, ...track].map((word, i) => (
            <span key={i} className="font-mono text-sm tracking-[0.2em] text-white/50">
              {word}
              <span className="ml-10 text-accent">•</span>
            </span>
          ))}
        </div>
      </div>

      <p className="container-shell mt-6 text-center text-sm text-white/60 sm:text-base">{site.statement}</p>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
