import React from 'react'

type Props = {
  count?: number // Optional: easily control how many ticks you want
}

const Millimeters = ({ count = 120 }: Props) => {
  return (
    <div className="w-full flex px-2 mb-5 justify-between items-end border-b border-white/15">
      {Array.from({ length: count }).map((_, i) => {
        // Every 10th tick is taller (major tick), the rest are standard (minor ticks)
        const isMajorTick = i % 5 === 0
        const isMinorTick = i % 8 === 0

        return (
          <div
            key={i}
            className={`w-[1px] bg-white/15 transition-all ${
              isMajorTick ? 'h-4' : isMinorTick ? 'h-2.5' : 'h-1.5'
            }`}
          />
        )
      })}
    </div>
  )
}

export default Millimeters