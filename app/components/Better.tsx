import React from 'react'
import GlobalContainer from './GlobalContainer'
import Millimeters from './Millimeters'
import { class_names } from '../libs/classnames'
import cn from '../libs/utils'

type Props = {}

const Better = (props: Props) => {
  return (
    <GlobalContainer>
        <Millimeters />
        <div className="flex justify-between my-20">
            <h6 className={cn("text-5xl font-bold text-white uppercase", class_names.occupyTwo)}>they said it better than we could</h6>
            <p className={cn("text-white font-semibold uppercase text-sm md:p-5", class_names.occupyOne)}>Honest notes from clients who survived the process, loved the result, and were kind enough to put in writing</p>
        </div>
    </GlobalContainer>
  )
}

export default Better