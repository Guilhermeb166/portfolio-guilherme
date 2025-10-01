'use client'
import styles from './Projects.module.css'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Seus ícones e dados de projeto...
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si'

const projectsData = [
  {
    id: 'project-1',
    title: 'Diteck Technology',
    description: 'A full-stack agency platform with AI-powered features, secure job application flow, and role-based dashboards for Admin and Users.',
    technologies: [
      { icon: <SiNextdotjs />, name: 'NextJS' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { icon: <FaNodeJs />, name: 'NodeJS' },
      { icon: <SiMongodb />, name: 'MongoDB' },
    ],
    image: '/img/projects/lrfut.png',
  },
  {
    id: 'project-2',
    title: 'Another Awesome Project',
    description: 'A cutting-edge web application designed to streamline workflows and enhance user engagement with intuitive interfaces.',
    technologies: [
      { icon: <FaReact />, name: 'ReactJS' },
      { icon: <SiNextdotjs />, name: 'NextJS' },
      { icon: <SiPostgresql />, name: 'PostgreSQL' },
      { icon: <SiPrisma />, name: 'Prisma' },
    ],
    image: '/img/projects/nexts.png',
  },
  {
    id: 'project-3',
    title: 'E-commerce Platform',
    description: 'A robust e-commerce solution with a seamless shopping experience, secure payment gateway, and efficient product management.',
    technologies: [
      { icon: <FaReact />, name: 'ReactJS' },
      { icon: <FaNodeJs />, name: 'NodeJS' },
      { icon: <FaDatabase />, name: 'MySQL' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    ],
    image: '/img/projects/barber.png',
  },
]

// Componente de detalhes que será exibido na coluna fixa
const ProjectDetail = ({ project }) => {
  if (!project) return null

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={styles.projectDetailContent}
      >
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
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

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const projectRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Pega o índice do projeto a partir do atributo 'data-index'
            const index = parseInt(entry.target.dataset.index, 10)
            setActiveProjectIndex(index)
          }
        })
      },
      {
        // O projeto se torna "ativo" quando 50% dele está visível
        threshold: 0.5,
        // Define a área de observação, útil para layouts complexos
        rootMargin: '0px 0px -40% 0px'
      }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsLayout}>
        {/* Coluna da Esquerda: Lista de todos os projetos */}
        <div className={styles.projectsList}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index}
              className={`${styles.projectCard} ${index === activeProjectIndex ? styles.active : ''}`}
            >
              <div className={styles.projectImageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              {/* Você pode adicionar um título ou breve descrição aqui se quiser */}
            </div>
          ))}
        </div>

        {/* Coluna da Direita: Detalhes fixos que mudam com o scroll */}
        <div className={styles.stickyColumn}>
          <div className={styles.stickyDetailsWrapper}>
            <ProjectDetail project={projectsData[activeProjectIndex]} />
          </div>
        </div>
      </div>
    </section>
  )
}
