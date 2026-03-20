/*
EN:
Challenge-style button for a much nicer look; it glitches when you touch it.

_______________________________________________________________________________________

ES:
Botón estilo reto para un visual mucho más bonito, se glichea cuando lo tocas.
*/

'use client'

import { useState, useEffect } from 'react' 
import Header from '@/components/layout/Header'
import StatusBar from '@/components/ui/StatusBar'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  const ameGifs = [
    { 
      gif: "images/gifs/live.gif", 
      title: "AME-CHAN DANCING", 
      viewers: "7.0K",
      song: "EUROBEAT MIX"
    },
    { 
      gif: "images/gifs/live2.gif", 
      title: "GLITCH MODE", 
      viewers: "3.1K",
      song: "INTERNET YAMERO"
    },
    { 
      gif: "images/gifs/live3.gif", 
      title: "JUST CHILLING", 
      viewers: "500",
      song: "LO-FI BEATS"
    },
    { 
      gif: "images/gifs/live4.gif", 
      title: "NEEDY STREAM OVERDOSE", 
      viewers: "1",
      song: "Aiobahn - INTERNET YAMERO"
    },
    { 
      gif: "images/gifs/live5.gif", 
      title: "POWER MODE", 
      viewers: "4.7K",
      song: "HYPER TECHNO"
    }
  ]

  const [currentGif, setCurrentGif] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ameGifs.length)
    setCurrentGif(randomIndex)
    setIsLoading(false)
  }, [])

  const changeGif = () => {
    const randomIndex = Math.floor(Math.random() * ameGifs.length)
    setCurrentGif(randomIndex)
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-vhs-black">
      <Header />
      <StatusBar />

      <div className="vhs-container mb-8">
        <h1 className="retro-title text-4xl md:text-5xl mb-6" data-text="CONTACT">
          CONTACT
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-neon-pink font-display text-xl mb-4">GET IN TOUCH</h2>
              <p className="font-mono text-white/70 text-sm">
                Want to collaborate on a project? Have a crazy idea?
                Or do you just want to say hi? Here are my channels.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 border border-neon-blue/30 p-3 hover:border-neon-pink transition-colors group">
                <span className="text-neon-pink text-xl group-hover:scale-110 transition-transform">📧</span>
                <div>
                  <p className="text-xs font-mono text-neon-blue">EMAIL</p>
                  <a href="mailto:no@reply.com" className="font-mono text-sm text-white/80 hover:text-neon-pink transition-colors">
                    don't.have:\
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border border-neon-blue/30 p-3 hover:border-neon-pink transition-colors group">
                <span className="text-neon-pink text-xl group-hover:scale-110 transition-transform">🐙</span>
                <div>
                  <p className="text-xs font-mono text-neon-blue">GITHUB</p>
                  <a href="https://github.com/wanxiturro" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-white/80 hover:text-neon-pink transition-colors">
                    @wanxiturro
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border border-neon-blue/30 p-3 hover:border-neon-pink transition-colors group">
                <span className="text-neon-pink text-xl group-hover:scale-110 transition-transform">💼</span>
                <div>
                  <p className="text-xs font-mono text-neon-blue">LINKEDIN</p>
                  <a href="https://linkedin.com/in/wanxiturro" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-white/80 hover:text-neon-pink transition-colors">
                    /in/wanxiturro
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border border-neon-blue/30 p-3 hover:border-neon-pink transition-colors group">
                <span className="text-neon-pink text-xl group-hover:scale-110 transition-transform">📼</span>
                <div>
                  <p className="text-xs font-mono text-neon-blue">PORTFOLIO</p>
                  <a href="/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-white/80 hover:text-neon-pink transition-colors">
                    wanxiturro.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neon-pink/10 border border-neon-pink p-4">
              <p className="text-xs font-mono text-neon-pink mb-1">⏱️ RESPONSE TIME</p>
              <p className="text-2xl font-display text-neon-blue">24-48h</p>
              <p className="text-[8px] font-mono text-white/40 mt-2">* during streamer business hours</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-neon-pink/30 p-6 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-r from-neon-pink/0 via-neon-pink/10 to-neon-pink/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <p className="text-4xl mb-4">📼</p>
              <p className="font-display text-neon-pink text-xl mb-2">REWIND • PLAY • STOP</p>
              <p className="font-mono text-xs text-white/50">
                Leave me a message on any of my networks.<br />
                I'll reply as fast as a VHS tape can rewind.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="border border-neon-green/30 p-3 text-center">
                <div className="text-neon-green text-2xl mb-1">⚡</div>
                <p className="text-[10px] font-mono text-neon-green">AVAILABLE</p>
                <p className="text-[6px] font-mono text-white/30">for work</p>
              </div>
              <div className="border border-neon-blue/30 p-3 text-center">
                <div className="text-neon-blue text-2xl mb-1">🌙</div>
                <p className="text-[10px] font-mono text-neon-blue">TIMEZONE</p>
                <p className="text-[6px] font-mono text-white/30">GMT-4</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs font-mono text-white/30 italic">
                "The best way to contact me is through GitHub issues,<br />
                but email works too. I don't bite... hard."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="vhs-container mb-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-neon-pink font-display flex items-center gap-2">
              <span>📺</span> AME-CHAN LIVE
            </h2>
            <span className="text-[6px] font-mono bg-neon-purple/30 text-neon-purple px-2 py-1 rounded-full">
              RANDOM MODE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-ping"></span>
              <span className="text-[8px] font-mono text-neon-green">LIVE 24/7</span>
            </div>
            <button 
              onClick={changeGif}
              className="text-neon-blue/30 hover:text-neon-pink transition-colors text-xs"
              title="change stream"
            >
              ↻
            </button>
          </div>
        </div>
        
        <div className="aspect-video relative overflow-hidden rounded-lg border border-neon-pink/30 group">
          <div className="relative w-full h-full">
            <Image
              src={ameGifs[currentGif].gif}
              alt="Ame-chan streaming"
              fill
              className="object-cover pixelated"
              unoptimized
              priority
            />
            
            <div className="absolute top-2 left-2 flex items-center gap-2 bg-black/70 px-2 py-1 rounded border border-neon-pink/50">
              <span className="w-2 h-2 bg-neon-red rounded-full animate-pulse"></span>
              <span className="text-[8px] font-mono text-white">LIVE</span>
              <span className="text-[6px] font-mono text-neon-blue">{ameGifs[currentGif].viewers} watching</span>
            </div>
            
            <div className="absolute bottom-2 left-2 right-2 bg-linear-to-t from-black/90 via-black/60 to-transparent p-3">
              <p className="text-xs font-display text-neon-pink">🎮 {ameGifs[currentGif].title}</p>
              <p className="text-[8px] font-mono text-white/60 flex items-center gap-2 mt-1">
                <span>🎵 Now playing: {ameGifs[currentGif].song}</span>
                <span>💬 ・ {Math.floor(Math.random() * 2000 + 1000)} chat</span>
              </p>
            </div>
            
            <div className="absolute top-2 right-2">
              <span className="text-[6px] font-mono bg-neon-pink text-black px-2 py-1 animate-pulse">
                !live
              </span>
            </div>

            <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-[6px] font-mono text-white/30">
              {currentGif + 1}/{ameGifs.length}
            </div>
          </div>
        </div>
        
        <div className="mt-2 flex items-center gap-2 text-[6px] font-mono text-white/30 overflow-hidden">
          <span className="animate-pulse text-neon-pink">💬</span>
          <span className="animate-slide">ame-chan: {currentGif === 0 ? 'dancing~ 💕' : currentGif === 1 ? 'glitchy...' : currentGif === 2 ? 'hello!' : currentGif === 3 ? 'streaming~' : 'POWER!'}</span>
          <span className="animate-slide animation-delay-1000">kangel: {currentGif === 0 ? 'nice moves' : currentGif === 1 ? 'error 404' : 'pog'}</span>
          <span className="animate-slide animation-delay-2000">user: {ameGifs[currentGif].song}</span>
        </div>
      </div>

      <footer className="vhs-container text-center text-sm opacity-70 relative">
        <Link href="/" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue hover:text-neon-pink transition-colors">
          ← BACK
        </Link>
        <p className="font-mono">📼 RAVEN AND FAX MESSAGES ACCEPTED</p>
        <p className="text-[4px] text-white/5 mt-1">
          {ameGifs.length} AME-CHAN MODES • EVERY REFRESH IS A SURPRISE
        </p>
      </footer>
    </main>
  )
}