'use client'
import styles from './ProjectsDesktop.module.css' // Novo arquivo de estilo
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../ProjectsData'

// Componente de detalhes (agora interno)
const ProjectDetail = ({ project }) => {
  if (!project) return null

  const content = (
    <>
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
    </>
  )

  // Renderização com animação para desktop
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
        {content}
      </motion.div>
    </AnimatePresence>
  )
}

export default function ProjectsDesktop() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const projectRefs = useRef([])

  // Lógica do IntersectionObserver para Desktop
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10)
            setActiveProjectIndex(index)
          }
        })
      },
      {
        threshold: 0.5,
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
                <div className={styles.imageGlow}></div>
                <h4 className={styles.projectCardTitle}>{project.title}</h4>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
            </div>
          ))}
        </div>

        {/* Coluna da Direita: Detalhes fixos */}
        <div className={styles.stickyColumn}>
          <div className={styles.stickyDetailsWrapper}>
            <ProjectDetail project={projectsData[activeProjectIndex]} />
          </div>
        </div>
      </div>
    </section>
  )
}