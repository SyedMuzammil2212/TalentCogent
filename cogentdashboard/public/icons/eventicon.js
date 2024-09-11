import React from "react";

const Eventicon = ({ activeTab }) => {
  return (
    <div>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.25 3.25H17.25C17.4489 3.25 17.6397 3.32902 17.7803 3.46967C17.921 3.61032 18 3.80109 18 4V16C18 16.1989 17.921 16.3897 17.7803 16.5303C17.6397 16.671 17.4489 16.75 17.25 16.75H3.75C3.55109 16.75 3.36032 16.671 3.21967 16.5303C3.07902 16.3897 3 16.1989 3 16V4C3 3.80109 3.07902 3.61032 3.21967 3.46967C3.36032 3.32902 3.55109 3.25 3.75 3.25H6.75V1.75H8.25V3.25H12.75V1.75H14.25V3.25ZM16.5 7.75V4.75H14.25V6.25H12.75V4.75H8.25V6.25H6.75V4.75H4.5V7.75H16.5ZM16.5 9.25H4.5V15.25H16.5V9.25ZM6 10.75H9.75V13.75H6V10.75Z"
          fill={activeTab == 2 ? "#375DFB" : "#868C98"}
        />
      </svg>
    </div>
  );
};

export default Eventicon;
