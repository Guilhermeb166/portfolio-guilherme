'use client';
import {  useEffect, useState, useRef } from 'react';
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
  const { activeSection, setActiveSection } = useActiveSection();
  const observerRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;
    const timeoutId = setTimeout(() => {

        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {

              console.log(`Seção: ${entry.target.id}, Está visível? ${entry.isIntersecting}, Proporção visível: ${entry.intersectionRatio.toFixed(2)}`);
              if (entry.isIntersecting) {

                setActiveSection(entry.target.id);
              }
            });
          },
          { 
            
            threshold: 0.2 
          } 
        );


        observerRef.current = observer;

        sections.forEach((section) => observer.observe(section));

  
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section)
            });
            clearTimeout(timeoutId);
        };
    }, 500); 

    return () => {
        
        clearTimeout(timeoutId);

        if (observerRef.current) {
            observerRef.current.disconnect();
        }
    };
  }, [isLoaded, setActiveSection]); 


  useEffect(() => {
      const handleLoad = () => {
        setTimeout(() => setIsLoaded(true), 500) 
      }
      if (document.readyState === 'complete') {
        handleLoad()
      } else {
        window.addEventListener('load', handleLoad)
        return () => window.removeEventListener('load', handleLoad)
      }
  }, [])


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