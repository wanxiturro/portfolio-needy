/*
EN:
Challenge-style button for a much nicer look; it glitches when you touch it.

_______________________________________________________________________________________

ES:
Botón estilo reto para un visual mucho más bonito, se glichea cuando lo tocas.
*/

'use client'

import Link from 'next/link'
import { useState } from 'react'

interface RetroButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function RetroButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '' 
}: RetroButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const baseStyles = 'px-6 py-3 font-bold transition-all duration-300 inline-block relative overflow-hidden'
  
  const variants = {
    primary: 'retro-button',
    secondary: 'border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black'
  }

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className} ${isHovered ? 'glitch-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {isHovered && (
        <>
          <span className="absolute inset-0 bg-neon-pink/20 animate-glitch-1" />
          <span className="absolute inset-0 bg-neon-blue/20 animate-glitch-2" />
          <span className="absolute inset-0 bg-neon-yellow/20 animate-glitch-3" />
        </>
      )}
      
      <span className="relative z-10">{children}</span>

      {isHovered && (
        <span className="absolute top-0 left-0 w-full h-1 bg-white/50 animate-scan" />
      )}
    </Link>
  )
}