import Link from 'next/link'
import React from 'react'
import { CgCornerDownRight } from 'react-icons/cg';

type Props = {
    label: string; 
    url: string;
}

const FooterLinkCard = (props: Props) => {
  return (
    <Link href={props.url} className='bg-maingray/30 flex justify-between items-center py-2 px-3 border-b border-white/15 uppercase text-sm'>
        {props.label}
        <CgCornerDownRight />
    </Link>
  )
}

export default FooterLinkCard