import React from "react";
import Absentcard from "./absentcard";
import img from "@/public/images/pfp.png";
import Awaycard from "./awaycard";

const Statustracker = () => {
  const absent = [
    {
      name: "Chris Brown",
      replace: "Arthur T.",
    },
    {
      name: "Taylor Mark",
      replace: "Daniel",
    },
    {
      name: "John Cena",
      replace: "Arthur T.",
    },
  ];
  const away = [
    {
      name: "Chris Brown",
      time: "25min",
    },
    {
      name: "Taylor Mark",
      time: "12min",
    },
    {
      name: "John Cena",
      time: "8min",
    },
  ];
  return (
    <div className=" w-full flex-col flex h-full bg-white relative overflow-hidden overflow-y-auto ">
      <div className=" w-full flex flex-col sticky top-0 left-0 bg-white z-[50]  ">
        <div className=" w-full flex items-start justify-between">
          <div className=" flex flex-col gap-1 ">
            <div className=" text-[#0A0D14] font-medium text-[16px]  ">
              Status Tracker
            </div>
          </div>
          <div className=" text-[#525866] text-[14px] leading-none font-medium cursor-pointer p-[7px] bg-white border-[1px] border-[#E2E4E9] rounded-lg ">
            See All
          </div>
        </div>
        <div className=" w-full border-[1px] border-[#E2E4E9] mt-6 rounded-full "></div>
      </div>

      <div className=" flex flex-col gap-5 w-full pt-5 ">
        <div className=" text-[#525866] text-[12px]   ">Absent </div>
        {absent.map((item) => (
          <Absentcard src={img} name={item.name} replaced={item.replace} />
        ))}
      </div>
      <div className=" w-full border-[1px] border-[#E2E4E9] my-6 rounded-full "></div>
      <div className=" flex flex-col gap-5 w-full ">
        <div className=" text-[#525866] text-[12px]   ">Away </div>
        {away.map((item) => (
          <Awaycard src={img} name={item.name} time={item.time} />
        ))}
      </div>
    </div>
  );
};

export default Statustracker;
