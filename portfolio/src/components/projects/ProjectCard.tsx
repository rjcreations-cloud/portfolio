import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Tag } from '@/components/common/Tag'

export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <Link to={`/projects/${project.slug}`} className="group block overflow-hidden rounded-3xl bg-ink dark:bg-surface-dark">
        <div className="flex aspect-[16/11] items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
          <span className="font-mono text-xs tracking-widest text-white/30">{project.category.toUpperCase()}</span>
        </div>
      </Link>

      <div className="flex flex-col gap-4">
        <span className="font-mono text-xs tracking-widest text-muted">{project.category.toUpperCase()}</span>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
        <p className="text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <Link
          to={`/projects/${project.slug}`}
          className="group mt-2 inline-flex w-fit items-center gap-1.5 font-medium text-ink dark:text-white"
        >
          View Case Study
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  )
}
