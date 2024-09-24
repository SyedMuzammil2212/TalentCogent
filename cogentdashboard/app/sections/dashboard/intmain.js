"use client";
import Serach from "@/public/icons/serach";
import React, { useState } from "react";
import IntegrationCard from "@/app/components/integrationcard";
import IntegrationDetails from "@/app/components/intcarddetails";
import UpcomingIntegrationDetails from "@/app/components/upcomingintdetails"
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
      <div className="mt-7 flex flex-col gap-1">
        <p className="font-medium">Available Integrations</p>
        <p className="text-sm text-[#525866]">
          Access the integrated tools and apps ready for your HR tasks.
        </p>
      </div>
      <div className="mt-5 flex flex-row flex-wrap gap-6">
        {IntegrationDetails.map((integration) => (
          <IntegrationCard
            key={integration.id}
            svg={integration.svg}
            title={integration.title}
            subtitle={integration.subtitle}
          />
        ))}
      </div>
      <div className="mt-6 lg:flex lg:flex-col lg:gap-1 ">
        <p className="font-medium">Upcoming Integrations</p>
        <p className="text-sm text-[#525866]">
          Seamless collaboration and document management.
        </p>
      </div>
      <div className="flex flex-row gap-6 mt-5 flex-wrap">
         {UpcomingIntegrationDetails.map((integration)=>(
          <IntegrationCard
          option={true}
          disabled={true}
            key={integration.id}
            svg={integration.svg}
            title={integration.title}
            subtitle={integration.subtitle}
          />
         ))} 
      </div>
    </div>
  );
};

export default Intmain;
