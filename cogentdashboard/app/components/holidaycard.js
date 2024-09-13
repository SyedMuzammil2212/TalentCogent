import React from "react";

const Holidaycard = ({
  name,
  start,
  end,
  days,
  message,
  type,
  emoji,
  index,
}) => {
  return (
    <div
      style={{
        background:
          index % 3 == 0
            ? "linear-gradient(to bottom, #CAC2FF, #EEEBFF)"
            : index % 3 == 1
            ? "linear-gradient(to bottom, #F9C2FF, #FDEBFF)"
            : "linear-gradient(to bottom, #FFDAC2, #FEF3EB)",
      }}
      className=" p-[16px] rounded-2xl flex flex-col w-full gap-4  "
    >
      <div className=" flex w-full items-start justify-between ">
        <div className={` flex flex-col gap-1 `}>
          <div
            className={` text-[14px] font-medium ${
              index % 3 == 0
                ? "text-[#2B1664]"
                : index % 3 == 1
                ? "text-[#620F6C]"
                : "text-[#6E330C]"
            }   `}
          >
            {name}
          </div>
          <div
            className={` text-[14px] font-medium ${
              index % 3 == 0
                ? "text-[#2B1664]"
                : index % 3 == 1
                ? "text-[#620F6C]"
                : "text-[#6E330C]"
            }    `}
          >
            {start == end ? start : `${start} - ${end}`}
          </div>
        </div>
        <div
          className={` py-1 px-2 border-[1px] rounded-full  ${
            index % 3 == 0
              ? "text-[#5A36BF] border-[#5A36BF]"
              : index % 3 == 1
              ? "text-[#9C23A9] border-[#9C23A9] "
              : "text-[#C2540A] border-[#C2540A]"
          } text-[12px] font-medium  `}
        >
          {days == 1 ? `1-day break` : `${days}-days break`}
        </div>
      </div>
      <div className=" flex items-center gap-2 ">
        <div className=" h-[28px] w-[28px] rounded-full bg-white flex items-center justify-center leading-none ">
          {emoji}
        </div>
        <div
          className={` text-[14px] leading-none  ${
            index % 3 == 0
              ? "text-[#2B1664]"
              : index % 3 == 1
              ? "text-[#620F6C]"
              : "text-[#6E330C]"
          }   `}
        >
          {message}
        </div>
      </div>
      <div
        className={` text-[12px] font-medium ${
          index % 3 == 0
            ? "text-[#2B1664]"
            : index % 3 == 1
            ? "text-[#620F6C]"
            : "text-[#6E330C]"
        }   `}
      >
        {`${type} Holiday`}
      </div>
    </div>
  );
};

export default Holidaycard;
