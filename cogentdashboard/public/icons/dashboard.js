import { usePathname } from "next/navigation";
import React from "react";

const Dashboard = () => {
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
          d="M16.75 3.25C16.9489 3.25 17.1397 3.32902 17.2803 3.46967C17.421 3.61032 17.5 3.80109 17.5 4V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H16.75ZM9.25 10.75H4V15.25H9.25V10.75ZM16 10.75H10.75V15.25H16V10.75ZM9.25 4.75H4V9.25H9.25V4.75ZM16 4.75H10.75V9.25H16V4.75Z"
          fill={pathname == "/dashboard" ? "#355CFC" : "#525866"}
        />
      </svg>
    </div>
  );
};

export default Dashboard;
