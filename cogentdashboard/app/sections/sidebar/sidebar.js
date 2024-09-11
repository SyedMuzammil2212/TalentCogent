"use client";
import Sidehead from "@/app/components/sidehead";
import React from "react";
import img from "@/public/images/blueimg.png";
import { usePathname } from "next/navigation";
import Dashboard from "@/public/icons/dashboard";
import Rightarrow from "@/public/icons/rightarrow";
import Blueleft from "@/public/icons/blueleft";
import Calender from "@/public/icons/calender";
import Timeoff from "@/public/icons/timeoff";
import Projects from "@/public/icons/projects";
import Teams from "@/public/icons/teams";
import Integrations from "@/public/icons/integrations";
import Benefits from "@/public/icons/benefits";
import Documents from "@/public/icons/documents";
import Link from "next/link";
import Settings from "@/public/icons/settings";
import Support from "@/public/icons/support";
import Profilebar from "@/app/components/profilebar";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className=" h-full w-full flex flex-col items-start justify-between py-[24px] px-[20px] border-r-[1px] border-[#E2E4E9] ">
      <div className=" w-full flex flex-col ">
        <Sidehead src={img} role={"HRMS"} />
        <div className=" flex flex-col w-full pt-4 ">
          <Link href={"/dashboard"}>
            {" "}
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard" ? "bg-[#F6F8FA] rounded-xl" : ""
              }`}
            >
              {pathname == "/dashboard" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Dashboard />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Dashboard
                </div>
              </div>
              {pathname == "/dashboard" && <Rightarrow />}
            </div>
          </Link>
          <Link href={"/dashboard/calender"}>
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard/calender"
                  ? "bg-[#F6F8FA] rounded-xl"
                  : ""
              }`}
            >
              {pathname == "/dashboard/calender" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Calender />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard/calender"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Calender
                </div>
              </div>
              {pathname == "/dashboard/calender" && <Rightarrow />}
            </div>
          </Link>
          <Link href={"/dashboard/timeoff"}>
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard/timeoff"
                  ? "bg-[#F6F8FA] rounded-xl"
                  : ""
              }`}
            >
              {pathname == "/dashboard/timeoff" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Timeoff />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard/timeoff"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Time Off
                </div>
              </div>
              {pathname == "/dashboard/timeoff" && <Rightarrow />}
            </div>
          </Link>
          <Link href={"/dashboard/projects"}>
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard/projects"
                  ? "bg-[#F6F8FA] rounded-xl"
                  : ""
              }`}
            >
              {pathname == "/dashboard/projects" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Projects />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard/projects"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Projects
                </div>
              </div>
              {pathname == "/dashboard/projects" && <Rightarrow />}
            </div>
          </Link>
          <Link href={"/dashboard/teams"}>
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard/teams" ? "bg-[#F6F8FA] rounded-xl" : ""
              }`}
            >
              {pathname == "/dashboard/teams" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Teams />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard/teams"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Teams
                </div>
              </div>
              {pathname == "/dashboard/teams" && <Rightarrow />}
            </div>
          </Link>
          <Link href={"/dashboard/integrations"}>
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard/integrations"
                  ? "bg-[#F6F8FA] rounded-xl"
                  : ""
              }`}
            >
              {pathname == "/dashboard/integrations" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Integrations />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard/integrations"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Integrations
                </div>
              </div>
              {pathname == "/dashboard/integrations" && <Rightarrow />}
            </div>
          </Link>
          <Link href={"/dashboard/benefits"}>
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard/benefits"
                  ? "bg-[#F6F8FA] rounded-xl"
                  : ""
              }`}
            >
              {pathname == "/dashboard/benefits" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Benefits />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard/benefits"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Benefits
                </div>
              </div>
              {pathname == "/dashboard/benefits" && <Rightarrow />}
            </div>
          </Link>
          <Link href={"/dashboard/documents"}>
            <div
              className={` relative flex items-center justify-between w-full py-[12px] px-[12px] cursor-pointer gap-2 ${
                pathname == "/dashboard/documents"
                  ? "bg-[#F6F8FA] rounded-xl"
                  : ""
              }`}
            >
              {pathname == "/dashboard/documents" && (
                <div className=" absolute top-[50%] -translate-y-1/2 -left-[1rem] ">
                  <Blueleft />
                </div>
              )}
              <div className=" flex items-center gap-2">
                <Documents />
                <div
                  className={` inter text-[14px] leading-none font-medium ${
                    pathname == "/dashboard/documents"
                      ? "text-[#0A0D14]"
                      : "text-[#525866]"
                  }  `}
                >
                  Documents
                </div>
              </div>
              {pathname == "/dashboard/documents" && <Rightarrow />}
            </div>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col items-start justify-center w-full">
        <div className=" flex flex-col gap-4">
          <div className=" flex items-center gap-2 px-[12px] cursor-pointer ">
            <Settings />
            <div className=" inter font-medium text-[#525866] text-[14px] leading-none  ">
              Settings
            </div>{" "}
          </div>
          <div className=" flex items-center gap-2 px-[12px] cursor-pointer ">
            <Support />
            <div className=" inter font-medium text-[#525866] text-[14px] leading-none  ">
              Support
            </div>{" "}
          </div>
        </div>
        <div className=" w-full border-[1px] border-[#E2E4E9] my-3"></div>
        <div>
          <Profilebar />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
