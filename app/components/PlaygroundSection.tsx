"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Category {
  label: string;
  image: string;
}

// Replace the `image` URLs with your own assets (e.g. "/playground/ugc.jpg").
// picsum.photos placeholders are used here so the component works out of the box.
const CATEGORIES: Category[] = [
  { label: "UGC", image: "https://picsum.photos/seed/ugc/1000/700" },
  { label: "DOCUMENTARY", image: "https://picsum.photos/seed/documentary/1000/700" },
  { label: "CORPORATE", image: "https://picsum.photos/seed/corporate/1000/700" },
  { label: "COMMERCIAL", image: "https://picsum.photos/seed/commercial/1000/700" },
  { label: "EVENT", image: "https://picsum.photos/seed/event/1000/700" },
  { label: "SOCIAL MEDIA", image: "https://picsum.photos/seed/social-media/1000/700" },
  { label: "BRAND FILM", image: "https://picsum.photos/seed/brand-film/1000/700" },
  { label: "PRODUCT", image: "https://picsum.photos/seed/product/1000/700" },
];

const ITEM_HEIGHT = 64; // px height of each row — keep in sync with the row className below
const VISIBLE_ROWS = 5; // how many rows are visible in the ticker viewport
const SECONDS_PER_ITEM = 1.6; // how long each category sits centered before the next scrolls in

export default function PlaygroundSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Drives which image is shown. Kept in sync with the CSS scroll animation's speed below.
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % CATEGORIES.length);
    }, SECONDS_PER_ITEM * 1000);
    return () => clearInterval(id);
  }, []);

  // Render the list twice back-to-back so the marquee can loop seamlessly at -50%.
  const doubled = [...CATEGORIES, ...CATEGORIES];
  const viewportHeight = ITEM_HEIGHT * VISIBLE_ROWS;
  const animationDuration = CATEGORIES.length * SECONDS_PER_ITEM;

  return (
    <section className="relative w-full bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[auto_1fr_1fr] md:gap-16 md:px-12">
        {/* Left label */}
        <h2 className="whitespace-nowrap text-2xl font-bold tracking-tight md:text-3xl">
          OUR PLAYGROUND
        </h2>

        {/* Auto-scrolling category ticker */}
        <div
          className="relative overflow-hidden border-l border-white/15 pl-6"
          style={{ height: viewportHeight }}
        >
          {/* Fixed red highlight band, centered in the viewport */}
          <div
            className="pointer-events-none absolute left-0 right-0 z-10 bg-red-600"
            style={{ top: "50%", height: ITEM_HEIGHT, transform: "translateY(-50%)" }}
          />

          {/* Dim base layer — the full list, scrolling continuously */}
          <div
            className="playground-marquee flex flex-col"
            style={{ animationDuration: `${animationDuration}s` }}
          >
            {doubled.map((cat, i) => (
              <div
                key={`base-${cat.label}-${i}`}
                className="flex items-center text-xl font-semibold tracking-wide text-white/30 md:text-2xl"
                style={{ height: ITEM_HEIGHT }}
              >
                {cat.label}
              </div>
            ))}
          </div>

          {/* Bright overlay layer — identical list/animation, clipped to the red band only */}
          <div
            className="playground-marquee absolute inset-0 z-20 flex flex-col"
            style={{
              animationDuration: `${animationDuration}s`,
              clipPath: `inset(calc(50% - ${ITEM_HEIGHT / 2}px) 0 calc(50% - ${ITEM_HEIGHT / 2}px) 0)`,
            }}
          >
            {doubled.map((cat, i) => (
              <div
                key={`overlay-${cat.label}-${i}`}
                className="flex items-center text-xl font-bold tracking-wide text-white md:text-2xl"
                style={{ height: ITEM_HEIGHT }}
              >
                {cat.label}
              </div>
            ))}
          </div>
        </div>

        {/* Image that blur-crossfades to match the active category */}
        <div className="relative h-64 w-full overflow-hidden md:h-80">
          <AnimatePresence mode="sync">
            <motion.img
              key={activeIndex}
              src={CATEGORIES[activeIndex].image}
              alt={CATEGORIES[activeIndex].label}
              initial={{ opacity: 0, filter: "blur(18px)", scale: 1.06 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(18px)", scale: 1.06 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Continuous linear scroll keyframes, shared by both ticker layers */}
      <style jsx>{`
        .playground-marquee {
          animation-name: playground-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes playground-scroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
