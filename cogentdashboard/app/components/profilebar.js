import React from "react";
import img from "@/public/images/pfp.png";
import Image from "next/image";

const Profilebar = () => {
  return (
    <div className=" flex items-center  ">
      <div className=" h-[40px] w-[40px] rounded-full overflow-hidden ">
        <Image src={img} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Profilebar;
