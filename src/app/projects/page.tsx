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
import RetroButton from '@/components/ui/RetroButton'
import Image from 'next/image'
import Link from 'next/link'

const secretGifs = [
  '/images/gifs/kangel.gif',
  '/images/gifs/kangel_angry.gif',
  '/images/gifs/power-kangel.gif',
  '/images/gifs/ame-chan.gif',
  '/images/gifs/amechan.gif',
]

const projects = [
  {
    id: 1,
    title: "HYPATIA - AI VIRTUAL ASSISTANT",
    episode: "EP01",
    year: "2023",
    description: "AI virtual assistant originally developed as a mobile app, later migrated to WhatsApp. Project discontinued but served as a learning experience in AI integration.",
    tech: ["JavaScript", "WhatsApp API", "AI/ML", "n8n"],
    image: "/images/projects/hypatia.jpg",
    demo: "https://www.softwans.com/hypatia",
    github: "/discontinued",
    type: "AI",
    status: "discontinued"
  },
  {
    id: 2,
    title: "MzC NETWORK",
    episode: "EP02",
    year: "2024",
    description: "Active Minecraft network where I handle security, maintenance, and development of new game modes. Currently serving hundreds of players.",
    tech: ["Java", "Minecraft API", "Network Security", "Plugin Development"],
    image: "/images/projects/minezcrafters.png",
    demo: "https://tienda.minezcrafters.com",
    github: "/404",
    type: "FULL STACK",
    status: "active"
  },
  {
    id: 3,
    title: "VEX - FREE EXCHANGE RATE APP",
    episode: "EP03",
    year: "2026",
    description: "Contributed to a free software Flutter application that shows USD to VES exchange rates without ads or spyware. Available for Android & iOS.",
    tech: ["Flutter", "Dart", "REST APIs"],
    image: "/images/projects/vex.jpg",
    demo: "https://github.com/wanxiturro/vex-tasa-libre-flutter/releases/download/v1.0.0/Vex.apk",
    github: "https://github.com/wanxiturro/vex-tasa-libre-flutter",
    type: "MOBILE",
    status: "active"
  },
  {
    id: 4,
    title: "SOFTWANS - MARKETING AGENCY WEBSITE",
    episode: "EP04",
    year: "2024",
    description: "Developed the official website for Softwans, a marketing and software agency. Modern design with focus on conversion and user experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/softwans.jpg",
    demo: "https://www.softwans.com",
    github: "/discontinued",
    type: "FRONTEND",
    status: "active"
  },
  {
    id: 5,
    title: "DIGITAL CATALOG SAAS",
    episode: "EP05",
    year: "2023",
    description: "SaaS platform that allows businesses to create digital catalogs for their products, with e-commerce functionality. Discontinued but fully functional.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/images/projects/catalogo_digital.jpg",
    demo: "/discontinued",
    github: "/discontinued",
    type: "FULL STACK",
    status: "discontinued"
  },
  {
    id: 6,
    title: "NEEDY GIRL OVERDOSE PORTFOLIO",
    episode: "EP06",
    year: "2026",
    description: "Open-source portfolio template with Needy Girl Overdose / Vaporwave aesthetics. Features glitch effects, VHS style, and retro anime vibes. Free for anyone to use and modify.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/needy-portfolio.png",
    demo: "/",
    github: "https://github.com/wanxiturro/needy-portfolio",
    type: "OPEN SOURCE",
    status: "active"
  },
  {
    id: 7,
    title: "VEFLAT TECHNICAL TEST - RICK & MORTY STORE",
    episode: "EP07",
    year: "2025",
    description: "E-commerce style application built as a technical test, integrating the Rick & Morty API. Features product listing, cart functionality, and character details.",
    tech: ["React", "Redux", "Rick & Morty API", "CSS Modules"],
    image: "/images/projects/veflat-test.jpg",
    demo: "https://github.com/wanxiturro/VeflatTechnicalTest/releases/download/v1.0.0/app.apk",
    github: "https://github.com/wanxiturro/VeflatTechnicalTest",
    type: "FRONTEND",
    status: "active"
  },
  {
    id: 8,
    title: "ALQUINOVIS - SECRET PROJECT",
    episode: "EP08",
    year: "2026",
    description: "Currently working on a secret project. Details coming soon...",
    tech: ["? ? ?", "? ? ?", "? ? ?", "? ? ?"],
    image: "/images/projects/secret.png",
    demo: "/404",
    github: "/404",
    type: "SECRET",
    status: "in development"
  }
]

