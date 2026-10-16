import React from 'react'
import GlobalContainer from './GlobalContainer'
import cn from '../libs/utils'
import Accordion from './Accordion'
import { class_names } from '../libs/classnames'
import Millimeters from './Millimeters'

type Props = {}

const Questions = (props: Props) => {
  return (
    <GlobalContainer>
        <Millimeters />
        <h6 className={cn("font-bold text-4xl uppercase", class_names.occupyOne)}>the questions before the cameras roll</h6>
        <Accordion className={class_names.occupyTwo} num={1} textSize='text-xl' title='What kind of videos can you create for us?' />
    </GlobalContainer>
  )
}

export default Questions