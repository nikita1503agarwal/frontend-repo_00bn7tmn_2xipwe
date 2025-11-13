import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// A lightweight 2D running dog that dashes across the screen on downward scroll
export default function DogRunner() {
  const dogRef = useRef(null)
  const tlRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)

    const dog = dogRef.current
    if (!dog) return

    // Prepare off-screen position
    gsap.set(dog, { x: '-20vw', y: 0, rotate: 0, opacity: 0 })

    // Small leg/body motion using yoyo to fake a run cycle
    const bounce = gsap.to(dog, {
      keyframes: [{ y: -4 }, { y: 0 }],
      duration: 0.25,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      paused: true,
    })

    // Track run state to avoid overlapping plays
    let running = false

    // Dash timeline from left to right
    const tl = gsap.timeline({ paused: true })
    tl.to(dog, { opacity: 1, duration: 0.1 })
      .to(dog, { x: '110vw', duration: 2.2, ease: 'power2.inOut' }, 0)
      .to(dog, { opacity: 0, duration: 0.2 }, '-=0.1')

    tl.eventCallback('onStart', () => bounce.play())
    tl.eventCallback('onComplete', () => {
      bounce.pause(0)
      gsap.set(dog, { x: '-20vw', opacity: 0 })
      running = false
    })

    tlRef.current = tl
    setReady(true)

    // Trigger on downward scroll movement using velocity
    const st = ScrollTrigger.create({
      start: 0,
      onUpdate: (self) => {
        const v = self.getVelocity()
        if (v > 10 && !running && ready) {
          running = true
          tlRef.current && tlRef.current.play(0)
        }
      },
    })

    return () => {
      st && st.kill()
      tl.kill()
      bounce.kill()
    }
  }, [ready])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 bottom-6 sm:bottom-10 z-[55]"
      style={{ willChange: 'transform' }}
      ref={dogRef}
    >
      {/* Simple 2D dog (SVG) */}
      <svg width="120" height="70" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#shadow)">
          <ellipse cx="70" cy="120" rx="45" ry="6" fill="rgba(0,0,0,0.15)" />
        </g>
        <g id="dog" stroke="#222" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="#8b5e3c">
          {/* Body */}
          <path d="M50 80 C40 60, 140 60, 150 80 C160 100, 60 100, 50 80 Z" fill="#a47149" />
          {/* Head */}
          <path d="M35 70 C30 55, 55 50, 65 65 C70 75, 45 85, 35 70 Z" />
          {/* Ear */}
          <path d="M50 55 C52 45, 40 40, 38 52" fill="#6e452a" />
          {/* Tail */}
          <path d="M155 78 Q180 60 190 70" />
          {/* Legs */}
          <path d="M80 100 L75 120" />
          <path d="M100 100 L105 120" />
          <path d="M120 98 L118 120" />
          <path d="M60 98 L58 120" />
          {/* Eye */}
          <circle cx="55" cy="70" r="3" fill="#111" />
          {/* Nose */}
          <circle cx="40" cy="72" r="3" fill="#111" />
        </g>
        <defs>
          <filter id="shadow" x="0" y="0" width="240" height="140" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
