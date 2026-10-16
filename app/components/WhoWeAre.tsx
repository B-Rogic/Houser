import React from 'react'
import GlobalContainer from './GlobalContainer'
import Millimeters from './Millimeters'
import Button from './Button'

type Props = {}

const WhoWeAre = (props: Props) => {
  return (
    <GlobalContainer>
        <Millimeters />
        <div className="grid md:grid-cols-2 grid-cols-1 py-20">
            <div className="flex items-end md:w-[calc((100%_-_10px)/2)]">
                <p className="font-semibold text-white uppercase">A three-sided marketplace connecting students and young workers to affordable housing with embedded conveniences (transport, power, retail, recreation, and work hubs), and connecting capital (owners) with operations (managers) and demand (renters).</p>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="font-bold text-white uppercase text-5xl leading-11">One platform, three ways in</h3>
                <Button text='Explore platform' className='text-white font-semibold uppercase md:w-[calc((100%)/2)]  ms-auto' />
            </div>
        </div>
    </GlobalContainer>
  )
}

export default WhoWeAre