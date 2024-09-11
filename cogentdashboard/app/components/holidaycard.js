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
      className=" p-[16px]  "
    ></div>
  );
};

export default Holidaycard;
