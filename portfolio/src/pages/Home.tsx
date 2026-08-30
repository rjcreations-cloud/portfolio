import { PageContainer } from '@/components/layout/PageContainer'
import { Hero } from '@/components/home/Hero'
import { Marquee } from '@/components/home/Marquee'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'

export function Home() {
  return (
    <PageContainer>
      <Hero />
      <Marquee />
      <FeaturedProjects />
    </PageContainer>
  )
}
