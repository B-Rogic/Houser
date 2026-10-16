'use client'
import React, { useRef, useState } from "react";
import { data } from "../libs/data";

type Props = {};

const Navbar = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [drop, setDrop] = useState<boolean>(false)
  return (
    <div className="md:w-150 fixed top-5 z-10 left-1/2 -translate-x-1/2 flex flex-col gap-1">
      <div className="flex justify-between items-center bg-maingray p-2">
        <span className="text-white text-xl ">Houser</span>
        <div className="flex items-center gap-2">
          <p onClick={() => setDrop(!drop)} className="text-white uppercase text-sm">Menu</p>
        </div>
      </div>
      <div ref={ref} style={{
        height: drop ? `${ref.current?.scrollHeight}px` : '0px'
      }} className="grid grid-cols-3 gap-1 overflow-hidden transition-height duration-500">
        {data.map((d, i) => (
          <div
            key={i}
            className="flex items-end justify-between bg-maingray text-white h-40 p-3"
          >
            <p className="text-sm">[0{i + 1}]</p>
            <p>{d.label}</p>
          </div>
        ))}
        <div className="flex col-span-3 items-end justify-between bg-maingray text-white p-3">
          <p className="text-sm">[07]</p>
          <p>PREMIUM RESOURCES</p>
        </div>
        <div className="flex flex-col col-span-3 justify-center bg-maingray text-white p-3">
          <span className="text-3xl font-bold">HELLO@SEQUENCE.COM</span>
          <p className="text-md">(217) 555-0134</p>
          <p>123 MAIN STREET, SUITE 200, AUSTIN, TX 78701</p>
        </div>
        <div className="flex col-span-3 items-end justify-between bg-maingray text-white p-3">
          <p className="text-sm">[01]</p>
          <p>HOME</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
