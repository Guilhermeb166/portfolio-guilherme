'use client'
import styles from './Introduction.module.css'
import { motion } from 'framer-motion'
import Image3d from './image3d/Image3d';
import useIsMobile from '@/components/Responsive/useIsMobile';
import SocialLinks from '@/components/socialLinks/SocialLinks';

export default function Introduction() {
  const isMobile = useIsMobile() // breakpoint padrão: 768px

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section className={styles.introduction} id="home">
    <div className={styles.introText}>


      <motion.h1 
        className={styles.mainTitle}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className={styles.titlePart1}>Guilherme Barroso</span>
        <span className={styles.titlePart2}>Desenvolvedor full-stack</span>
      </motion.h1>
    

      <motion.div 
        className={styles.buttonGroup}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <button className={styles.primaryButton}>Explorar meu Trabalho</button>
        <button className={styles.secondaryButton}>Download CV</button>
      </motion.div>

      <SocialLinks/>
      {!isMobile && (

      
       <motion.div 
        className={styles.discoverMore}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => {
          document.getElementById("aboutMe")?.scrollIntoView({
            behavior: "smooth"
          })
        }}
      >
        Descubra Mais
        <span className={styles.arrow}>⌄</span>
      </motion.div>
      )}
    </div>
    <div className={styles.div3d}><Image3d/></div>
    </section>
  )
}
