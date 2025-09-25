'use client'
import Link from 'next/link'
import styles from './Links.module.css'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion';
export default function Links() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre Mim' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/skills', label: 'Skills' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
     <nav className={styles.linksWrapper}>
      <ul className={styles.links}>
        {links.map(link => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
          return (
            <li key={link.href} className={styles.linkWrapper}>
              {/* Indicador apenas no link ativo */}
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
  )
}
