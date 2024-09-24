"use client";
import Serach from "@/public/icons/serach";
import React, { useState } from "react";

const Intmain = () => {
  const [tab, setTab] = useState(1);
  const [search, setSearch] = useState();
  return (
    <div className=" flex flex-col w-full py-6 inter ">
      <div className=" flex w-full items-center justify-between ">
        <div className=" py-[4px] px-[4px] flex items-center justify-center gap-[2px] bg-[#F6F8FA] rounded-xl ">
          <div
            className={` ${
              tab == 1 ? " text-black bg-white " : " text-[#868C98]"
            } text-[14px] font-medium   py-[4px] px-[16px] rounded-lg cursor-pointer duration-300 `}
            onClick={() => {
              setTab(1);
            }}
          >
            All Apps
          </div>
          <div
            className={` ${
              tab == 2 ? " text-black bg-white " : " text-[#868C98]"
            } text-[14px] font-medium   py-[4px] px-[16px] rounded-lg cursor-pointer duration-300 `}
            onClick={() => {
              setTab(2);
            }}
          >
            Connected
          </div>
          <div
            className={` ${
              tab == 3 ? " text-black bg-white " : " text-[#868C98]"
            } text-[14px] font-medium   py-[4px] px-[16px] rounded-lg cursor-pointer duration-300 `}
            onClick={() => {
              setTab(3);
            }}
          >
            Disconnected
          </div>
        </div>
        <div className=" flex items-center w-[50%] gap-3">
          <div className=" border-[1px] border-[#EFEFEF] flex items-center w-full h-[40px] px-4 rounded-lg  ">
            <Serach color={"#868C98"} />
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className=" w-full pl-4 h-full outline-none placeholder:inter  placeholder:text-[14px] placeholder:text-[#868C98] "
              placeholder="Search...."
            />
          </div>
          <div className=" h-[40px] flex items-center gap-1 px-2 border-[1px] border-[#EFEFEF] rounded-lg">
            <div>1</div>
            <div className=" text-[#525866] text-[14px] font-medium  ">
              Filter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intmain;
