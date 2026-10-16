import React from 'react'
import GlobalContainer from './GlobalContainer'
import Millimeters from './Millimeters'
import cn from '../libs/utils'
import { class_names } from '../libs/classnames'
import BoxBullet from './BoxBullet'
import Button from './Button'

type Props = {}

const Choose = (props: Props) => {
  return (
    <GlobalContainer className='mb-40'>
        <Millimeters />
        <div className={cn('flex justify-between items-end mb-20')}>
            <h6 className={cn('text-5xl font-bold uppercase', class_names.occupyTwo)}>Choose the right production for what you're making</h6>
            <p className={cn('font-semibold uppercase', class_names.occupyOne)}>these are practical starting points based on real production scope—not mysterous nu,bers pulled froma stylish hat. we'll confirm the final quote after a short call, and if your project sits between packages, we'll shape a sensible middle ground.</p>
        </div>
        <div className={cn("mx-auto grid md:grid-cols-2 mb-10", class_names.occupyTwo)}>
            <div className="w-full bg-maingray p-5 flex flex-col gap-5">
                <p className="font-semibold text-lg">Included in First Take:</p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2 bg-maingray justify-center border-b border-white/15 p-3">
                    <div className="w-1 h-1 bg-majorred" />
                    <p className="text-sm uppercase">first take</p>
                </div>
                <div className="flex flex-col justify-between items-end h-full p-5 relative">
                    <p className="text-sm">Perfect for startups and small businesses looking for professional video production.</p>
                    <div className="flex items-start">
                        <p className="text-sm">FROM</p>
                        <p className="text-majorred text-4xl font-semibold">$1,500</p>
                    </div>
                    <div className="w-3 h-3 border-r border-t border-white absolute top-4 right-4" />
                    <div className="w-3 h-3 border-l border-t border-white absolute top-4 left-4" />
                    <div className="w-3 h-3 border-l border-b border-white absolute bottom-4 left-4" />
                    <div className="w-3 h-3 border-r border-b border-white absolute bottom-4 right-4" />
                </div>
                <Button text='PLAN A QUICK CUT' className='w-full' />
            </div>
        </div>
        <div className={cn("mx-auto grid md:grid-cols-2", class_names.occupyTwo)}>
            <div className="w-full bg-maingray p-5 flex flex-col gap-5">
                <p className="font-semibold text-lg">Included in First Take:</p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <BoxBullet /> <p className="uppercase text-[15px]">half day production</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2 bg-maingray justify-center border-b border-white/15 p-3">
                    <div className="w-1 h-1 bg-majorred" />
                    <p className="text-sm uppercase">first take</p>
                </div>
                <div className="flex flex-col justify-between items-end h-full p-5 relative">
                    <p className="text-sm">Perfect for startups and small businesses looking for professional video production.</p>
                    <div className="flex items-start">
                        <p className="text-sm">FROM</p>
                        <p className="text-majorred text-4xl font-semibold">$1,500</p>
                    </div>
                    <div className="w-3 h-3 border-r border-t border-white absolute top-4 right-4" />
                    <div className="w-3 h-3 border-l border-t border-white absolute top-4 left-4" />
                    <div className="w-3 h-3 border-l border-b border-white absolute bottom-4 left-4" />
                    <div className="w-3 h-3 border-r border-b border-white absolute bottom-4 right-4" />
                </div>
                <Button text='PLAN A QUICK CUT' className='w-full' />
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Choose