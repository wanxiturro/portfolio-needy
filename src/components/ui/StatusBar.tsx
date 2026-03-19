/*
EN:
This section displays a bar with the following features:
- Simulates the Ping and Buffer of a streaming page.

- Randomly plays a song from the Needy Girl Overdose OST or theme.

Note: It was supposed to be a unique element on the "/" but I didn't quite like it. 
I might modify it in the future to make it fit better; for now, 
it will be on all pages except the "/".

_______________________________________________________________________________________

ES:
Este apartado muestra una barra con los siguientes apartados:
- Simula el Ping y el Buffer de la página tipo stream.
- De forma aleatoria muestra una canción del OST o THEME del juego Needy Girl Overdose.

Nota: Se suponia que sería un elemento único de "/" pero no me termino de gustar, puede 
que en un futuro lo módifique para que sea algo que realmente encaje, de momento 
estara en todas las páginas menos en "/".

*/

'use client'

import { useEffect, useState } from 'react'

export default function StatusBar() {
  const [buffer, setBuffer] = useState('89')
  const [ping, setPing] = useState('21')
  const [songTitle, setSongTitle] = useState('INTERNET YAMERO')

  useEffect(() => {
    const interval = setInterval(() => {
      setBuffer(Math.floor(Math.random() * 30 + 70).toString())
      setPing(Math.floor(Math.random() * 50 + 15).toString())
      
      const songs = ['INTERNET YAMERO', 'Aiobahn - INTERNET YAMERO', 'KOTOKO - INTERNET YAMERO', 'NEEDY GIRL OVERDOSE OST']
      setSongTitle(songs[Math.floor(Math.random() * songs.length)])
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-wrap gap-4 text-xs font-mono text-neon-blue/70 bg-black/30 px-4 py-2 rounded-full border border-neon-pink/30">
      <span className="flex items-center gap-1">
        <span className="text-neon-pink"></span> 
        <span className="truncate max-w-150px">{songTitle}</span>
      </span>
      <span className="flex items-center gap-1">
        <span className="text-neon-green"></span> 
        BUFFER: {buffer}%
      </span>
      <span className="flex items-center gap-1">
        <span className="text-neon-yellow"></span> 
        PING: {ping}ms
      </span>
    </div>
  )
}