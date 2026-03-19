/*
EN:
  Page header section, here you can change the website redirects if
    you need to at any time, here is also the Ame mascot that appears
    in the lower left corner and gives random messages, if you want to configure or change something
    do it here.
  
_______________________________________________________________________________________

ES:
  Sección cabezal de la página, acá podrás cambiar las redirecciones de la web por si
    en algún momento lo requieres, acá tambien se encuentra la mascota de ame que aparece
    al lado inferior izquierdo y da mensaje randoms, si quieres configurar o cambiarle algo
    hazlo acá.
*/

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [time, setTime] = useState('00:00:00')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mascotMessage, setMascotMessage] = useState('いらっしゃいませ！ ✨')
  const [showMascot, setShowMascot] = useState(false)
  const [logoImage, setLogoImage] = useState('/images/gifs/kangel-cheer.gif')
  const pathname = usePathname()

  const regularImages = [
    '/images/wx.png',
  ]

  const specialGifs = [
    '/images/gifs/kangel-cheer.gif',
  ]

  useEffect(() => {
    const random = Math.random()
    if (random < 0.01) { 
      const randomSpecialIndex = Math.floor(Math.random() * specialGifs.length)
      setLogoImage(specialGifs[randomSpecialIndex])
    } else {
      const randomRegularIndex = Math.floor(Math.random() * regularImages.length)
      setLogoImage(regularImages[randomRegularIndex])
    }
  }, [pathname])

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString('es-ES', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }, 1000)

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = (currentScroll / totalScroll) * 100
      setScrollProgress(progress)
    }

    const messages = [
      'Scroll down!',
      'WAN is the best!',
      'Press me',
      'Needystreamer forever',
      'INTERNET YAMERO',
      '80s vibe',
      'Byte my heart',
      'Now playing: Aiobahn +81 feat. KOTOKO - INTERNET YAMERO'
    ]

    const messageInterval = setInterval(() => {
      setMascotMessage(messages[Math.floor(Math.random() * messages.length)])
    }, 5000)

    setTimeout(() => setShowMascot(true), 7000)

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(timer)
      clearInterval(messageInterval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'STATS', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ]

  const getStressColor = () => {
    if (scrollProgress < 30) return 'text-neon-green'
    if (scrollProgress < 60) return 'text-neon-yellow'
    return 'text-neon-pink'
  }

  return (
    <header className="mb-8 sticky top-0 z-50">
      <div className="vhs-container backdrop-blur-md bg-black/40">
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-neon-pink/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative group">
              <Image
                src={logoImage}
                alt="logo"
                fill
                className="object-contain pixelated"
                unoptimized
              />
              {specialGifs.includes(logoImage) && (
                <div className="absolute -top-1 -right-1 w-2 h-2">
                  <span className="absolute w-2 h-2 bg-neon-pink rounded-full animate-ping opacity-75"></span>
                  <span className="absolute w-2 h-2 bg-neon-pink rounded-full"></span>
                </div>
              )}
            </div>
            <div>
              <h2 className="font-display text-sm md:text-base text-neon-pink">Wanxiturro</h2>
              <p className="text-[10px] font-mono text-neon-blue/70">DEVELOPER MODE</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className={`text-xs font-mono ${getStressColor()} mb-1 flex items-center gap-1`}>
                <span>STRESS</span>
                <span className="font-bold">{Math.round(scrollProgress)}%</span>
              </div>
              <div className="power-bar w-32">
                <div 
                  className="power-bar-fill"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>

            <div className="font-mono text-sm bg-black/70 px-3 py-1 border border-neon-pink relative overflow-hidden group">
              <span className="text-white relative z-10 ml-1">{time}</span>
              <div className="absolute inset-0 bg-linear-to-r from-neon-pink/0 via-neon-pink/20 to-neon-pink/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-1 md:gap-2">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className="group relative px-3 py-2 md:px-4 font-mono text-sm md:text-base"
              >
                <span className="absolute -top-2 -left-2 text-[8px] text-neon-blue opacity-50">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                
                <span className="relative z-10 text-white/80 group-hover:text-neon-pink transition-colors">
                  {item.name}
                </span>
                
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-neon-pink to-neon-blue group-hover:w-full transition-all duration-300"></span>
                
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <span className="absolute inset-0 bg-neon-pink/10 animate-glitch-1"></span>
                  <span className="absolute inset-0 bg-neon-blue/10 animate-glitch-2"></span>
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
            <span className="text-neon-green hidden sm:inline">ONLINE</span>
          </div>
        </nav>
      </div>

      <div 
        className={`fixed bottom-0 left-0 z-50 transition-all duration-500 transform ${
          showMascot ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="relative group">
          <div className="relative w-32 h-432 md:w-40 md:h-40 lg:w-32 lg:h-32">
            <Image
              src="/images/gifs/nso2.gif"
              alt="ame mascot"
              fill
              className="object-contain pixelated"
              unoptimized
            />
          </div>
          
          <div className="absolute bottom-full left-0 mb-4 w-56 bg-black/90 border border-neon-pink p-3 rounded-lg text-xs font-mono text-white/90 backdrop-blur">
            <p className="animate-pulse">{mascotMessage}</p>
            <div className="absolute -bottom-1 left-6 w-2 h-2 bg-black/90 border-r border-b border-neon-pink transform rotate-45"></div>
          </div>
          
          <div className="absolute -top-8 left-0 hidden group-hover:block bg-black/80 border border-neon-blue px-3 py-1.5 text-[10px] font-mono text-neon-blue whitespace-nowrap">
            アメが私たちに同行します。
          </div>
        </div>
      </div>
    </header>
  )
}