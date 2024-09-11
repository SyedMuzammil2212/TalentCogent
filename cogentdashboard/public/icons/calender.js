import { usePathname } from "next/navigation";
import React from "react";

const Calender = () => {
  const pathname = usePathname();
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.75 3.25H16.75C16.9489 3.25 17.1397 3.32902 17.2803 3.46967C17.421 3.61032 17.5 3.80109 17.5 4V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H6.25V1.75H7.75V3.25H12.25V1.75H13.75V3.25ZM12.25 4.75H7.75V6.25H6.25V4.75H4V7.75H16V4.75H13.75V6.25H12.25V4.75ZM16 9.25H4V15.25H16V9.25Z"
          fill={pathname == "/dashboard/calender" ? "#355CFC" : "#525866"}
        />
      </svg>
    </div>
  );
};

export default Calender;
