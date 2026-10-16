import React, { forwardRef, ReactNode } from 'react'
import cn from '../libs/utils'

type Props = {
    className?: string;
    children: ReactNode;
}

const GlobalContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div ref={ref} className={cn('md:px-10 px-5 relative z-1', props.className)}>{props.children}</div>
  )
})

export default GlobalContainer