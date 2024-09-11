import React from "react";

const Holiday = ({ activeTab }) => {
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
          d="M14.5 18.25H13V17.5H7V18.25H5.5V17.5H4.75C3.92125 17.5 3.25 16.8287 3.25 16V6.25C3.25 5.42125 3.92125 4.75 4.75 4.75H7V3.25C7 2.836 7.336 2.5 7.75 2.5H12.25C12.664 2.5 13 2.836 13 3.25V4.75H15.25C16.0787 4.75 16.75 5.42125 16.75 6.25V16C16.75 16.8287 16.0787 17.5 15.25 17.5H14.5V18.25ZM15.25 6.25H4.75V16H15.25V6.25ZM8.5 7.75V14.5H7V7.75H8.5ZM13 7.75V14.5H11.5V7.75H13ZM11.5 4H8.5V4.75H11.5V4Z"
          fill={activeTab == 3 ? "#375DFB" : "#868C98"}
        />
      </svg>
    </div>
  );
};

export default Holiday;
