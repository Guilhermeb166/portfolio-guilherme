'use client'

import styles from './Footer.module.css'
import useIsMobile from '@/components/Responsive/useIsMobile'

export default function Footer() {
    const isMobile = useIsMobile();
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            {!isMobile && (
              <div className={styles.footerBrand}>
                <h3>Guilherme Barroso</h3>
                <p>Desenvolvedor Full-Stack</p>
              </div>
            )}

            <div className={styles.footerLinks}>
              <div className={styles.linkColumn}>
                <h4>Navegação</h4>
                <a href="#home" className={styles.linksNav}>Início</a>
                <a href="#aboutMe" className={styles.linksNav}>Sobre</a>
                <a href="#projects" className={styles.linksNav}>Projetos</a>
                <a href="#contact" className={styles.linksNav}>Contato</a>
              </div>

              <div className={styles.linkColumn}>
                <h4>Contato</h4>
                <a href="mailto:guilhermebarroso166@gmail.com" className={styles.linksNav}>Gmail</a>
                <a href="https://www.linkedin.com/in/guilherme-barroso-98773b269/" className={styles.linksNav}>Linkedin</a>
                <a href="https://github.com/Guilhermeb166" className={styles.linksNav}>Github</a>
                <a href="https://nextsolve.vercel.app/" className={styles.linksNav}>NextSolve</a>
              </div>
            </div>
          </div>

          <div className={styles.footerDivider}></div>

          <div className={styles.footerBottom}>
            <p>© 2026 Guilherme. Todos os direitos reservados.</p>
            <p className={styles.madeWith}>
              Desenvolvido com Next.js
            </p>
          </div>
        </div>
      </footer>
  )
}
