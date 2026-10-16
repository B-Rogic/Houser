'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function GhostMouseTrail() {
  const trailRefs = useRef<HTMLDivElement[]>([])
  const numTrail = 8 // Increased slightly to keep the longer 2-second trail smooth

  useEffect(() => {
    const boxes = trailRefs.current
    if (!boxes.length) return

    // Ensure they start completely hidden
    boxes.forEach(box => {
      if (box) gsap.set(box, { xPercent: -50, yPercent: -50, opacity: 0 })
    })

    // Stretched out durations: spans up to ~2 seconds of lag for the tail end
    const xTos = boxes.map((_, i) => 
      gsap.quickTo(boxes[i], "x", { duration: 0.05 + i * 0.25, ease: "power2.out" })
    )
    const yTos = boxes.map((_, i) => 
      gsap.quickTo(boxes[i], "y", { duration: 0.05 + i * 0.25, ease: "power2.out" })
    )

    let hideTimeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      boxes.forEach((box, i) => {
        const fadeOpacity = Math.max(0.02, 0.35 - i * 0.04)
        gsap.to(box, { 
          scale: 1, 
          opacity: fadeOpacity, 
          duration: 0.5, 
          overwrite: "auto" 
        })
        xTos[i](e.clientX)
        yTos[i](e.clientY)
      })

      // Keep them alive as long as the mouse is moving, then fade out over 2 seconds if stopped
      clearTimeout(hideTimeout)
      hideTimeout = setTimeout(() => {
        boxes.forEach((box, i) => {
          gsap.to(box, { 
            opacity: 0, 
            duration: 2.0, // <--- The duplicated boxes now take 2 full seconds to completely fade out
            delay: i * 0.1, // Stagger their disappearance 
            overwrite: "auto" 
          })
        })
      }, 100)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(hideTimeout)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {Array.from({ length: numTrail }).map((_, i) => (
        <div
          key={i}
          ref={el => { if (el) trailRefs.current[i] = el }}
          className="absolute top-0 left-0 w-10 h-10 border-t border-r border-white/30 rounded-sm mix-blend-screen"
        >
            <div className="absolute top-0 left-0 flex justify-between w-full">
                <div className="w-[0.1] h-2 bg-white/15" />
                <div className="w-[0.1] h-1.5 bg-white/15" />
                <div className="w-[0.1] h-3 bg-white/15" />
                <div className="w-[0.1] h-2 bg-white/15" />
                <div className="w-[0.1] h-3 bg-white/15" />
                <div className="w-[0.1] h-2.5 bg-white/15" />
                <div className="w-[0.1] h-1.5 bg-white/15" />
            </div>
            <div className="absolute top-0 right-0 flex flex-col justify-between h-full -scale-x-100">
                <div className="h-[0.1] w-2 bg-white/15" />
                <div className="h-[0.1] w-1.5 bg-white/15" />
                <div className="h-[0.1] w-3 bg-white/15" />
                <div className="h-[0.1] w-2 bg-white/15" />
                <div className="h-[0.1] w-3 bg-white/15" />
                <div className="h-[0.1] w-2.5 bg-white/15" />
                <div className="h-[0.1] w-1.5 bg-white/15" />
            </div>
        </div>
      ))}
    </div>
  )
}