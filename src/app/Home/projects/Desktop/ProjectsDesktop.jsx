'use client'
import styles from './ProjectsDesktop.module.css' 
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../ProjectsData'
import { FaSpinner } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { FaArrowRightLong } from 'react-icons/fa6'

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

// Componente do Iframe
const WebsiteIframe = ({ url, title, fallbackImage }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef(null)

  // Reset states quando a URL muda
  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
  }, [url])

  const handleIframeClick = (e) => {
    // Permite clicar no iframe sem abrir o site
    e.preventDefault()
    e.stopPropagation()
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={styles.iframeContainer}>
      {isLoading && (
        <div className={styles.iframeLoading}>
          <FaSpinner className={styles.spinner} />
          <span>Carregando preview...</span>
        </div>
      )}
      
      {hasError ? (
        <div className={styles.iframeError}>
          <img 
            src={fallbackImage} 
            alt={title}
            className={styles.fallbackImage}
          />
          <p>Preview não disponível</p>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={url}
          title={`Preview do site: ${title}`}
          className={styles.websiteIframe}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
          loading="lazy"
          referrerPolicy="no-referrer"
          onClick={handleIframeClick}
        />
      )}
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.fullscreenLink}
        onClick={(e) => e.stopPropagation()}
      >
        <FiExternalLink /> Abrir site
      </a>
    </div>
  )
}

export default function ProjectsDesktop() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [isHoveringCard, setIsHoveringCard] = useState(null)
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

  const handleCardClick = (index) => {
    const project = projectsData[index]
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleCardMouseEnter = (index) => {
    setIsHoveringCard(index)
  }

  const handleCardMouseLeave = () => {
    setIsHoveringCard(null)
  }

  return (
    <section className={styles.projectsSection} id='projects'>
      <div className={styles.projectsLayout}>
        {/* Coluna da Esquerda: Lista de todos os projetos */}
        <div className={styles.projectsList}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index}
              className={`${styles.projectCard} ${index === activeProjectIndex ? styles.active : ''}`}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className={styles.projectImageWrapper}>
                <div className={styles.imageGlow}></div>
                
                {/* Iframe do site */}
                {project.liveUrl ? (
                  <WebsiteIframe 
                    url={project.liveUrl}
                    title={project.title}
                    fallbackImage={project.image}
                  />
                ) : (
                  <>
                    <h4 className={styles.projectCardTitle}>{project.title}</h4>
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                  </>
                )}
                
                {/* Overlay para indicar que é clicável */}
                {(isHoveringCard === index || index === activeProjectIndex) && project.liveUrl && (
                  <div className={styles.clickOverlay}>
                    <span>Clique para visitar o site <FaArrowRightLong className={styles.arrowIcon}/></span>
                  </div>
                )}
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