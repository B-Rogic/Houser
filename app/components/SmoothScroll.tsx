'use client'
import React, { ReactNode, useEffect } from 'react'
import Lenis from 'lenis';
import gsap from 'gsap';
type Props = {
}

const SmoothScroll = (props: Props) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, 
            smoothWheel: true 
        });

        function update(time: number) {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy()
        }
    }, [])
  return null
}

export default SmoothScroll