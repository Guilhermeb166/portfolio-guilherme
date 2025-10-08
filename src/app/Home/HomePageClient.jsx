'use client';
import {  useEffect } from 'react';
import { useActiveSection } from '@/components/utils/Context/ActiveSectionContext';
import styles from '../page.module.css'
import Title from "@/components/title/Title";
import AboutMe from './aboutMe/AboutMe';
import Introduction from './Introduction/Introduction';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
export default function HomePageClient() {

  const { setActiveSection } = useActiveSection();

  // Este useEffect observa as seções e atualiza o estado global
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`Seção: ${entry.target.id}, Está visível? ${entry.isIntersecting}, Proporção visível: ${entry.intersectionRatio.toFixed(2)}`);
          if (entry.isIntersecting) {
            // Usa a função do contexto para atualizar o estado
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.2 // A seção precisa estar 50% visível
      } 
    );

    sections.forEach((section) => observer.observe(section));

    // Função de limpeza para desconectar o observer
    return () => {
        sections.forEach((section) => {
            observer.unobserve(section)
        });
    };
  }, [setActiveSection]);

  // O JSX que antes estava na page.js agora fica aqui
  return ( 
      <main className={styles.Home} >  
          <Introduction />     
          <AboutMe />
          <section id="projects" className={styles.sectionWrapper}>
            <Title text='Projects' />
            <Projects />
          </section>
          <Skills />
      </main>
  );
}