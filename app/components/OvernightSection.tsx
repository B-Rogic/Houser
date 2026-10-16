import React from "react";
import GlobalContainer from "./GlobalContainer";
import cn from "../libs/utils";
import { class_names } from "../libs/classnames";
import CardComponent from "./CardComponent";
import { overnightData } from "../libs/data";

type Props = {};

const OvernightSection = (props: Props) => {
  return (
    <GlobalContainer className="flex justify-center">
      <div className={cn("flex flex-col pb-50", class_names.occupyTwo)}>
        <h6 className="text-6xl font-bold text-white uppercase mt-50 mb-20">
          these numbers didn't happen overnight
        </h6>
        {overnightData.map((data, index) => (
          <div key={index} className="grid md:grid-cols-2">
            <CardComponent number={data.num} plus={data.plus} purpose={data.purpose} />
            <CardComponent isDescription desc={data.desc} />
          </div>
        ))}
      </div>
    </GlobalContainer>
  );
};

export default OvernightSection;
