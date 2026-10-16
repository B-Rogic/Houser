import React from 'react'
import cn from '../libs/utils'

type Props = {
    number?: number;
    plus?: string;
    purpose?: string;
    isDescription?: boolean;
    desc?: string;
}

const CardComponent = (props: Props) => {
  return (
    <div className={cn('flex flex-col gap-5 relative border-t border-white/15 p-5')}>
        {props.isDescription ? (
            <>
                <div className="flex items-end gap-1 h-full">
                    <p className="text-white font-semibold">{props.desc}</p>
                </div>
            </>
        ) : (
            <>
                <div className="flex items-center gap-1">
                    <h6 className="text-8xl text-white font-bold">{props.number}</h6>
                    <p className="text-majorred text-lg">{props.plus}</p>
                </div>
                <p className="text-white font-semibold text-xl">{props.purpose}</p>
                <div className="w-3 h-3 border-r border-b border-white/60 absolute bottom-0 right-0" />
                <div className="w-3 h-3 border-l border-t border-white/60 absolute top-0 left-0" />
            </>
        )}
    </div>
  )
}

export default CardComponent