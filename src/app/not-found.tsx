'use client'

import Header from '@/components/layout/Header'
import StatusBar from '@/components/ui/StatusBar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [messages, setMessages] = useState(['LOADING ERROR...'])

  useEffect(() => {
    const errorMessages = [
      'PAGE NOT FOUND',
      'AME-CHAN DELETED IT',
      '404: SANITY NOT FOUND',
      'ERROR: REALITY CORRUPTED',
      'KANGEL SAYS NO',
      'INSERT DISK AND TRY AGAIN',
      'BUFFER OVERFLOW: 404',
      'THIS PAGE IS IN ANOTHER CASTLE'
    ]
    
    const interval = setInterval(() => {
      setMessages(prev => [...prev.slice(-4), errorMessages[Math.floor(Math.random() * errorMessages.length)]])
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen p-4 md:p-8 bg-vhs-black">
      <Header />
      <StatusBar />

      <div className="vhs-container mb-8 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Fondo con estática */}
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="absolute inset-0 bg-scanlines opacity-10"></div>
        
        {/* Líneas de glitch animadas */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-neon-pink/30 animate-glitch-scan"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          
          {/* Ame-chan como error */}
          <div className="relative w-48 h-48 mx-auto mb-0 group">
            <div className="relative w-full h-full">
              <Image
                src="/images/gifs/kangel-gli.gif"
                alt="Ame-chan 404"
                fill
                className="object-contain pixelated"
                unoptimized
              />
            </div>

            
            {/* Ojos X */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-4xl text-neon-red font-display">X</span>
              <span className="text-4xl text-neon-red font-display">X</span>
            </div>
            
            {/* Anillo de error */}
            <div className="absolute -inset-4 border-2 border-neon-red/0 group-hover:border-neon-red/50 rounded-full transition-all duration-500"></div>
          </div>

          {/* Código de error */}
          <h1 className="text-1xl md:text-9xl font-display text-neon-pink mb-0 glitch-text" data-text="404">
            404
          </h1>
          

          {/* Terminal de error */}
          <div className="max-w-md mx-auto bg-black/50 border border-neon-purple/30 p-4 mb-6 text-left font-mono text-xs">
            <p className="text-neon-green mb-2">$ curl https://wanxiturro.dev/page</p>
            <p className="text-neon-red mb-1">Error 404: Not Found</p>
            <p className="text-white/50 mb-2">Ame-chan intercepted your request</p>
            <p className="text-neon-blue"> SUGGESTION: Go back home</p>
          </div>

          {/* Stats del error */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-8">
            <div className="border border-neon-pink/30 p-2">
              <div className="text-xl font-display text-neon-pink">404</div>
              <div className="text-[6px] font-mono">STATUS</div>
            </div>
            <div className="border border-neon-blue/30 p-2">
              <div className="text-xl font-display text-neon-blue">∞</div>
              <div className="text-[6px] font-mono">ATTEMPTS</div>
            </div>
            <div className="border border-neon-purple/30 p-2">
              <div className="text-xl font-display text-neon-purple">0%</div>
              <div className="text-[6px] font-mono">SUCCESS</div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="retro-button">
              ← RETURN HOME
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-neon-blue text-neon-blue px-6 py-3 hover:bg-neon-blue/20 transition-colors font-mono text-sm"
            >
              GO BACK (IF YOU CAN)
            </button>
          </div>

          {/* Mensajes rotativos */}
          <div className="h-10 mb-10">
            {messages.map((msg, i) => (
              <p
                key={i}
                className="font-mono text-neon-blue text-sm animate-fade-in"
                style={{
                  opacity: i === messages.length - 1 ? 1 : 0.3,
                  transform: `translateY(${(i - messages.length + 1) * -20}px)`
                }}
              >
                {msg}
              </p>
            ))}
          </div>

          {/* Easter egg */}
          <p className="text-[6px] font-mono text-white/10 mt-8">
            AME-CHAN IS THE ERROR • AME-CHAN IS THE ERROR • AME-CHAN IS THE ERROR
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="vhs-container text-center text-sm opacity-70 relative">
        <Link href="/" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue hover:text-neon-pink transition-colors">
          ← HOME
        </Link>
        <p className="font-mono">📼 ERROR 404: PAGE SACRIFICED TO AME-CHAN</p>
      </footer>
    </main>
  )
}