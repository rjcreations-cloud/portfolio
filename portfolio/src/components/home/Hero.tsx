import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { site } from '@/data/site'
import { ButtonLink } from '@/components/common/Button'
import { StatusChip } from '@/components/common/StatusChip'
import { HeroVisual } from './HeroVisual'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function Hero() {
  return (
    <section className="container-shell relative grid gap-16 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-32 lg:pt-44">
      <motion.div variants={staggerContainer()} initial="hidden" animate="show" className="relative z-10 flex flex-col gap-7">
        <motion.div variants={fadeUp}>
          <StatusChip />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]"
        >
          Building digital experiences that solve real problems.
        </motion.h1>

        <motion.p variants={fadeUp} className="max-w-lg text-balance text-base text-muted sm:text-lg">
          {site.subheadline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
          <ButtonLink to="/projects" variant="primary" icon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}>
            View My Work
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Let's Connect
          </ButtonLink>
        </motion.div>

        <motion.a
          variants={fadeUp}
          href={site.resumeUrl}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 dark:text-white"
        >
          Download Resume <Download size={14} />
        </motion.a>
      </motion.div>

      <HeroVisual />
    </section>
  )
}
