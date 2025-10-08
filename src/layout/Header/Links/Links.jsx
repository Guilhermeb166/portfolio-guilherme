'use client'
import Link from 'next/link'
import styles from './Links.module.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useActiveSection } from '@/components/utils/Context/ActiveSectionContext';
export default function Links() {
  const {activeSection} = useActiveSection()
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#aboutMe', label: 'Sobre Mim' },
    { href: '#projects', label: 'Projetos' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contato' },
  ];

  useEffect (()=>{
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  })


  return (
    <nav className={`${styles.linksWrapper} ${scrolled ? styles.scrolled : ''}`}>
      <ul className={styles.links}>
        {links.map(link => {
          const isActive = activeSection === link.href.replace('#', '');
          return (
            <li key={link.href} className={styles.linkWrapper}>
              {isActive && (
                <motion.div
                  layoutId="links-background"
                  className={styles.indicator}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Link
                href={link.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}