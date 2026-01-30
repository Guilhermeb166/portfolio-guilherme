'use client'
import styles from './Introduction.module.css'
import { motion } from 'framer-motion'
import Image3d from './image3d/Image3d';
import useIsTablet from '@/components/Responsive/useIsTablet';
import SocialLinks from '@/components/socialLinks/SocialLinks';
import {LightLines} from '@/components/ui/LightLines'

export default function Introduction() {
  const IsTablet = useIsTablet() // breakpoint padrão: 1024px

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

        <LightLines
            gradientFrom="#0f0f0f"
            gradientTo="#1a1a2e"
            lightColor="#4ade80"
            lineColor="#4ade80"
            linesOpacity={0.1}
            lightsOpacity={0.7}
            speedMultiplier={1.5}
        />
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

        <SocialLinks />
        {!IsTablet && (


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
      {!IsTablet && (
        <div className={styles.div3d}>
          <Image3d />
        </div>
      )}
       
    </section>
  )
}
