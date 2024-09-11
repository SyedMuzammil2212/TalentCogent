"use client";
import Bell from "@/public/icons/bell";
import Plus from "@/public/icons/plus";
import Reddot from "@/public/icons/reddot";
import Serach from "@/public/icons/serach";
import React, { useState } from "react";

const Dashboardnavbar = () => {
  const [search, setSearch] = useState();
  const [notify, setnotify] = useState(true);
  return (
    <div className=" bg-white py-[20px] flex items-center w-full ">
      <div className=" border-[1px] border-[#EFEFEF] flex items-center w-full h-[44px] px-4 rounded-lg  ">
        <Serach />
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className=" w-full pl-4 h-full outline-none placeholder:inter placeholder:font-medium placeholder:text-[16px] placeholder:text-[#DCDCDC] "
          placeholder="Search Here..."
        />
      </div>
      <div className=" flex items-center gap-6 px-8">
        <div className="  relative">
          <Bell />
          {notify && (
            <div className=" absolute -top-[1px] right-0">
              <Reddot />
            </div>
          )}
        </div>
        <div className=" w-[155px] px-4 flex items-center justify-center gap-1 h-[40px] rounded-xl cursor-pointer bg-[#1F3AF1]">
          <Plus />
          <div className=" inter text-white font-medium text-[13px] leading-none   ">
            Create Request
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardnavbar;
