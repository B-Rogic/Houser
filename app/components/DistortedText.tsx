"use client";

import { useEffect, useRef } from "react";

const TEXT = "HOUSER";

export default function WobbleText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  const mouse = useRef({
    x: -1000,
    y: -1000,
  });

  const currentMouse = useRef({
    x: -1000,
    y: -1000,
  });

  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      /*
       * Smooth mouse movement
       */
      currentMouse.current.x +=
        (mouse.current.x - currentMouse.current.x) * 0.15;

      currentMouse.current.y +=
        (mouse.current.y - currentMouse.current.y) * 0.15;

      lettersRef.current.forEach((letter) => {
        if (!letter) return;

        const rect = letter.getBoundingClientRect();

        const letterCenterX =
          rect.left + rect.width / 2;

        const letterCenterY =
          rect.top + rect.height / 2;

        /*
         * Distance from mouse to letter
         */
        const dx =
          currentMouse.current.x - letterCenterX;

        const dy =
          currentMouse.current.y - letterCenterY;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        /*
         * How far the wobble reaches.
         */
        const radius = 130;

        /*
         * 0 = no effect
         * 1 = maximum effect
         */
        const strength = Math.max(
          0,
          1 - distance / radius
        );

        /*
         * Direction of the mouse relative
         * to the letter.
         */
        const directionX =
          distance === 0 ? 0 : dx / distance;

        const directionY =
          distance === 0 ? 0 : dy / distance;

        /*
         * Push the letter away from the mouse.
         */
        const translateX =
          -directionX * strength * 18;

        const translateY =
          -directionY * strength * 10;

        /*
         * Rotation based on mouse position.
         */
        const rotate =
          directionX * strength * 12;

        /*
         * Stretch the letter.
         */
        const scaleX =
          1 + strength * 0.18;

        const scaleY =
          1 - strength * 0.08;

        /*
         * Skew gives the elastic/wobbly feeling.
         */
        const skew =
          directionY * strength * 10;

        letter.style.transform = `
          translate3d(
            ${translateX}px,
            ${translateY}px,
            0
          )
          rotate(${rotate}deg)
          skewX(${skew}deg)
          scale(${scaleX}, ${scaleY})
        `;

        /*
         * Letters farther from the mouse
         * remain completely normal.
         */
        letter.style.zIndex =
          String(Math.round(strength * 10));
      });

      animationFrame.current =
        requestAnimationFrame(animate);
    };

    animationFrame.current =
      requestAnimationFrame(animate);

    return () => {
      container.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      if (animationFrame.current) {
        cancelAnimationFrame(
          animationFrame.current
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
    >
      <div
        className="
          flex
          justify-center
          items-center
          select-none
          whitespace-nowrap
        "
      >
        {TEXT.split("").map((char, index) => (
          <span
            key={index}
            ref={(element) => {
              if (element) {
                lettersRef.current[index] =
                  element;
              }
            }}
            className="
              inline-block
              text-white
              font-bold
              text-[clamp(4rem,10vw,10rem)]
              leading-none
              will-change-transform
            "
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}