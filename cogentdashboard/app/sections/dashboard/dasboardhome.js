import React from "react";
import Dashboardnavbar from "./dashboardnavbar";
import Employeedatacard from "@/app/components/employeedatacard";
import Totalemployee from "@/public/icons/totalemployee";
import Leaveemployee from "@/public/icons/leaveemployee";
import Newemployee from "@/public/icons/newemployee";
import Totalapplications from "@/app/components/totalapplications";
import Statustracker from "@/app/components/statustracker";
import Events from "./events";

const Dasboardhome = () => {
  return (
    <div className=" w-full pb-8 ">
      <Dashboardnavbar />
      <div className=" flex gap-[19px] pb-4 ">
        <Employeedatacard
          head={"Total employees"}
          number={323}
          svg={<Totalemployee />}
        />
        <Employeedatacard
          head={"Employees on leave"}
          number={10}
          svg={<Leaveemployee />}
        />
        <Employeedatacard
          head={"New Employees"}
          number={24}
          svg={<Newemployee />}
        />
        <div className=" w-[20%] "></div>
      </div>
      <div className=" w-full flex gap-4   ">
        <div className=" w-[70%] flex flex-col gap-4 ">
          <div className=" w-full flex flex-col gap-3 px-[20px] py-[15px] bg-gradient-to-l border-[1px] rounded-xl border-[#EFEFEF] from-purple-50 to-purple-100 ">
            <div className=" w-full flex items-center justify-between  ">
              <div className=" text-[#1A238E] text-[20px] font-semibold   ">
                Pending Requests
              </div>
              <div className=" text-[#525866] text-[14px] font-medium cursor-pointer py-[5px] px-[12px] bg-white border-[1px] border-[#E2E4E9] rounded-lg ">
                View All
              </div>
            </div>
            <div className=" flex gap-10 ">
              <Employeedatacard
                head={"Leave Requests"}
                number={24}
                style={"shadow-custom-purple bg-white"}
              />
              <Employeedatacard
                head={"Regularization Request"}
                number={200}
                style={"shadow-custom-purple bg-white"}
              />
              <div className=" w-[20%] "></div>
            </div>
          </div>{" "}
          <div className=" flex w-full h-full gap-5  ">
            <div className=" w-[50%] p-[16px] rounded-2xl border-[1px] bg-white border-[#EFEFEF] h-[380px]  ">
              <Totalapplications
                applications={56}
                shortlisted={36}
                onhold={20}
                rejected={10}
                total={350}
              />
            </div>
            <div className=" w-[50%] pt-[16px] px-[16px] rounded-2xl border-[1px] bg-white border-[#EFEFEF] h-[380px]">
              <Statustracker />
            </div>
          </div>
        </div>
        <div className=" w-[30%] ">
          <Events />{" "}
        </div>
      </div>
    </div>
  );
};

export default Dasboardhome;
