"use client";
import React from "react";
import GlobalContainer from "./GlobalContainer";
import cn from "../libs/utils";
import { class_names } from "../libs/classnames";
import Millimeters from "./Millimeters";
import Button from "./Button";
import Card from "./Card";
import { cardData } from "../libs/data";

type Props = {};

const Perspectives = (props: Props) => {
  return (
    <GlobalContainer>
      <Millimeters />
      <div className="flex justify-between items-end">
        <h6
          className={cn("text-5xl font-bold uppercase", class_names.occupyTwo)}
        >
          fresh perspectives from the studio
        </h6>
        <div className={cn("flex flex-col gap-5", class_names.occupyOne)}>
          <p className="uppercase font-semibold text-sm">
            PRODUCTION LESSONS, CREATIVE EXPERIMENTS, AND PRACTICAL IDEAS FROM
            PEOPLE WHO SPEND A SUSPICIOUS AMOUNT OF TIME INSIDE TIMELINES.
          </p>
          <Button
            text="red all blogs"
            className={cn("uppercase font-semibold")}
          />
        </div>
      </div>
      <div className="w-full flex mt-20 justify-end">
        <div className={cn(class_names.occupyThree, "grid md:grid-cols-3")}>
          {cardData.map((card, index) => (
            <Card
              style={{
                transform: `translateY(${100 * index}px)`,
              }}
              key={index}
              source={card.source}
              day={card.day}
              monthYear={card.monthYear}
              title={"production"}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </GlobalContainer>
  );
};

export default Perspectives;
