import React from "react";

const OverlayBackground = () => {
  return (
    <div className="pointer-events-none fixed w-full h-full z-[100] overflow-hidden opacity-10">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <filter id="sharpNoise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="3"
            numOctaves="1"
            seed="12"
            stitchTiles="stitch"
          />

          <feColorMatrix
            type="matrix"
            values="
              0 0 0 0 1
              0 0 0 0 1
              0 0 0 0 1
              0 0 0 1 0
            "
          />

          {/* More particles while keeping them sharp */}
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0 0 0 0 0 1 1 1 1" />
          </feComponentTransfer>
        </filter>

        <rect width="100%" height="100%" filter="url(#sharpNoise)" />
      </svg>
    </div>
  );
};

export default OverlayBackground;
