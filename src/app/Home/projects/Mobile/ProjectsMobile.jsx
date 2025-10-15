'use client'
import styles from './ProjectsMobile.module.css' // Novo arquivo de estilo
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

  // Renderização simplificada para mobile: apenas o conteúdo dentro de um wrapper
  return <div className={styles.mobileDetailContent}>{content}</div>
}

export default function ProjectsMobile() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsLayout}>
        {/* Lista de todos os projetos (empilhados) */}
        <div className={styles.projectsList}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              // No mobile, todos os cards estão "ativos" (opacidade 1) e empilhados
              className={`${styles.projectCard} ${styles.active}`}
            >
              <div className={styles.projectImageWrapper}>
                <div className={styles.imageGlow}></div>
                <h4 className={styles.projectCardTitle}>{project.title}</h4>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              
              {/* Detalhe é renderizado dentro do card, empilhando projeto e descrição */}
              <ProjectDetail project={project} />
            </div>
          ))}
        </div>
        {/* A coluna sticky (stickyColumn) é escondida via CSS no mobile */}
      </div>
    </section>
  )
}