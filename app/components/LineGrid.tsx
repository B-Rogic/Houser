import React from "react";

type Props = {};

const LineGrid = (props: Props) => {
  return (
    <div className="flex justify-between md:px-10 fixed left-0 top-0 z-1 w-full">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="w-[0.01rem] h-screen bg-white/20"
        />
      ))}
    </div>
  );
};

export default LineGrid;
