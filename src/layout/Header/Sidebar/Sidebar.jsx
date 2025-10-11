'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useActiveSection } from "@/components/utils/Context/ActiveSectionContext"
import styles from './Sidebar.module.css'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Sidebar() {
    const {activeSection} = useActiveSection()
    const [open, setOpen] = useState(false)

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#aboutMe', label: 'Sobre Mim' },
        { href: '#projects', label: 'Projetos' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contato' },
    ];

    const toggleSidebar = () => setOpen(!open)

    return (
        <>
            <button className={styles.menuBtn} onClick={toggleSidebar}>
                {open ? <FiX size={28}/> : <FiMenu size={28}/>}
            </button>
                
                <motion.aside
                className={`${styles.sidebar} ${open ? styles.open : ''}`}
                initial={{x: '-100%'}}
                animate={{x: open ? 0 : '-100%'}}
                transition={{type: 'spring', stiffness: 70}}
                >
                    <ul className={styles.links}>
                        {links.map(link => {
                            const isActive = activeSection === link.href.replace('#', '')
                            return (
                                <li key={link.href} className={styles.linkItem}>
                                    <Link
                                        href={link.href}
                                        className={`${styles.link} ${isActive ? styles.active : ''}`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </motion.aside>
        </>
    )
}
