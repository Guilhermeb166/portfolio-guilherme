'use client';

import { createContext, useContext, useState } from 'react';

// Define um nome mais descritivo para o contexto para facilitar o debug
const ActiveSectionContext = createContext(null);
ActiveSectionContext.displayName = 'ActiveSectionContext';

/**
 * Provedor de Contexto para a seção ativa.
 * Envolva os componentes que precisam do estado com ele.
 */
export function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

/**
 * Hook customizado para acessar o contexto da seção ativa.
 * Simplifica o uso e adiciona uma verificação de erro.
 */
export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSection deve ser usado dentro de um ActiveSectionContextProvider'
    );
  }
  return context;
}