"use client";
import Bell from "@/public/icons/bell";

import Integrations1 from "@/public/icons/integrations1";
import Plus from "@/public/icons/plus";
import Reddot from "@/public/icons/reddot";
import React, { useState } from "react";

const Integrationnavbar = () => {
  const [notify, setnotify] = useState(true);
  return (
    <div className=" bg-white py-[20px] flex items-center w-full border-b-[1px] border-[#E2E4E9] ">
      <div className="  flex items-center gap-4 w-full h-[44px] px-4 rounded-lg  ">
        <div className=" p-[8px] bg-[#F6F8FA] rounded-full ">
          <Integrations1 />
        </div>
        <div className=" flex flex-col gap-2 ">
          <div className=" text-[18px] text-[#0A0D14] font-medium   ">
            Integrations
          </div>{" "}
          <div className=" text-[14px] text-[#525866]   ">
            Manage your integrations to enhance and automate your workflow.
          </div>{" "}
        </div>
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
        <div className=" w-[160px] px-4 flex items-center justify-start gap-1 h-[40px] rounded-xl cursor-pointer bg-[#1F3AF1]">
          <Plus />
          <div className=" inter text-white font-medium text-[13px] leading-none   ">
            Add Integration
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrationnavbar;
