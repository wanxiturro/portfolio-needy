/*
EN:
Welcome!
This page is for you to showcase your projects with the Needy Girl Overdose style. 
You can collaborate, modify, or use this code however you like, as long as you credit me :)

Made by wanxiturro
Github :: @wanxiturro

_______________________________________________________________________________________

ES:
¡Bienvenido!
Está página fue creada con mucho amor para que puedas mostrar tus proyectos al estilo Needy Girl Overdose.
Puedes colaborar, modificar o usar este código como tu quieras o requieras, solamente pido que dejes
mis créditos de autor.

Hecho por Wanxiturro
Github :: @wanxiturro
*/

'use client' 

import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import RetroButton from '@/components/ui/RetroButton'
import StatusBar from '@/components/ui/StatusBar'
import { useGlitch } from '@/context/GlitchContext'


export default function Home() {
  const { triggerGlitch } = useGlitch()
  return (
    <main className="min-h-screen p-4 md:p-8 bg-vhs-black">

      <Header />

      <Hero />

    <div className="vhs-container mb-8 text-center">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-3xl font-display text-neon-pink">12.5K</div>
          <div className="text-xs font-mono text-neon-blue">FOLLOWERS</div>
        </div>
        <div>
          <div className="text-3xl font-display text-neon-blue">1.2M</div>
          <div className="text-xs font-mono text-neon-pink">TOTAL VIEWS</div>
        </div>
        <div>
          <div className="text-3xl font-display text-neon-yellow">∞</div>
          <div className="text-xs font-mono text-neon-green">STRESS LEVEL</div>
        </div>
      </div>
    </div>

    <footer className="vhs-container text-center py-6 relative overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-t from-neon-pink/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 space-y-4">

        <p className="font-mono text-xs text-white/40">
          © 2026 — created by <span className="text-neon-pink hover:text-neon-blue transition-colors">wanxiturro</span>
        </p>

        <div className="flex justify-center gap-2 text-[16px] font-mono">
          <span className="text-neon-blue/50">Next.js</span>
          <span className="text-white/20">•</span>
          <span className="text-neon-pink/50">Tailwind</span>
          <span className="text-white/20">•</span>
          <span className="text-neon-purple/50">TypeScript</span>
        </div>

        <div className="flex justify-center pt-2">
          <a 
            href="https://github.com/wanxiturro/portfolio-needy" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-black/50 border-2 border-neon-blue/50 hover:border-neon-pink transition-all duration-300"
          >
          
            <span className="absolute inset-0 bg-neon-pink/0 group-hover:bg-neon-pink/20 transition-colors"></span>

            <div className="relative flex items-center gap-3">

              <span className="text-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform">🐙</span>

              <div className="text-left">
                <p className="font-mono text-sm text-white/80 group-hover:text-neon-pink transition-colors">
                  contribute
                </p>
                <p className="text-[8px] font-mono text-white/30">
                  open source
                </p>
              </div>

              <span className="absolute -top-2 -right-2 text-[8px] px-1 bg-neon-pink text-black font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                ✦
              </span>
            </div>

            <div className="absolute -inset-1 bg-linear-to-r from-neon-pink via-neon-blue to-neon-purple opacity-0 group-hover:opacity-30 blur-lg -z-10 transition-opacity"></div>
          </a>
        </div>

        <p className="text-[10px] font-mono text-white/20 flex items-center justify-center gap-2">
          <span>POWERED BY OPEN SOURCE</span>
        </p>

        {/* Código Konami oculto */}
        <div className="text-[4px] text-white/5">
          ↑↑↓↓←→←→BA
        </div>
      </div>
    </footer>
    </main>
  )
}