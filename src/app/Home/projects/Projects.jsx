// Projects.js

'use client'
import Title from '@/components/title/Title'
import styles from './Projects.module.css'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLaptopCode, FaServer, FaGraduationCap, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si'

// =================================
// 1. DATA
// =================================
const projectsData = [
  {
    id: 'project-1',
    title: 'Diteck Technology',
    type: 'Team project',
    description: 'A full-stack agency platform with AI-powered features, secure job application flow, and role-based dashboards for Admin and Users.',
    features: [
      'Role-based dashboards for Admin and Users',
      'Secure job application system with email verification (OTP)',
      'AI chatbot for answering queries',
      'User management and team collaboration tools',
      'Blog and service section management',
      'Image uploads integrated with AWS S3',
    ],
    technologies: [
      { icon: <SiNextdotjs />, name: 'NextJS', color: '#000000' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
      { icon: <FaNodeJs />, name: 'NodeJS', color: '#339933' },
      { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    ],
    image: '/img/projects/lrfut.png',
  },
  {
    id: 'project-2',
    title: 'Another Awesome Project',
    type: 'Personal project',
    description: 'A cutting-edge web application designed to streamline workflows and enhance user engagement with intuitive interfaces.',
    features: [
      'User authentication and authorization',
      'Real-time data synchronization',
      'Customizable user profiles',
      'Integrated analytics dashboard',
      'Responsive design for all devices',
    ],
    technologies: [
      { icon: <FaReact />, name: 'ReactJS', color: '#61DAFB' },
      { icon: <SiNextdotjs />, name: 'NextJS', color: '#000000' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
      { icon: <SiPrisma />, name: 'Prisma', color: '#2D3748' },
    ],
    image: '/img/projects/nexts.png',
  },
  {
    id: 'project-3',
    title: 'E-commerce Platform',
    type: 'Client project',
    description: 'A robust e-commerce solution with a seamless shopping experience, secure payment gateway, and efficient product management.',
    features: [
      'Product catalog and search functionality',
      'Shopping cart and checkout process',
      'Order management and tracking',
      'Secure payment integration',
      'Admin panel for store management',
    ],
    technologies: [
      { icon: <FaReact />, name: 'ReactJS', color: '#61DAFB' },
      { icon: <FaNodeJs />, name: 'NodeJS', color: '#339933' },
      { icon: <FaDatabase />, name: 'MySQL', color: '#4479A1' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
    ],
    image: '/img/projects/barber.png',
  },
]

// =================================
// 2. ProjectDetail Component
// =================================
const ProjectDetail = ({ project }) => {
  if (!project) return null

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={styles.projectDetailContent}
      >
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectType}>{project.type}</p>
        <p className={styles.projectDescription}>{project.description}</p>
        <ul className={styles.projectFeatures}>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className={styles.projectTechnologies}>
          {project.technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <span style={{ color: tech.color }}>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// =================================
// 3. Projects Component
// =================================
export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY

      // Progresso relativo dentro da seção (0 → 1)
      const progress = Math.min(
        Math.max((scrollY - sectionTop) / (sectionHeight - window.innerHeight), 0),
        1
      )

      // Mapeia o progresso para um índice de projeto
      const totalProjects = projectsData.length
      const index = Math.min(
        Math.floor(progress * totalProjects),
        totalProjects - 1
      )

      setActiveProjectIndex(index)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeProject = projectsData[activeProjectIndex]

  return (
    <section ref={sectionRef} className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        {/* Left Column - Images that fade in/out */}
        <div className={styles.leftColumn}>
          <div className={styles.imageScrollContainer}>
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectImageWrapper} ${
                  index === activeProjectIndex ? styles.activeImage : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Details that change */}
        <div className={styles.rightColumn}>
          <div className={styles.stickyDetailsWrapper}>
            <ProjectDetail project={activeProject} />
          </div>
        </div>
      </div>
    </section>
  )
}