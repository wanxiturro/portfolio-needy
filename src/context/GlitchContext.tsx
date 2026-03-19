/*
EN:
If you switch windows and then re-enter, there's a 3% chance
that the screen will glitch with a random "ame" message.
You can try to trigger this glitch or find a way to activate it without any chance of it happening.

There's only one (1) clue on the page, but you can find it by reading this code.

_______________________________________________________________________________________

ES:
Si cambias de ventana y vuelve a entrar habrá una probabilidad del 3%
en que te aparezca glicheado la pantalla con un mensaje aleatorio de ame,
puedes intentar a que te aparezca la probabilidad o ingenieartelas y encontrar el código
para poder activarla sin ningún tipo de probabilidad.

En la página hay una (1) sola pista de ello, pero puedes encontrarla leyendo este código.
*/


'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface GlitchContextType {
  isGlitching: boolean
  triggerGlitch: () => void
  glitchIntensity: number
  setGlitchIntensity: (intensity: number) => void
  tabChangeCount: number
}

const GlitchContext = createContext<GlitchContextType | undefined>(undefined)

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
const KEY_ALIAS = { 'b': 'KeyB', 'a': 'KeyA' }

export function GlitchProvider({ children }: { children: ReactNode }) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchIntensity, setGlitchIntensity] = useState(1)
  const [keys, setKeys] = useState<string[]>([])
  const [lastTabChange, setLastTabChange] = useState(0)
  const [tabChangeCount, setTabChangeCount] = useState(0)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        return
      }
      
      const now = Date.now()
      
      if (now - lastTabChange > 10000) {

        setTabChangeCount(prev => prev + 1)
        
        if (Math.random() < 0.03) {
          console.log('🎮 EASTER EGG: Glitch activated!') // Para debug
          
          const randomIntensity = 0.8 + Math.random() * 1.2
          setGlitchIntensity(randomIntensity)
          
          setIsGlitching(true)
          
          const duration = 2000 + Math.random() * 3000
          setTimeout(() => {
            setIsGlitching(false)
            setGlitchIntensity(1)
          }, duration)
        }
        
        setLastTabChange(now)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [lastTabChange])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.code === KEY_ALIAS[e.key as keyof typeof KEY_ALIAS] ? e.key : e.code
      
      const newKeys = [...keys, key]

      if (newKeys.length > KONAMI_CODE.length) {
        newKeys.shift()
      }
      
      setKeys(newKeys)

      const konamiMatch = KONAMI_CODE.every((code, index) => {
        const expectedKey = code.startsWith('Key') ? code : code
        const actualKey = newKeys[newKeys.length - KONAMI_CODE.length + index]
        return actualKey === expectedKey
      })

      if (konamiMatch) {
        console.log('code¡')
        setIsGlitching(true)
        setGlitchIntensity(2.0) 
        setTimeout(() => {
          setIsGlitching(false)
          setGlitchIntensity(1)
        }, 5000)
        setKeys([]) 
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [keys])

  return (
    <GlitchContext.Provider value={{ 
      isGlitching, 
      triggerGlitch: () => {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 3000)
      },
      glitchIntensity,
      setGlitchIntensity,
      tabChangeCount
    }}>
      {children}
    </GlitchContext.Provider>
  )
}

export function useGlitch() {
  const context = useContext(GlitchContext)
  if (context === undefined) {
    throw new Error('useGlitch must be used within a GlitchProvider')
  }
  return context
}