import { CldImage } from 'next-cloudinary'
import React from 'react'
import ImageComponent from './ImageComponent'
import cn from '../libs/utils';

type Props = {
    day: string; 
    monthYear: string;
    title: string;
    desc: string;
    source: string;
    className?: string;
    style?: React.CSSProperties;
}

const Card = (props: Props) => {
  return (
    <div style={props.style} className={cn('flex flex-col gap-5 w-full', props.className)}>
        <div className="relative w-full h-80">
            <ImageComponent source={props.source} altText='first' className='w-full h-full object-cover' />
            <div className="flex flex-col bg-black p-2 absolute left-5 bottom-0">
                <p className="font-bold text-3xl uppercase">{props.day}</p>
                <p className="text-sm uppercase">{props.monthYear}</p>
            </div>
            <div className="bg-black text-sm font-semibold p-2 absolute top-5 rotate-90 right-0">{props.title}</div>
        </div>
        <p className="font-semibold text-xl">{props.desc}</p>
    </div>
  )
}

export default Card