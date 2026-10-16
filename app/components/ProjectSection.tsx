"use client";
import React, { useEffect, useRef } from "react";
import GlobalContainer from "./GlobalContainer";
import Millimeters from "./Millimeters";
import { class_names } from "../libs/classnames";
import cn from "../libs/utils";
import Button from "./Button";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ImageComponent from "./ImageComponent";
import { CldVideoPlayer } from "next-cloudinary";
import VideoComponent from "./VideoComponent";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const ProjectSection = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          pin: true,
          scrub: 2,
          end: "+=4000",
          anticipatePin: 1,
          pinSpacing: true,
        },
      });

      tl.to(
        ".animate-on-scroll",
        {
          x: -3500,
          duration: 5,
          ease: "none",
        },
        0,
      );

      tl.to(
        ".animate-image",
        {
          x: 1000,
          duration: 5,
          ease: "none",
        },
        0,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className=" relative z-2 w-full overflow-hidden px-10">
      <Millimeters />
      <div className="flex flex-col gap-10">
        <div className="flex items-center w-full overflow-hidden">
          <div
            className={cn(
              "flex flex-shrink-0 animate-on-scroll",
              class_names.occupyTwo,
            )}
          >
            <h3
              className={cn(
                "text-5xl font-semibold text-white uppercase md:w-1/2",
              )}
            >
              A few projects we're proud of
            </h3>
          </div>
          <div
            className={cn(
              "h-150 flex-shrink-0 relative flex flex-col gap-3 animate-on-scroll mr-5 cursor-pointer group",
              class_names.occupyThree,
            )}
          >
            <div className="relative h-130 bg-red-500 w-full overflow-hidden animate-video-container flex justify-end items-center">
              <ImageComponent
                source="image1_rlgpkd"
                altText="image1"
                className="min-w-[150rem] object-cover h-full animate-image"
              />
              <div className="absolute z-1 bg-black/50 w-full h-full group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-130 h-70 overflow-hidden flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-opacity bg-red-500">
                <VideoComponent source="video1_ncu08f" />
              </div>
            </div>

            <div className="flex flex-col flex-shrink-0">
              <p>©2025</p>
              <p className="text-3xl font-bold uppercase hover:text-red-500">after school</p>
              <p className="text-sm font-bold uppercase text-maingray">
                documentary - social media
              </p>
            </div>
          </div>
          <div
            className={cn(
              "h-150 flex-shrink-0 relative flex flex-col gap-3 animate-on-scroll mr-5 cursor-pointer group",
              class_names.occupyThree,
            )}
          >
            <div className="relative h-130 bg-red-500 w-full overflow-hidden animate-video-container flex justify-end items-center">
              <ImageComponent
                source="image2_bnsyme"
                altText="image1"
                className="min-w-[150rem] object-cover h-full animate-image"
              />
              <div className="absolute z-1 bg-black/50 w-full h-full group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-130 h-80 overflow-hidden flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-opacity bg-red-500">
                <VideoComponent source="video2_tpfeyq" />
              </div>
            </div>

            <div className="flex flex-col flex-shrink-0">
              <p>©2025</p>
              <p className="text-3xl font-bold uppercase hover:text-red-500">after school</p>
              <p className="text-sm font-bold uppercase text-maingray">
                documentary - social media
              </p>
            </div>
          </div>
          <div
            className={cn(
              "h-150 flex-shrink-0 relative flex flex-col gap-3 animate-on-scroll mr-5 cursor-pointer group",
              class_names.occupyThree,
            )}
          >
            <div className="relative h-130 bg-red-500 w-full overflow-hidden animate-video-container flex justify-end items-center">
              <ImageComponent
                source="image3_qptj4m"
                altText="image1"
                className="min-w-[150rem] object-cover h-full animate-image"
              />
              <div className="absolute z-1 bg-black/50 w-full h-full group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-130 h-70 overflow-hidden flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
                <VideoComponent source="video3_bx3xtx" />
              </div>
            </div>

            <div className="flex flex-col flex-shrink-0">
              <p>©2025</p>
              <p className="text-3xl font-bold uppercase hover:text-red-500">after school</p>
              <p className="text-sm font-bold uppercase text-maingray">
                documentary - social media
              </p>
            </div>
          </div>
          <div
            className={cn(
              "h-150 flex-shrink-0 relative flex flex-col gap-3 animate-on-scroll mr-5 cursor-pointer group",
              class_names.occupyThree,
            )}
          >
            <div className="relative h-130 bg-red-500 w-full overflow-hidden animate-video-container flex justify-end items-center">
              <ImageComponent
                source="image4_k6haya"
                altText="image1"
                className="min-w-[150rem] object-cover h-full animate-image"
              />
              <div className="absolute z-1 bg-black/50 w-full h-full group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-130 h-70 overflow-hidden flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
                <VideoComponent source="video4_dyhmdk" />
              </div>
            </div>

            <div className="flex flex-col flex-shrink-0">
              <p>©2025</p>
              <p className="text-3xl font-bold uppercase hover:text-red-500">after school</p>
              <p className="text-sm font-bold uppercase text-maingray">
                documentary - social media
              </p>
            </div>
          </div>
        </div>
        <Button
          className={cn(
            class_names.occupyOne,
            "ms-auto text-white font-bold uppercase",
          )}
          text="Explore All Works"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
