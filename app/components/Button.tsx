import React from "react";
import cn from "../libs/utils";

type Props = {
  className: string;
  text: string;
};

const Button = (props: Props) => {
  return (
    <button className={cn("bg-majorred py-3 relative cursor-pointer", props.className)}>
      {props.text}
      <div className="w-2 h-2 bg-darkred absolute top-0 right-0" />
      <div className="w-2 h-2 bg-darkred absolute top-0 left-0" />
      <div className="w-2 h-2 bg-darkred absolute bottom-0 right-0" />
      <div className="w-2 h-2 bg-darkred absolute bottom-0 left-0" />
    </button>
  );
};

export default Button;
