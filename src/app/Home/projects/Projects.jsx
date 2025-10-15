'use client'
import ProjectsDesktop from './Desktop/ProjectsDesktop'
import ProjectsMobile from './Mobile/ProjectsMobile'
import useIsMobile from '../../../components/useIsMobile/useIsMobile'

export default function Projects() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <ProjectsMobile />
  }

  return <ProjectsDesktop />
}