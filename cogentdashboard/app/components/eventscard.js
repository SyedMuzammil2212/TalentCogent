import Downarrow from "@/public/icons/downarrow";
import Locationicon from "@/public/icons/locationicon";
import Person from "@/public/icons/person";
import React from "react";

const Eventscard = ({
  name,
  timings,
  location,
  organizer,
  total,
  attend,
  index,
}) => {
  return (
    <div
      style={{
        background:
          index % 3 == 0
            ? "linear-gradient(to bottom, #F9D2DA, #FDEDF0)"
            : index % 3 == 1
            ? "linear-gradient(to bottom, #C2EFFF, #EBFAFF)"
            : "linear-gradient(to bottom, #D4F7E9,#EFFAF6)",
      }}
      className=" p-[16px] rounded-2xl flex flex-col w-full gap-4  "
    >
      <div className=" flex w-full items-start justify-between ">
        <div className={` flex flex-col gap-1 `}>
          <div
            className={` text-[14px] font-medium ${
              index % 3 == 0
                ? "text-[#710E21]"
                : index % 3 == 1
                ? "text-[#164564]"
                : "text-[#176448]"
            }   `}
          >
            {name}
          </div>
          <div
            className={` text-[14px] font-medium ${
              index % 3 == 0
                ? "text-[#710E21]"
                : index % 3 == 1
                ? "text-[#164564]"
                : "text-[#176448]"
            }   `}
          >
            {timings}
          </div>
        </div>
        <div className=" h-[24px] w-[24px] bg-white rounded-full flex items-center justify-center ">
          <div className=" relative top-[0.5px] ">
            <Downarrow />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2 ">
        <div className=" h-[28px] w-[28px] rounded-full bg-white flex items-center justify-center leading-none ">
          <Locationicon index={index} />
        </div>
        <div
          className={` text-[14px] leading-none  ${
            index % 3 == 0
              ? "text-[#710E21]"
              : index % 3 == 1
              ? "text-[#164564]"
              : "text-[#176448]"
          }  `}
        >
          {location}
        </div>
      </div>
      <div className=" flex w-full items-center justify-between ">
        <div
          className={` text-[12px] font-medium ${
            index % 3 == 0
              ? "text-[#710E21]"
              : index % 3 == 1
              ? "text-[#164564]"
              : "text-[#176448]"
          }   `}
        >
          {`by ${organizer}`}
        </div>
        <div className=" flex items-center ">
          <Person index={index} />
          <div
            className={` text-[12px] leading-none  ${
              index % 3 == 0
                ? "text-[#710E21]"
                : index % 3 == 1
                ? "text-[#164564]"
                : "text-[#176448]"
            }  `}
          >
            {`${attend}/${total}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventscard;
