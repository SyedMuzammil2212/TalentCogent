import Microsoft from "@/public/icons/microsoft";
import Settings from "@/public/icons/settings";
import Toggle from "@/public/icons/toggle";
import React from "react";

const IntegrationCard = ({ svg, title, subtitle, option, disabled }) => {
  return (
    <div className="flex flex-col border border-[#E2E4E9] rounded-[16px] bg-white p-4 w-[389px]">
      <div className="flex flex-row justify-between items-center">
        {svg}
        {disabled ? (
          <div className="w-8 h-5 border border-[#E2E4E9] bg-white rounded-full relative">
            <div className="rounded-full w-4 h-4 bg-[#E2E4E9] top-[1px] left-[1px] absolute "></div>
          </div>
        ) : (
          <Toggle />
        )}
      </div>

      <div className="flex flex-col mt-[14px] gap-1">
        <div className="flex flex-row items-center gap-1">
          <p className="font-medium">{title}</p>
          {option ? (
            <div className="text-sm text-[#525866] bg-[#F6F8FA] px-2 py-{2px} rounded-full">
              SOON
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="text-sm text-[#525866]">{subtitle}</p>
      </div>
      <div className="mt-[14px]">
        <button className="w-full p-2 rounded-md text-[#525866] flex flex-row gap-2 border border-[#E2E4E9] justify-center font-medium">
          <Settings />
          Manage
        </button>
      </div>
    </div>
  );
};

export default IntegrationCard;
