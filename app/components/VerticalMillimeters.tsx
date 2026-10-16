import React from "react";

type Props = {
  count?: number; // Optional: easily control how many ticks you want
};

const VerticalMillimeters = ({ count = 120 }: Props) => {
  return (
    <div className="h-screen flex-col fixed z-10 right-0 top-0 flex mb-5 justify-between items-end border-b border-white/15 ">
      {Array.from({ length: count }).map((_, i) => {
        // Every 10th tick is taller (major tick), the rest are standard (minor ticks)
        const isMajorTick = i % 5 === 0;
        const isMinorTick = i % 8 === 0;

        return (
          <div
            key={i}
            className={`h-[1px] bg-white/15 transition-all ${
              isMajorTick ? "w-4" : isMinorTick ? "w-2.5" : "w-1.5"
            }`}
          />
        );
      })}
    </div>
  );
};

export default VerticalMillimeters;
