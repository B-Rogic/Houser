'use client'
import { CldVideoPlayer } from 'next-cloudinary'
import React from 'react'
import cn from '../libs/utils';

type Props = {
    source: string;
    className?: string; 
    width?: number;
    height?: number;
}

const VideoComponent = (props: Props) => {
    console.log("VIDEO SOURCE:", props.source);
  return (
    <CldVideoPlayer
        width={props.width}
        height={props.height}
        src={props.source}
        className={cn("w-full h-full object-cover", props.className)}
        autoplay={true}
        muted={true}
        loop={true}
        controls={false}
      />
  )
}

export default VideoComponent