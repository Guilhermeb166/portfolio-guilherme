'use client'
import Title from '@/components/title/Title'
import styles from './Skills.module.css'

import ReactIcon from '../../../../node_modules/devicon/icons/react/react-original.svg'
import NodeIcon from '../../../../node_modules/devicon/icons/nodejs/nodejs-original.svg'
import NextIcon from '../../../../node_modules/devicon/icons/nextjs/nextjs-original.svg'
import ViteIcon from '../../../../node_modules/devicon/icons/vitejs/vitejs-original.svg'
import HtmlIcon from '../../../../node_modules/devicon/icons/html5/html5-original.svg'
import CssIcon from '../../../../node_modules/devicon/icons/css3/css3-original.svg'
import TailwindIcon from '../../../../node_modules/devicon/icons/tailwindcss/tailwindcss-original.svg'
import WordpressIcon from '../../../../node_modules/devicon/icons/wordpress/wordpress-original.svg'
import PythonIcon from '../../../../node_modules/devicon/icons/python/python-original.svg'
import OracleIcon from '../../../../node_modules/devicon/icons/oracle/oracle-original.svg'
import SqlIcon from '../../../../node_modules/devicon/icons/mysql/mysql-original.svg'
import SassIcon from '../../../../node_modules/devicon/icons/sass/sass-original.svg'
import FirebaseIcon from '../../../../node_modules/devicon/icons/firebase/firebase-original.svg'
import AxiosIcon from '../../../../node_modules/devicon/icons/axios/axios-plain.svg'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Frontend', 'Backend', 'Tools']


  const skills = [
      // Frontend
      { name: "React", icon: ReactIcon, category: "Frontend" },
      { name: "Next.js", icon: NextIcon, category: "Frontend" },
      { name: "Vite", icon: ViteIcon, category: "Frontend" },
      { name: "HTML5", icon: HtmlIcon, category: "Frontend" },
      { name: "CSS3", icon: CssIcon, category: "Frontend" },
      { name: "Tailwind", icon: TailwindIcon, category: "Frontend" },
      { name: "WordPress", icon: WordpressIcon, category: "Frontend" },
      { name: "Sass", icon: SassIcon, category: "Frontend" },
      { name: "Axios", icon: AxiosIcon, category: ["Frontend", "Backend"] },

      // Backend
      { name: "Node.js", icon: NodeIcon, category: "Backend" },
      { name: "Python", icon: PythonIcon, category: "Backend" },
      { name: "SQL", icon: SqlIcon, category: "Backend" },

      // Tools
      { name: "Oracle", icon: OracleIcon, category: "Backend" },
      { name: "Firebase", icon: FirebaseIcon, category: "Tools" },
  ]

  const filteredSkills = activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory)

  return (
    <section className={styles.skillsSection} >
        <Title text={"Skills"} id="skills"/>

        <div className={styles.categoryButtons}>
          {categories.map((category)=>(
            <button
              key={category}
              className={`${styles.categoryBtn} ${activeCategory  === category ? styles.active : ''}`}
              onClick={()=> setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div className={styles.skillsGrid}>
          <AnimatePresence>
            {filteredSkills.map((skill, index)=>(
              <motion.div
                className={styles.skillCard}
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <img src={skill.icon} alt={skill.name} className={styles.skillIcon}></img>
                <p className={styles.skillName}>{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
    </section>
  )
}
