import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Skills } from '@/pages/Skills'
import { Experience } from '@/pages/Experience'
import { Projects } from '@/pages/Projects'
import { ProjectDetails } from '@/pages/ProjectDetails'
import { Services } from '@/pages/Services'
import { Contact } from '@/pages/Contact'
import { Resume } from '@/pages/Resume'
import { NotFound } from '@/pages/NotFound'

function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster position="bottom-right" toastOptions={{ style: { fontFamily: 'Inter, sans-serif', fontSize: '14px' } }} />
    </div>
  )
}

export default App
