'use client'
import styles from './Header.module.css'

import Links from './Links/Links'
import Sidebar from './Sidebar/Sidebar'
import useIsMobile from '@/components/useIsMobile/useIsMobile'

export default function Header() {
  const isMobile = useIsMobile() // breakpoint padrão: 768px
  return (
    <header className={styles.header}>
      {!isMobile ?<Links/> :<Sidebar/> }
    </header>
  )
}
