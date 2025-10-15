'use client'
import { useState, useEffect } from "react"

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

    const handleChange = (e) => setIsMobile(e.matches)

    // Checa imediatamente e adiciona listener
    handleChange(mediaQuery)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [breakpoint])

  return isMobile
}
