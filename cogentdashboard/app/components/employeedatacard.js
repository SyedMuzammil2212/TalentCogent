import React from "react";

const Employeedatacard = ({ head, number, svg, style }) => {
  return (
    <div
      className={` border-[#EFEFEF] border-[1px] rounded-lg px-[16px] py-[24px] flex items-start justify-between w-full ${style}  `}
    >
      <div className=" flex flex-col">
        <div className=" text-[#656565] text-[14px] inter font-medium  ">
          {head}
        </div>
        <div className=" text-[#1A238E] font-bold inter text-[38px]  ">
          {number}
        </div>
      </div>
      {svg}
    </div>
  );
};

export default Employeedatacard;
