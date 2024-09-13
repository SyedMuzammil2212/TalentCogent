import Downarrow from "@/public/icons/downarrow";
import Locationicon from "@/public/icons/locationicon";
import Person from "@/public/icons/person";
import Image from "next/image";
import React from "react";

const Meetingscard = ({ with1, timings, platform, type, members, index }) => {
  const len = members.length - 3;
  return (
    <div
      style={{
        background:
          index % 3 == 0
            ? "linear-gradient(to bottom, #FFDAC2, #FEF3EB)"
            : index % 3 == 1
            ? "linear-gradient(to bottom,#C2D6FF, #EBF1FF)"
            : "linear-gradient(to bottom, #CAC2FF,#EEEBFF)",
      }}
      className=" p-[16px] rounded-2xl flex flex-col w-full gap-4  "
    >
      <div className=" flex w-full items-start justify-between ">
        <div className={` flex flex-col gap-1 `}>
          <div
            className={` text-[14px] font-medium ${
              index % 3 == 0
                ? "text-[#6E330C]"
                : index % 3 == 1
                ? "text-[#162664]"
                : "text-[#2B1664]"
            }   `}
          >
            {`Meeting with ${with1}`}
          </div>
          <div
            className={` text-[14px] font-medium  ${
              index % 3 == 0
                ? "text-[#6E330C]"
                : index % 3 == 1
                ? "text-[#162664]"
                : "text-[#2B1664]"
            }    `}
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
      <div className=" flex   items-center bg-white py-[2px] w-fit rounded-3xl px-2  ">
        {members.slice(0, 3).map((item) => (
          <div className=" h-[24px] w-[24px] rounded-full -ml-[8px] ">
            <Image
              src={item}
              className=" object-cover w-full h-full rounded-full "
            />
          </div>
        ))}
        {len > 0 && (
          <div className=" text-[#525866] text-[12px]  ">{`+${len}`}</div>
        )}
      </div>
      <div className=" flex w-full items-center justify-between ">
        <div
          className={` text-[12px] font-medium ${
            index % 3 == 0
              ? "text-[#6E330C]"
              : index % 3 == 1
              ? "text-[#162664]"
              : "text-[#2B1664]"
          }   `}
        >
          {`On ${platform}`}
        </div>
        <div
          className={` py-[2px] px-2 border-[1px] rounded-full  ${
            index % 3 == 0
              ? "text-[#C2540A] border-[#C2540A]"
              : index % 3 == 1
              ? "text-[#253EA7] border-[#253EA7] "
              : "text-[#5A36BF] border-[#5A36BF]"
          } text-[11px] font-medium uppercase leading-none  `}
        >
          {type}
        </div>
      </div>
    </div>
  );
};

export default Meetingscard;