export default function EpisodesPage() {
  const [filter, setFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [gifProjectId, setGifProjectId] = useState<number | null>(null)
  const [selectedGif, setSelectedGif] = useState<string>('')

  useEffect(() => {
    const randomProjectIndex = Math.floor(Math.random() * projects.length)
    setGifProjectId(projects[randomProjectIndex].id)
    
    const randomGifIndex = Math.floor(Math.random() * secretGifs.length)
    setSelectedGif(secretGifs[randomGifIndex])
  }, [])

  const filters = ['ALL', 'FRONTEND', 'FULL STACK', 'CREATIVE', 'GAME', 'AI']
  
  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.type === filter)

  return (
    <main className="min-h-screen p-4 md:p-8 bg-vhs-black">
      <Header />
      <StatusBar />

      <div className="vhs-container mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="retro-title text-4xl md:text-5xl" data-text="EPISODIOS">
              Projects
            </h1>
            <p className="font-mono text-neon-blue/70 mt-2">
              {projects.length} PROJECTS • {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 text-xs font-mono border transition-all duration-300 ${
                  filter === f 
                    ? 'border-neon-pink text-neon-pink bg-neon-pink/10' 
                    : 'border-neon-blue/30 text-neon-blue/50 hover:border-neon-blue'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="vhs-container group cursor-pointer transform hover:scale-[1.02] transition-all duration-300 relative"
            onClick={() => setSelectedProject(project)}
          >
            <div className="absolute -top-3 -left-3 z-10">
              <span className="episode-badge text-xs">
                {project.episode}
              </span>
            </div>

            <div className="absolute -top-3 -right-3 z-10">
              <span className="bg-black border border-neon-blue px-2 py-1 text-[10px] font-mono text-neon-blue">
                {project.year}
              </span>
            </div>

            <div className="aspect-video bg-linear-to-br from-neon-pink/20 via-neon-blue/20 to-neon-purple/20 mb-4 flex items-center justify-center relative overflow-hidden">
              {gifProjectId === project.id ? (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedGif}
                    alt="secret"
                    fill
                    className="object-cover pixelated"
                    unoptimized
                  />
                  <div className="absolute top-2 right-2 bg-neon-pink/90 text-black text-[8px] font-mono px-2 py-1 rotate-12">
                    ✦ SECRET ✦
                  </div>
                  <div className="absolute bottom-2 left-2 text-[6px] font-mono text-white/50">
                    she's found you
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-mono text-neon-green">VER DETALLES →</span>
                  </div>
                </div>
              )}
            </div>

            <h3 className="font-display text-neon-pink text-lg mb-2">
              {project.title}
              {gifProjectId === project.id && (
                <span className="ml-2 text-[8px] text-neon-green animate-pulse">✦</span>
              )}
            </h3>
            <p className="text-sm font-mono text-white/60 mb-3 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="text-[8px] px-2 py-1 bg-white/5 border border-neon-blue/30 text-neon-blue/70">
                  {tech}
                </span>
              ))}
            </div>

            <div className="absolute bottom-3 left-3">
              <span className="text-[8px] font-mono text-neon-purple/50">
                {project.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="vhs-container max-w-2xl w-full relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-black border-2 border-neon-pink rounded-full flex items-center justify-center hover:bg-neon-pink/20 transition-colors z-10"
            >
              <span className="text-neon-pink text-xl">✕</span>
            </button>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="episode-badge text-sm mb-2 inline-block">
                    {selectedProject.episode}
                  </span>
                  <h2 className="retro-title text-3xl md:text-4xl">
                    {selectedProject.title}
                  </h2>
                </div>
                <span className="text-neon-blue font-mono text-sm">{selectedProject.year}</span>
              </div>

              <p className="font-mono text-white/80 mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="text-neon-pink font-mono text-sm mb-2">TECNOLOGÍAS</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-neon-blue text-neon-blue text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <RetroButton href={selectedProject.demo} variant="primary">
                  VER DEMO
                </RetroButton>
                <RetroButton href={selectedProject.github} variant="secondary">
                  VER CÓDIGO
                </RetroButton>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="vhs-container text-center text-sm opacity-70 relative">
        <Link href="/" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue hover:text-neon-pink transition-colors">
          ← VOLVER
        </Link>
        <p className="font-mono">📼 {filteredProjects.length} AVAILABLE PROJECTS</p>
        {gifProjectId && (
          <p className="text-[6px] font-mono text-neon-pink/30 mt-1">
            ✦ ame-chan is hiding in a project ✦
          </p>
        )}
      </footer>
    </main>
  )
}