"use client";
import React, { useRef, useState } from "react";
import GlobalContainer from "./GlobalContainer";
import Millimeters from "./Millimeters";
import cn from "../libs/utils";
import { class_names } from "../libs/classnames";
import Accordion from "./Accordion";
import ActiveCarousel from "./ActiveCarousel";
import FlexPanels from "./CenterDetectedMarquee";
import PlaygroundSection from "./PlaygroundSection";

type Props = {};

const categories = [
  {
    id: "event",
    label: "EVENT",
  },
  {
    id: "social-media",
    label: "SOCIAL MEDIA",
  },
  {
    id: "brand-film",
    label: "BRAND FILM",
  },
  {
    id: "product",
    label: "PRODUCT",
  },
  {
    id: "ugc",
    label: "UGC",
  },
  {
    id: "documentary",
    label: "DOCUMENTARY",
  },
  {
    id: "corporate",
    label: "CORPORATE",
  },
];

const Build = (props: Props) => {
  const [drop, setDrop] = useState<string>("Video Production");
  const accordionRef = useRef<HTMLDivElement>(null);
  return (
    <GlobalContainer>
      <Millimeters />
      <h4
        className={cn(
          "text-5xl font-semibold text-white uppercase mb-10",
          class_names.occupyTwo,
        )}
      >
        built around the entre production process.
      </h4>
      <div className="flex flex-col">
        <Accordion
          ref={accordionRef}
          num={1}
          title="Video production"
          handleDrop={() => {
            if (drop === "Video Production") {
              setDrop("");
            } else {
              setDrop("Video Production");
            }
          }}
          className="overflow-hidden"
          style={{
            height:
              drop === "Video Production"
                ? `${accordionRef.current?.scrollHeight}px`
                : "0px",
          }}
        />
      </div>
      <Millimeters />
      <div className="pt-50 flex pb-20 items-end w-full justify-between">
        <h6
          className={cn(
            "text-5xl font-semibold uppercase text-white",
            class_names.occupyTwo,
          )}
        >
          different businesses.same creative obsession.
        </h6>
        <p
          className={cn(
            "font-semibold text-white uppercase",
            class_names.occupyOne,
          )}
        >
          we partner with brands across diverse industries, delivering creative
          video solutions designed to engage, inspire, and make a lasting
          impact.
        </p>
      </div>
      <div
        className={cn(
          "bg-maingray w-full flex justify-end border-y border-white/15 ",
        )}
      >
        {/* <div className={cn("grid grid-cols-3", class_names.occupyThree)}>
          <h6 className="text-2xl font-bold text-white my-auto mx-auto">
            OUR PLAYGROUND
          </h6>
          <FlexPanels
          />
        </div> */}
        <PlaygroundSection />
      </div>
    </GlobalContainer>
  );
};

export default Build;
