import Away from "@/public/icons/away";

import Image from "next/image";
import React from "react";

const Awaycard = ({ src, name, time }) => {
  return (
    <div className=" flex w-full start justify-between">
      <div className=" flex gap-2 items-center ">
        <div className=" h-[40px] w-[40px] rounded-full  relative ">
          <Image src={src} className=" h-full w-full object-cover " />
          <div className=" absolute bottom-0 right-0 z-10 ">
            <div className=" h-[12px] w-[12px] bg-white rounded-full flex items-center justify-center  ">
              <div className=" h-[7px] w-[7px] bg-[#F2AE40] rounded-full "></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  ">
          <div className=" text-[#0A0D14] font-medium text-[14px]   ">
            {name}
          </div>
          {/* <div className=" text-[#525866]  text-[14px]   ">
            {" "}
            Replaced by {replaced}
          </div> */}
        </div>
      </div>
      <div className=" bg-[#FFF1F1] h-fit py-[6px] px-[8px] rounded-2xl flex items-center gap-1  ">
        <Away />
        <div className="  text-[#841818] font-medium text-[12px] leading-none  ">
          {time}
        </div>
      </div>
    </div>
  );
};

export default Awaycard;
