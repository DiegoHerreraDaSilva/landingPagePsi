import { useEffect, useRef, useState } from 'react'
import { WHATSAPP_URL } from '../constants'
import { WhatsAppFullIcon } from './icons'

/** WhatsApp flutuante + botão de som ambiente (MP3 com fade). */
export default function Floating() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<((target: number, duration?: number) => void) | null>(null)
  const intervalRef = useRef<number | null>(null)
  const playingRef = useRef(false)

  useEffect(() => {
    const ambient = new Audio('/ambiente.mp3')
    ambient.loop = true
    ambient.preload = 'none'
    ambient.volume = 0
    audioRef.current = ambient

    const fade = (target: number, duration = 1200) => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      const start = ambient.volume
      const stepTime = 50
      const steps = duration / stepTime
      const step = (target - start) / steps
      intervalRef.current = window.setInterval(() => {
        const next = ambient.volume + step
        if ((step > 0 && next >= target) || (step < 0 && next <= target)) {
          ambient.volume = target
          if (intervalRef.current) clearInterval(intervalRef.current)
          return
        }
        ambient.volume = Math.max(0, Math.min(1, next))
      }, stepTime)
    }
    fadeRef.current = fade

    // Pausa quando muda de aba (só se o som foi iniciado pelo usuário)
    const onVisibility = () => {
      if (document.hidden) {
        if (!ambient.paused) ambient.pause()
      } else if (playingRef.current) {
        ambient
          .play()
          .then(() => fade(0.2, 1200))
          .catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      if (intervalRef.current) clearInterval(intervalRef.current)
      ambient.pause()
    }
  }, [])

  const toggle = async () => {
    const ambient = audioRef.current
    if (!ambient) return
    try {
      if (!playingRef.current) {
        ambient.volume = 0
        await ambient.play()
        fadeRef.current?.(0.2, 1800)
        playingRef.current = true
        setPlaying(true)
      } else {
        fadeRef.current?.(0, 1000)
        setTimeout(() => {
          ambient.pause()
          ambient.currentTime = 0
        }, 1000)
        playingRef.current = false
        setPlaying(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <a
        className="wa-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agende sua consulta pelo WhatsApp"
      >
        <WhatsAppFullIcon />
      </a>
      <span className="wa-tip" aria-hidden="true">
        Agende sua consulta hoje mesmo!
      </span>

      <button
        className={playing ? 'audio-toggle playing' : 'audio-toggle'}
        id="audioToggle"
        aria-pressed={playing}
        title="Som ambiente"
        aria-label="Ligar ou desligar som ambiente"
        onClick={toggle}
      >
        <span className="eq" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="lbl">{playing ? 'Som: ligado' : 'Som ambiente'}</span>
      </button>
    </>
  )
}
