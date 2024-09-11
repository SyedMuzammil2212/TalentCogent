import React from "react";

const Totalapplications = ({
  applications,
  shortlisted,
  onhold,
  rejected,
  total,
}) => {
  return (
    <div className=" w-full flex flex-col ">
      <div className=" w-full flex items-start justify-between  ">
        <div className=" flex flex-col gap-1 ">
          <div className=" text-[#0A0D14] font-medium text-[16px]  ">
            Total Applications
          </div>
          <div className=" text-[#BDBDBD] text-[14px] font-medium  ">
            {total}
          </div>
        </div>
        <div className=" text-[#525866] text-[14px] leading-none font-medium cursor-pointer p-[7px] bg-white border-[1px] border-[#E2E4E9] rounded-lg ">
          See All
        </div>
      </div>
      <div className=" w-full border-[1px] border-[#E2E4E9] my-6 rounded-full "></div>
      <div className=" pt-4 w-full ">
        <div className=" w-full flex h-[12px]">
          <div
            className="  h-full bg-[#EE3158] "
            style={{ width: `${rejected}%` }}
          ></div>
          <div
            className=" h-full bg-[#FFA800] "
            style={{ width: ` ${onhold}%` }}
          ></div>
          <div
            className=" h-full bg-[#05825F] "
            style={{ width: `${shortlisted}%` }}
          ></div>
          <div
            className="  h-full bg-[#3596F7] "
            style={{ width: ` ${applications}%` }}
          ></div>
        </div>
      </div>
      <div className=" h-full w-full flex-col flex items-start justify-between gap-5 py-8 ">
        <div className=" w-full flex items-center justify-between ">
          <div className=" flex gap-3 items-center ">
            <div className=" h-[12px] w-[12px] rounded-full bg-[#3596F7] "></div>
            <div className=" text-[#000000] font-medium text-[16px] leading-none  ">
              Applications
            </div>
          </div>
          <div className=" bg-[#3596F71A] px-[12px] py-[4px] text-[#3596F7] font-medium rounded-2xl  ">
            {applications}%
          </div>
        </div>
        <div className=" w-full flex items-center justify-between ">
          <div className=" flex gap-3 items-center ">
            <div className=" h-[12px] w-[12px] rounded-full bg-[#05825F] "></div>
            <div className=" text-[#000000] font-medium text-[16px] leading-none  ">
              Shortlisted
            </div>
          </div>
          <div className=" bg-[#05825F1A] px-[12px] py-[4px] text-[#05825F] font-medium rounded-2xl  ">
            {shortlisted}%
          </div>
        </div>
        <div className=" w-full flex items-center justify-between ">
          <div className=" flex gap-3 items-center ">
            <div className=" h-[12px] w-[12px] rounded-full bg-[#FFA800] "></div>
            <div className=" text-[#000000] font-medium text-[16px] leading-none  ">
              on-Hold
            </div>
          </div>
          <div className=" bg-[#FFA8001A] px-[12px] py-[4px] text-[#FFA800] font-medium rounded-2xl  ">
            {onhold}%
          </div>
        </div>
        <div className=" w-full flex items-center justify-between ">
          <div className=" flex gap-3 items-center ">
            <div className=" h-[12px] w-[12px] rounded-full bg-[#EE3158] "></div>
            <div className=" text-[#000000] font-medium text-[16px] leading-none  ">
              Rejected
            </div>
          </div>
          <div className=" bg-[#EE31581A] px-[12px] py-[4px] text-[#EE3158] font-medium rounded-2xl  ">
            {rejected}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totalapplications;
