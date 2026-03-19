/*
EN:
Challenge-style button for a much nicer look; it glitches when you touch it.

_______________________________________________________________________________________

ES:
Botón estilo reto para un visual mucho más bonito, se glichea cuando lo tocas.
*/

'use client'

import Header from '@/components/layout/Header'
import StatusBar from '@/components/ui/StatusBar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function DiscontinuedPage() {
  const [glitchText, setGlitchText] = useState('')
  const fullText = '> PROJECT TERMINATED'

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setGlitchText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, 150)
    return () => clearInterval(typing)
  }, [])

  return (
    <main className="min-h-screen p-4 md:p-8 bg-vhs-black">
      <Header />
      <StatusBar />

      <div className="vhs-container mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 animate-pulse"></div>
        <div className="absolute inset-0 bg-scanlines opacity-20"></div>
        
        <div className="absolute inset-0 bg-linear-to-br from-neon-red/10 via-transparent to-neon-purple/10"></div>

        <div className="relative z-10 text-center py-12">

          <div className="relative w-64 h-64 mx-auto mb-0 group">
            <div className="relative w-full h-full">
              <Image
                src="/images/gifs/nso2.gif"
                alt="Ame-chan corrupted"
                fill
                className="object-contain pixelated"
                unoptimized
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-4 bg-neon-red rounded-full animate-ping"></div>
              <div className="w-4 h-4 bg-neon-red rounded-full animate-ping animation-delay-300"></div>
            </div>
            
            <div className="absolute -inset-4 border-2 border-neon-red/30 rounded-full animate-pulse"></div>
            <div className="absolute -inset-6 border border-neon-red/20 rounded-full animate-ping opacity-30"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display text-neon-red mb-4 glitch-text" data-text="DISCONTINUED">
            DISCONTINUED
          </h1>

          <p className="font-mono text-neon-pink text-lg mb-6 h-8">
            {glitchText}
            <span className="animate-pulse">_</span>
          </p>

          <div className="max-w-md mx-auto border-2 border-neon-red/30 p-6 mb-8 relative bg-black/50">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-4 text-xs font-mono text-neon-red whitespace-nowrap">
              AME-CHAN
            </div>
            <p className="font-mono text-white/70 text-sm leading-relaxed">
              "This project is dead. Buried. Gone.<br />
              You won't find anything here. <span className="text-neon-pink">hehe~</span>"<br />
              <span className="text-[8px] text-white/30 mt-2 block">*corrupted laughter*</span>
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-xs mx-auto gap-4 mb-8">
            <div className="border border-neon-red/30 p-3">
              <div className="text-2xl font-display text-neon-red">0</div>
              <div className="text-[8px] font-mono text-white/40">LINES OF CODE</div>
            </div>
            <div className="border border-neon-purple/30 p-3">
              <div className="text-2xl font-display text-neon-purple">∞</div>
              <div className="text-[8px] font-mono text-white/40">BUGS LEFT</div>
            </div>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-xs font-mono text-neon-red mb-1">
              <span>CORRUPTION LEVEL</span>
              <span>100%</span>
            </div>
            <div className="power-bar">
              <div className="power-bar-fill" style={{ width: '100%', background: 'linear-gradient(90deg, #ff0055, #ff0000)' }}></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projects" className="retro-button">
              ← VIEW ACTIVE PROJECTS
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-neon-purple text-neon-purple px-6 py-3 hover:bg-neon-purple/20 transition-colors font-mono text-sm"
            >
              GO BACK (IT'S SAFER)
            </button>
          </div>

          <p className="text-[6px] font-mono text-white/10 mt-8">
            THIS PROJECT DIED SO OTHERS COULD LIVE
          </p>
        </div>
      </div>

      <footer className="vhs-container text-center text-sm opacity-70 relative">
        <Link href="/" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue hover:text-neon-pink transition-colors">
          ← HOME
        </Link>
        <p className="font-mono">📼 R.I.P. • PROJECT DECEASED • 2023-2024</p>
      </footer>
    </main>
  )
}