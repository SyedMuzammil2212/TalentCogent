"use client";
import Settings from "@/public/icons/settings";
import React, { useState } from "react";
import Search from "@/public/icons/serach";

const PSettings = () => {
  const settingOptions = [
    "General Settings",
    "Profile Settings",
    "Company Settings",
    "Notification Settings",
    "Privacy and Security",
    "Integrations",
  ];

  const [selectedSetting, setSelectedSetting] = useState("General Settings");

  return (
    <div className="flex flex-col px-8">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-[14px] items-center">
          <div className="rounded-full bg-[#F6F8FA] w-fit h-fit p-3">
            <Settings w={30} h={30} />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-lg tracking-tight">Settings Page</p>
            <p className="text-[#525866] text-sm">
              Manage your preferences and configure various options.
            </p>
          </div>
        </div>
        <Search />
      </div>
      <div className=" mt-5 border-[#E2E4E9] border-b border-t py-[14px]">
        <div className="flex flex-row gap-6 text-sm  ">
          {settingOptions.map((setting) => (
            <p
              onClick={() => setSelectedSetting(setting)}
              className={` cursor-pointer text-sm ${
                selectedSetting === setting
                  ? "text-black font-medium"
                  : "text-[#525866]"
              }`}
              key={setting}
            >
              {setting}
            </p>
          ))}
        </div>
      </div>
      <div className="p-[10px] flex flex-col border border-[#E2E4E9] rounded-2xl w-[260px] mt-9 ">
        <div className="px-2">
          <p className="text-[#868C98] text-sm font-medium">SELECT MENU</p>
        </div>
      </div>
    </div>
  );
};

export default PSettings;
