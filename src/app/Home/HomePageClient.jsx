'use client';
import {  useEffect, useState } from 'react';
import { useActiveSection } from '@/components/utils/Context/ActiveSectionContext';
import styles from '../page.module.css'
import Title from "@/components/title/Title";
import AboutMe from './aboutMe/AboutMe';
import Introduction from './Introduction/Introduction';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Loading from '@/components/Loading/Loading';

export default function HomePageClient() {
  const [isLoaded, setIsLoaded] = useState(false)
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

  useEffect(() => {
      const handleLoad = () => {
        setTimeout(() => setIsLoaded(true), 500) // pequeno delay pra suavizar
      }
      if (document.readyState === 'complete') {
        handleLoad()
      } else {
        window.addEventListener('load', handleLoad)
        return () => window.removeEventListener('load', handleLoad)
      }
  }, [])

  // O JSX que antes estava na page.js agora fica aqui
  return ( 
      <>
          {!isLoaded && <Loading/>}

          {isLoaded && (
            <main className={styles.Home}>
              <Introduction />
              <AboutMe />
              <section id="projects" className={styles.sectionWrapper}>
                <Title text='Projects' />
                <Projects />
              </section>
              <Skills />
              <Contact />
            </main>
          )}
      </>
  );
}