import React from "react";
import img from "@/public/images/pfp.png";
import Image from "next/image";
import Verified from "@/public/icons/verified";
import Rightarrow from "@/public/icons/rightarrow";

const Profilebar = () => {
  return (
    <div className=" flex items-center gap-2 py-3  ">
      <div className=" h-[40px] w-[40px] rounded-full overflow-hidden ">
        <Image src={img} className="h-full w-full object-cover" />
      </div>
      <div className=" flex items-center ">
        <div className="flex flex-col h-[35px] items-start justify-between    ">
          <div className="flex items-center gap-1  ">
            <div className=" inter text-[#0A0D14] font-medium text-[14px] leading-none  ">
              Jerome Bell
            </div>
            <Verified />
          </div>
          <div className=" text-[#525866] text-[12px] inter leading-none  ">
            debbie.baker@example.com
          </div>
        </div>
        <Rightarrow />
      </div>
    </div>
  );
};

export default Profilebar;
