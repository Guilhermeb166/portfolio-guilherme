'use client'
import Title from '@/components/title/Title'
import styles from './AboutMe.module.css'
import Services from './services/Services'
import { motion } from 'framer-motion'
export default function AboutMe() {
  return (

      
      <section className={styles.aboutMe} id="aboutMe">
        <Title text={'Sobre Mim'}/>
        <div>
          <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
          viewport={{ once: false, amount: 0.2 }}
          >
            <p>
              Olá! Me chamo <strong>Guilherme</strong>, e sou um
              <strong> desenvolvedor full stack</strong>. sou também apaixonado por tecnologia, resolução de problemas e por criar soluções que
              realmente fazem a diferença no dia a dia das pessoas e empresas.
            </p>
            <p>
              Hoje trabalho como <strong>desenvolvedor backend</strong> na <strong>BM Code</strong>, onde atuo
              com o <strong>ERP Sankhya</strong>, utilizando <strong>PL/SQL no Oracle </strong>
              e <strong>Java</strong> para construir soluções robustas e escaláveis.
            </p>
            <p>
              Além disso, sou <strong>co-fundador da NextSolve</strong>, uma startup focada
              no desenvolvimento de <strong>sistemas web</strong>, onde aplico meus conhecimentos
              em diferentes tecnologias.
            </p>
          </motion.div>
          <Services/>
        </div>
      </section>

  )
}
