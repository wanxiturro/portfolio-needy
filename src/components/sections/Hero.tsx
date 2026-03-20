/*
EN:
  Main section where your pfp and gifs are displayed next to it, I recommend changing
    the PFP and GIFs to your liking; you can add them to the <"public/images/gifs"> folder.

_______________________________________________________________________________________

ES:
  Sección principal donde se muestra tu pfp y gif al lado de la misma, te recomiendo cambiar
    la pfp y los gif a tu gusto, puedes añadirlos a la carpete de <"public/images/gifs">.
*/


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import RetroButton from '../ui/RetroButton'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = '> Fullstack Developer / Lvl ???'
  const [viewers, setViewers] = useState('0')

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, 100)

    const viewerInterval = setInterval(() => {
      setViewers(Math.floor(Math.random() * 1000 + 500).toString())
    }, 3000)
    
    return () => {
      clearInterval(typing)
      clearInterval(viewerInterval)
    }
  }, [])

  return (
    <section className="vhs-container mb-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      <div className="flex justify-center gap-2 mb-4 relative z-10">
        <span className="episode-badge flex items-center gap-2">
          <span className="w-2 h-2 bg-neon-red rounded-full animate-pulse"></span>
          {viewers} viewers
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6 relative z-10">
        <div className="w-24 h-24 md:w-32 md:h-32 relative floating">
          <Image
            src="../images/gifs/muse-dash-internet-yamero.gif"
            alt="Ame-chan dancing"
            fill
            className="object-contain pixelated"
            unoptimized
          />
        </div>

        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-neon-pink overflow-hidden glow-effect">
            <Image
              src="../images/wx.png"
              alt="Wanxiturro - Developer"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 px-3 py-1 rounded-full border border-neon-blue">
            <span className="text-xs font-mono text-neon-blue">live on</span>
          </div>
        </div>

        <div className="w-24 h-24 md:w-32 md:h-32 relative floating" style={{ animationDelay: '-2s' }}>
          <Image
            src="../images/gifs/kangel-dance.gif"
            alt="Kangel cheering"
            fill
            className="object-contain pixelated"
            unoptimized
          />
        </div>
      </div>

      <h1 className="retro-title relative z-10 mb-4" data-text="WANXITURRO">
        <span className="text-neon-pink">WAN</span>{''}
        <span className="glitch-text inline-block" data-text="XITURRO">
          XITURRO
        </span>
      </h1>

      <div className="font-mono text-neon-green text-lg md:text-xl mb-6 h-8 relative z-10">
        {displayText}
        <span className="animate-pulse">_</span>
      </div>

      <div className="max-w-2xl mx-auto mb-6 font-mono text-white/80 relative z-10 space-y-4">
        <p className="text-sm md:text-base">
          Computer Engineer with <span className="text-neon-pink">4+ years</span> of technical experience in the full software development lifecycle and infrastructure management.
        </p>
        <p className="text-sm md:text-base">
          I specialize in the <span className="text-neon-blue">JavaScript ecosystem</span> (Next.js, Node.js) and mobile development with <span className="text-neon-green">Flutter</span>, building robust and scalable applications.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto mb-8 relative z-10">
        {['Next.js', 'React', 'TypeScript', 'Node.js', 'Flutter', 'Dart', 'MongoDB', 'PostgreSQL', 'Docker', 'CCNA'].map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 border border-neon-blue/30 text-neon-blue/80 hover:border-neon-pink hover:text-neon-pink transition-colors">
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8 relative z-10">
        {[
          { label: 'PROJECTS', value: '25+' },
          { label: 'CERTIFICATIONS', value: '5' },
          { label: 'YEARS EXP', value: '4+' },
          { label: 'TECH STACKS', value: '15+' }
        ].map((stat) => (
          <div key={stat.label} className="border border-neon-blue/30 p-2">
            <div className="text-2xl font-orbitron text-neon-pink">{stat.value}</div>
            <div className="text-xs font-mono text-neon-blue">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 justify-center relative z-10">
        <RetroButton href="/projects" variant="primary">
          VIEW PROJECTS
        </RetroButton>
        <RetroButton href="/contact" variant="secondary">
          COLLABORATE
        </RetroButton>
      </div>

      <div className="absolute -bottom-3 left-0 w-20 h-20 opacity-30 rotate-12 hidden lg:block">
        <Image
          src="../images/gifs/kangel-gli.gif"
          alt="Kangel glitch"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="absolute -bottom-3 right-0 w-20 h-20 opacity-30 rotate-352 hidden lg:block">
        <Image
          src="../images/gifs/kangel-gli.gif"
          alt="Kangel glitch"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </section>
  )
}