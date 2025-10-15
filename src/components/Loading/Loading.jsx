'use client'
import { motion } from 'framer-motion'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <motion.div 
      className={styles.loadingScreen}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.loader}>
        <span className={styles.subtext}>Carregando...</span>
        <div className={styles.spinner}></div>
      </div>
    </motion.div>
  )
}
