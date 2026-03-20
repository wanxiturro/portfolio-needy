import type { Metadata } from 'next'
import { Orbitron, IBM_Plex_Mono } from 'next/font/google'
import { GlitchProvider } from '@/context/GlitchContext'
import GlitchOverlay from '@/components/ui/GlitchOverlay'
import MobileBlocker from '@/components/ui/MobileBlocker' // ← Importar
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wanxiturro - Portfolio',
  description: 'Needystreamer portfolio theme',
  icons: {
    icon: [
      { url: 'favicon.ico', sizes: 'any' },
    ],
    shortcut: ['favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${ibmPlexMono.variable}`}>
      <body className="font-mono antialiased">
        <GlitchProvider>
          <MobileBlocker />
          
          <div className="anime-background">
            <div className="bg-gradient-layer"></div>
            <div className="bg-scanlines"></div>
            <div className="bg-noise"></div>
            <div className="bg-grid"></div>
            <div className="bg-circles">
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
            </div>
          </div>
          
          <GlitchOverlay />
          {children}
        </GlitchProvider>
      </body>
    </html>
  )
}