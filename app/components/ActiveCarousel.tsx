import React from 'react'
import cn from '../libs/utils'
import { class_names } from '../libs/classnames'

type Props = {}

const ActiveCarousel = (props: Props) => {
  return (
    <div className={cn('grid md:grid-cols-2 col-span-2')}>
        <div className="flex flex-col p-3">
            <p className='text-3xl uppercase text-white/20'>Event</p>
            <p className='text-3xl uppercase text-white/20'>Event</p>
            <p className='text-3xl uppercase text-white/20'>Event</p>
            <p className='text-3xl uppercase text-white/20'>Event</p>
            <p className='text-3xl uppercase text-white/20'>Event</p>
        </div>
        <div className="w-full bg-black h-full"></div>
    </div>
  )
}

export default ActiveCarousel