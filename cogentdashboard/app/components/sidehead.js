import Image from "next/image";
import React from "react";

const Sidehead = ({ src, role }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className=" flex items-center gap-3 ">
        <div className=" h-[24px] w-[24px] rounded-full ">
          <Image src={src} className=" h-full w-full object-cover" />
        </div>
        <div className=" font-Inter18 text-[#0A0D14] text-[14px] leading-none font-medium ">
          Talent Cogent
        </div>
      </div>
      <div className=" font-Inter18 text-[#525866] text-[12px] leading-none ">
        {role}
      </div>
      <div className=" w-full border-[1px] border-[#E2E4E9] my-3"></div>
    </div>
  );
};

export default Sidehead;
