import React from "react";

type Props = {};

const BoxBullet = (props: Props) => {
  return (
    <div className="flex w-4 gap-[1] flex-wrap">
      <div className="w-1 h-1 bg-white/10" />
      <div className="w-1 h-1 bg-white/10" />
      <div className="w-1 h-1 bg-white/10" />
      <div className="w-1 h-1 bg-white" />
      <div className="w-1 h-1 bg-white" />
      <div className="w-1 h-1 bg-white" />
      <div className="w-1 h-1 bg-white/10" />
      <div className="w-1 h-1 bg-white/10" />
      <div className="w-1 h-1 bg-white/10" />
    </div>
  );
};

export default BoxBullet;
