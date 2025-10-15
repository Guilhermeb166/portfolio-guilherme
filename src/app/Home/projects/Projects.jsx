'use client'
import ProjectsDesktop from './Desktop/ProjectsDesktop'
import ProjectsMobile from './Mobile/ProjectsMobile'
import useIsMobile from '../../../components/Responsive/useIsMobile'
import useIsTablet from '@/components/Responsive/useIsTablet'

export default function Projects() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  if (isMobile) {
    return <ProjectsMobile />
  }
  else if(isTablet){
    return <ProjectsMobile />
  }
  else{
    return <ProjectsDesktop />
  }

  
}