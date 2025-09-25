'use client'
import styles from './Header.module.css'
import Image from "next/image"
import Links from './Links/Links'

export default function Header() {
  return (
    <header className={styles.header}>
        {/*<div className={styles.logoDiv}>
            <Image
                src={'/img/gb.png'}
                className={styles.logo}
                width={100}
                height={100}
                priority
            />
        </div>*/}
        <Links/>
    </header>
  )
}
