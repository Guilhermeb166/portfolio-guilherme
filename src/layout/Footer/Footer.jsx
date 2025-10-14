'use client'
import SocialLinks from '@/components/socialLinks/SocialLinks'
import styles from './Footer.module.css'
import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <h3>Guilherme Barroso</h3>
              <p>Desenvolvedor Full-Stack</p>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.linkColumn}>
                <h4>Navegação</h4>
                <a href="#home">Início</a>
                <a href="#aboutMe">Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
              </div>

              <div className={styles.linkColumn}>
                <h4>Contato</h4>
                <SocialLinks/>
              </div>
            </div>

            <button 
              className={styles.scrollTopBtn} 
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
            >
              <FiArrowUp />
            </button>
          </div>

          <div className={styles.footerDivider}></div>

          <div className={styles.footerBottom}>
            <p>© 2025 Guilherme. Todos os direitos reservados.</p>
            <p className={styles.madeWith}>
              Desenvolvido com Next.js
            </p>
          </div>
        </div>
      </footer>
  )
}
