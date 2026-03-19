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


export default function AboutPage() {
  const skills = [
    { name: 'Next.js / React', level: 90, icon: '▲', color: 'neon-pink' },
    { name: 'TypeScript', level: 85, icon: 'TS', color: 'neon-blue' },
    { name: 'Node.js', level: 80, icon: '⚙️', color: 'neon-green' },
    { name: 'Tailwind CSS', level: 95, icon: '🌊', color: 'neon-purple' },
    { name: 'Flutter', level: 75, icon: '🦋', color: 'neon-yellow' },
    { name: 'Docker', level: 70, icon: '🐳', color: 'neon-orange' }
  ]

  const stats = [
    { label: 'YEARS OF EXPERIENCE', value: '4+', icon: '⏰' },
    { label: 'PROJECTS COMPLETED', value: '25+', icon: '📼' },
    { label: 'COFFEE CUPS', value: '∞', icon: '☕' },
    { label: 'CERTIFICATIONS', value: '5', icon: '📜' }
  ]

const techStack = [
  { 
    name: 'Next.js', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ), 
    color: 'neon-pink' 
  },
  { 
    name: 'React', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
        <path d="M8 12C8 6.47715 9.79086 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79086 22 8 17.5228 8 12Z"></path>
        <path d="M9.97529 8.58334C14.8173 5.85973 19.649 5.1815 20.7673 7.06847C21.8855 8.95544 18.8667 12.6931 14.0247 15.4167C9.18269 18.1403 4.35097 18.8185 3.23275 16.9315C2.11454 15.0446 5.13327 11.3069 9.97529 8.58334Z"></path>
        <path d="M14.0247 8.58334C18.8667 11.3069 21.8855 15.0446 20.7672 16.9315C19.649 18.8185 14.8173 18.1403 9.97529 15.4167C5.13327 12.6931 2.11454 8.95544 3.23275 7.06847C4.35097 5.18151 9.18269 5.85973 14.0247 8.58334Z"></path>
        <path d="M12 12V12.01"></path>
      </svg>
    ), 
    color: 'neon-blue' 
  },
  { 
    name: 'TypeScript', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1"></path>
        <path d="M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
        <path d="M3.5 15h3"></path>
        <path d="M5 15v6"></path>
      </svg>
    ), 
    color: 'neon-blue' 
  },
  { 
    name: 'Node.js', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
        <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path>
        <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path>
      </svg>
    ), 
    color: 'neon-green' 
  },
  { 
    name: 'Flutter', 
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto">
        <polyline points="15.383 18.316 18.744 15.042 27.093 15.042 19.697 22.438 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316" fill="currentColor"></polyline>
        <polygon points="4.907 16.125 9.106 20.424 27.093 2.287 18.744 2.287 4.907 16.125" fill="currentColor"></polygon>
        <polygon points="11.176 22.479 15.435 26.675 19.697 22.438 15.383 18.316 11.176 22.479" fill="currentColor"></polygon>
        <polygon points="15.435 26.675 19.697 22.438 26.989 29.813 18.593 29.813 15.435 26.675" fill="currentColor"></polygon>
        <polygon points="15.435 26.675 19.406 25.354 18.068 24.057 15.435 26.675" fill="currentColor"></polygon>
      </svg>
    ), 
    color: 'neon-yellow' 
  },
  { 
    name: 'Dart', 
    icon: (
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <g fill="currentColor">
          <path opacity="0.54" d="M30.63 26.162h3.038c1.031 0 1.931.213 2.7.64a4.41 4.41 0 0 1 1.773 1.779c.413.76.619 1.63.619 2.616 0 .985-.206 1.856-.619 2.616a4.403 4.403 0 0 1-1.772 1.778c-.769.427-1.669.64-2.701.64H30.63V26.162zm3.038 8.932c1.191 0 2.135-.342 2.834-1.027.698-.684 1.048-1.64 1.048-2.87 0-1.228-.35-2.184-1.048-2.869-.698-.685-1.643-1.026-2.834-1.026h-1.856v7.79h1.856v.002zM40.6 36.148a2.312 2.312 0 0 1-.956-.851 2.277 2.277 0 0 1-.337-1.23c0-.76.285-1.353.858-1.78.57-.426 1.293-.64 2.166-.64.43 0 .831.048 1.202.142.37.094.654.202.851.323v-.436c0-.534-.187-.963-.562-1.287-.375-.323-.85-.485-1.42-.485-.404 0-.774.087-1.112.26a2.028 2.028 0 0 0-.802.725l-.9-.675a2.876 2.876 0 0 1 1.16-1.012 3.642 3.642 0 0 1 1.639-.366c.975 0 1.741.255 2.3.766.557.512.836 1.208.836 2.089v4.542h-1.139v-1.026h-.056c-.206.347-.516.641-.929.885a2.686 2.686 0 0 1-1.393.366c-.523 0-.992-.103-1.406-.31zm2.645-1.054c.346-.206.623-.483.83-.83.205-.346.31-.726.31-1.139a2.955 2.955 0 0 0-.83-.366 3.771 3.771 0 0 0-1.041-.14c-.657 0-1.152.135-1.484.407a1.3 1.3 0 0 0-.5 1.055c0 .393.15.712.45.956.3.243.68.366 1.14.366.403 0 .779-.103 1.125-.309zM46.785 29.173h1.14v1.14h.055a1.95 1.95 0 0 1 .858-.986 2.588 2.588 0 0 1 1.323-.352c.206 0 .379.015.52.042v1.224a2.951 2.951 0 0 0-.647-.056c-.61 0-1.104.202-1.483.605-.38.403-.57.928-.57 1.574v3.98h-1.196v-7.171zm7.424 7.142a1.766 1.766 0 0 1-1.049-1.017 2.392 2.392 0 0 1-.14-.873v-4.282h-1.253V29.06h1.252v-2.024h1.196v2.024h1.743v1.083h-1.743v3.997c0 .402.074.7.224.891.178.21.436.317.774.317.27 0 .534-.08.787-.24v1.168a1.9 1.9 0 0 1-.429.141 2.97 2.97 0 0 1-.556.042 2.273 2.273 0 0 1-.806-.144z"></path>
          <path d="m11.061 35.949-2.567-2.567A1.746 1.746 0 0 1 8 32.196c0-.2.112-.512.197-.691l2.37-4.938.494 9.382z" fill="currentColor"></path>
          <path d="m19.85 27.061-2.567-2.567c-.223-.225-.69-.494-1.086-.494-.34 0-.672.068-.889.197l-4.74 2.37 9.283.494zM14.123 39.01h6.222v-2.666l-4.642-1.482-4.246 1.481 2.666 2.667z" fill="currentColor"></path>
          <path d="M10.569 34.567c0 .792.099.987.493 1.383l.395.395h8.888L16 31.408l-5.431-4.84v8z" fill="currentColor"></path>
          <path d="M18.468 26.567h-7.9l9.776 9.777h2.666V30.22l-3.16-3.16c-.443-.445-.837-.494-1.382-.494z" fill="currentColor"></path>
        </g>
      </svg>
    ), 
    color: 'neon-purple' 
  },
  { 
    name: 'MongoDB', 
    icon: (
      <svg width="32" height="32" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto">
        <circle cx="512" cy="512" r="512" fill="currentColor"></circle>
        <path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z" fill="#FFF"></path>
      </svg>
    ), 
    color: 'neon-green' 
  },
  { 
    name: 'Docker', 
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <path d="M27.5 16.5C27.5 16.5 25.5 16 24 16C24 15.2 23.5 13.5 22.5 13C21.5 12.5 20 13 20 14C20 14 19 16 22 17C20 18 18 18 16 18H5.5C5.5 18 5 21 8 23C11 25 16 25 20 23C24 21 26 17 27.5 16.5Z" fill="currentColor" fillOpacity="0.9"/>
        <rect x="7" y="10" width="2" height="2" fill="currentColor"/>
        <rect x="10" y="10" width="2" height="2" fill="currentColor"/>
        <rect x="13" y="10" width="2" height="2" fill="currentColor"/>
        <rect x="16" y="10" width="2" height="2" fill="currentColor"/>
        <rect x="19" y="10" width="2" height="2" fill="currentColor"/>
        <circle cx="23" cy="14" r="1" fill="currentColor"/>
        <circle cx="24" cy="16" r="1" fill="currentColor"/>
        <circle cx="22" cy="16" r="1" fill="currentColor"/>
        <path d="M3 18H6V20H3V18Z" fill="currentColor"/>
        <path d="M4 20H7V22H4V20Z" fill="currentColor"/>
      </svg>
    ), 
    color: 'neon-orange' 
  },
  { 
    name: 'PostgreSQL', 
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <path d="M25.5 10.5C25.5 10.5 24.5 7 20 6C15.5 5 13 7 12 8C11 9 10 11 10 14C10 17 12 20 15 21C18 22 21 21 22 20C23 19 24 17 24 15C24 13 23 11 25.5 10.5Z" fill="currentColor" fillOpacity="0.9"/>
        <path d="M20 6L22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 8L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 14L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 20L20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 21L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="17" cy="13" rx="2" ry="3" fill="white" fillOpacity="0.3"/>
        <circle cx="17" cy="12" r="1" fill="white"/>
        <path d="M18 19C18 19 20 20 22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 22C14 22 16 23 18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="22" cy="17" rx="1" ry="2" fill="white" fillOpacity="0.2"/>
      </svg>
    ), 
    color: 'neon-blue' 
  },
  { 
    name: 'Git', 
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.21,22.12a2.87,2.87,0,0,0,0,3.77L22.12,43.8a2.87,2.87,0,0,0,3.77,0l17.9-17.91a2.85,2.85,0,0,0,0-3.77L25.89,4.21A2.68,2.68,0,0,0,24,3.51h0a2.66,2.66,0,0,0-1.88.71Z"></path>
        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="26.33" y1="17.85" x2="30.15" y2="21.67"></line>
        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="17.4" y1="8.92" x2="21.67" y2="13.19"></line>
        <circle fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="24" cy="32.41" r="3.3"></circle>
        <circle fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="24" cy="15.52" r="3.3"></circle>
        <circle fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="32.48" cy="24" r="3.3"></circle>
        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="24" y1="29.11" x2="24" y2="18.82"></line>
      </svg>
    ), 
    color: 'neon-red' 
  }
]

  const education = [
    {
      title: 'CCNA (Routing & Switching)',
      institution: 'Cisco',
      year: '2023',
      icon: '🌐'
    },
    {
      title: 'Cybersecurity Auditing',
      institution: 'Certified',
      year: '2024',
      icon: '🔒'
    },
    {
      title: 'Computer Engineering',
      institution: 'University Degree',
      year: '2021',
      icon: '💻'
    }
  ]

  return (
    <main className="min-h-screen p-4 md:p-8 bg-vhs-black">
      <Header />
      <StatusBar />

      <div className="vhs-container mb-8">
        <h1 className="retro-title text-4xl md:text-5xl mb-6" data-text="ABOUT ME">
          ABOUT ME
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-neon-pink overflow-hidden glow-effect mb-4">
                <Image
                  src="/images/wx.png"
                  alt="Wanxiturro"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 border border-neon-blue px-4 py-2 rounded-full">
                <span className="text-sm font-mono text-neon-blue">CLASS: FULL STACK DEV</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl font-display text-neon-pink">Wanxiturro</p>
              <p className="text-sm font-mono text-neon-blue/70 mt-1">LEVEL ??? • SPECIALIST</p>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <a href="https://github.com/wanxiturro" target="_blank" rel="noopener noreferrer" className="text-2xl text-neon-blue/50 hover:text-neon-pink transition-colors">
                <span>🐙</span>
              </a>
              <a href="https://linkedin.com/in/wanxiturro" target="_blank" rel="noopener noreferrer" className="text-2xl text-neon-blue/50 hover:text-neon-pink transition-colors">
                <span>💼</span>
              </a>
              <a href="mailto:wanxiturro@email.com" className="text-2xl text-neon-blue/50 hover:text-neon-pink transition-colors">
                <span>📧</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(stat => (
                <div key={stat.label} className="border border-neon-pink/30 p-4 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-display text-neon-pink">{stat.value}</div>
                  <div className="text-xs font-mono text-neon-blue/70">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-neon-pink font-mono text-sm mb-4">SKILLS // TECHNIQUES</h3>
              {skills.map(skill => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className={`text-${skill.color} flex items-center gap-1`}>
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="power-bar">
                    <div 
                      className="power-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="vhs-container mb-8">
        <h2 className="text-2xl font-display text-neon-pink mb-4 flex items-center gap-2">
          <span>⚡</span> TECH STACK
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {techStack.map(tech => (
            <div 
              key={tech.name} 
              className={`border border-${tech.color}/30 p-3 text-center group hover:border-${tech.color} transition-all duration-300`}
            >
              <div className={`text-2xl mb-1 group-hover:scale-110 transition-transform text-${tech.color}`}>
                {tech.icon}
              </div>
              <div className={`text-xs font-mono text-${tech.color}/70`}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vhs-container mb-8">
        <h2 className="text-2xl font-display text-neon-pink mb-4 flex items-center gap-2">
          <span>📚</span> EDUCATION & CERTIFICATIONS
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {education.map(edu => (
            <div key={edu.title} className="border border-neon-blue/30 p-4">
              <div className="text-3xl mb-2">{edu.icon}</div>
              <h3 className="font-display text-neon-blue text-sm">{edu.title}</h3>
              <p className="text-[10px] font-mono text-white/50 mt-1">{edu.institution}</p>
              <p className="text-[8px] font-mono text-neon-pink/50 mt-2">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vhs-container mb-8">
        <h2 className="text-2xl font-display text-neon-pink mb-4 flex items-center gap-2">
          <span>📖</span> ORIGIN STORY
        </h2>
        <div className="font-mono text-white/80 space-y-4">
          <p>
            Computer Engineer with <span className="text-neon-pink">4+ years</span> of experience in full software development lifecycle 
            and infrastructure management. Specialized in the JavaScript ecosystem (Next.js, Node.js) 
            and mobile development with Flutter.
          </p>
          <p>
            What sets me apart is my <span className="text-neon-blue">360° approach</span>: backed by certifications in CCNA (Networking) 
            and Cybersecurity Auditing, I don't just build functional solutions—I architect them 
            with security and network optimization at their core.
          </p>
          <p className="text-neon-green">
            "Code is my brush, the browser is my canvas."
          </p>
        </div>
      </div>

      <div className="vhs-container mb-8">
        <h2 className="text-2xl font-display text-neon-pink mb-4 flex items-center gap-2">
          <span>⚡</span> EQUIPMENT
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { item: 'VS CODE', power: 'S+', icon: '📝', desc: 'Main weapon' },
            { item: 'TERMINAL', power: 'S', icon: '💻', desc: 'Command line' },
            { item: 'GITHUB', power: 'A+', icon: '🐙', desc: 'Version control' },
            { item: 'COFFEE', power: 'EX', icon: '☕', desc: 'Fuel source' }
          ].map(equip => (
            <div key={equip.item} className="border border-neon-blue/30 p-4 text-center group hover:border-neon-pink transition-colors">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{equip.icon}</div>
              <div className="font-display text-neon-blue text-sm">{equip.item}</div>
              <div className="text-xs font-mono text-neon-pink/70 mt-1">POWER {equip.power}</div>
              <div className="text-[6px] font-mono text-white/30 mt-1">{equip.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <footer className="vhs-container text-center text-sm opacity-70 relative">
        <Link href="/" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue hover:text-neon-pink transition-colors">
          ← BACK
        </Link>
        <p className="font-mono">PROFILE UPDATED 2026</p>
      </footer>
    </main>
  )
}