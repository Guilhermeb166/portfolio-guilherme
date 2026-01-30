'use client'
import styles from './ProjectsMobile.module.css'
import { useState, useEffect, useRef } from 'react'
import { projectsData } from '../ProjectsData'
import { FaSpinner } from 'react-icons/fa'
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

  // Renderização simplificada para mobile: apenas o conteúdo dentro de um wrapper
  return <div className={styles.mobileDetailContent}>{content}</div>
}

// Componente do Iframe (copiado do ProjectsDesktop)
const WebsiteIframe = ({ url, title, fallbackImage }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const iframeRef = useRef(null)

    useEffect(() => {
        setIsLoading(true)
        setHasError(false)
    }, [url])

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
                />
            )}
        </div>
    )
}

export default function ProjectsMobile() {
  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsLayout}>
        {/* Lista de todos os projetos (empilhados) */}
        <div className={styles.projectsList}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${styles.active}`}
              onClick={() => handleCardClick(project.liveUrl)}
            >
              <div className={styles.projectImageWrapper}>
                <div className={styles.imageGlow}></div>
                <div className={styles.iframeWrapper}>
                    {/* Iframe do site no mobile também */}
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

                    {/* Overlay para indicar que é clicável no mobile */}
                    {project.liveUrl && (
                    <div className={styles.clickOverlay}>
                        <span>Visitar site <FaArrowRightLong className={styles.arrowIcon}/></span>
                    </div>
                    )}
                 </div>
              </div>
              
              {/* Detalhe é renderizado dentro do card, empilhando projeto e descrição */}
              <ProjectDetail project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
