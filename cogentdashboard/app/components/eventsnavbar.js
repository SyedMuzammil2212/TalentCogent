"use client";
import Eventicon from "@/public/icons/eventicon";
import Holiday from "@/public/icons/holiday";
import Meetings from "@/public/icons/meetings";
import React from "react";

const Eventsnavbar = ({ activeTab, setActiveTab }) => {
  return (
    <div className=" w-full flex items-center justify-between border-b-[1px] py-4 px-3 border-[#E2E4E9] ">
      <div
        className=" flex items-center gap-1 cursor-pointer relative  "
        onClick={() => {
          setActiveTab(1);
        }}
      >
        <Meetings activeTab={activeTab} />
        <div
          className={` text-[14px] ${
            activeTab == 1 ? " text-[#0A0D14] " : " text-[#525866] "
          } font-medium    `}
        >
          Meetings
        </div>
        {activeTab == 1 && (
          <div className=" absolute left-[50%] -translate-x-1/2 w-[90px] -bottom-4 h-[2px]  bg-[#375DFB]  "></div>
        )}
      </div>
      <div
        className=" flex items-center gap-1 cursor-pointer relative  "
        onClick={() => {
          setActiveTab(2);
        }}
      >
        <Eventicon activeTab={activeTab} />
        <div
          className={` text-[14px] ${
            activeTab == 2 ? " text-[#0A0D14] " : " text-[#525866] "
          } font-medium    `}
        >
          Events
        </div>
        {activeTab == 2 && (
          <div className=" absolute left-[50%] -translate-x-1/2 w-[90px] -bottom-4 h-[2px]  bg-[#375DFB]  "></div>
        )}
      </div>
      <div
        className=" flex items-center gap-1 cursor-pointer relative  "
        onClick={() => {
          setActiveTab(3);
        }}
      >
        <Holiday activeTab={activeTab} />
        <div
          className={` text-[14px] ${
            activeTab == 3 ? " text-[#0A0D14] " : " text-[#525866] "
          } font-medium    `}
        >
          Holiday
        </div>
        {activeTab == 3 && (
          <div className=" absolute left-[50%] -translate-x-1/2 w-[90px] -bottom-4 h-[2px]  bg-[#375DFB]  "></div>
        )}
      </div>
    </div>
  );
};

export default Eventsnavbar;
