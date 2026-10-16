"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import React from "react";
import GlobalContainer from "./GlobalContainer";
import Button from "./Button";
import VideoComponent from "./VideoComponent";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="overflow-hidden w-full h-screen relative bg-black">
      <div className="absolute top-0 left-0 bg-black/20 w-full h-screen z-1" />
      <div className="w-full h-screen flex flex-col items-center absolute z-2">
        <div className="w-full h-1/2 border-b border-white/15 flex justify-center items-center flex-shrink-0">
          <div className="flex flex-col gap-5 md:w-160 h-1/2">
            <p className="text-white text-md uppercase">Housing, reimagined for how you actually live</p>
            <h1 className="text-7xl font-semibold text-white leading-14">
              FIND A PLACE <br /> OWN A PIECE <br /> RUN IT, TOO
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:w-160 h-full">
          <div className="flex flex-col">
            <p className="text-white text-xl">Houser</p>
            <p className="text-white text-sm">3-Sided</p>
            <p className="text-white text-sm uppercase">Marketplace & shared data core</p>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <p className="text-white text-md uppercase leading-5">Houser connects students and young workers to affordable housing built with transport, power, shopping, and work space already included — while giving owners a clear window into every investment and managers the tools to keep it all running.</p>
            <Button text="Find a place" className="font-bold text-white text-lg" />
          </div>
        </div>
      </div>
      <VideoComponent source="houserVideo_alwfhl" width={1920} height={1080} />
    </div>
  );
};

export default Hero;