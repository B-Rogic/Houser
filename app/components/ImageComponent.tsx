import { CldImage } from 'next-cloudinary'
import React from 'react'

type Props = {
    source: string;
    className: string;
    altText: string;
}

const ImageComponent = (props: Props) => {
  return (
    <CldImage src={props.source} className={props.className} width={1000} height={1000} alt={props.altText} />
  )
}

export default ImageComponent