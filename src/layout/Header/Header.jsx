'use client'
import styles from './Header.module.css'
import Image from "next/image"
import Links from './Links/Links'

export default function Header() {
  return (
    <header className={styles.header}>
        
        <Links/>
    </header>
  )
}
