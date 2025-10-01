'use client'
import { FaCode, FaLaptopCode, FaMobileScreen, FaServer } from 'react-icons/fa6'
import styles from './Services.module.css'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <motion.div
    className={styles.servicesWrapper}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{  duration: 0.8 }}
    viewport={{ once: false, amount: 0.2 }}
    >
        <div className={styles.serviceItem}>
            <FaCode className={styles.serviceIcon}/>
            <h3 className={styles.serviceText}>Clean Code</h3>
            <p>Construindo códigos sustentáveis e escaláveis</p>
        </div>
        <div className={styles.serviceItem}>
            <FaLaptopCode className={styles.serviceIcon}/>
            <h3 className={styles.serviceText}>Desenvolvimento Frontend</h3>
            <p>Interfaces modernas e rápidas</p>
        </div>
        <div className={styles.serviceItem}>
            <FaServer className={styles.serviceIcon}/>
            <h3 className={styles.serviceText}>Desenvolvimento Backend</h3>
            <p>APIs seguras e escaláveis</p>
        </div>
        <div className={styles.serviceItem}>
            <FaMobileScreen className={styles.serviceIcon}/>
            <h3 className={styles.serviceText}>Design Responsivo</h3>
            <p>Layout adaptável em qualquer dispositivo</p>
        </div>
       
    </motion.div>
  )
}
