import React from "react";

const ActiveButton = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[124px] h-[40px] p-1 rounded-[9px] isolation-auto">
      {/* Gradient Animation */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#041526] via-[#3F8DE8] to-[#041526] mix-blend-normal"></div>

      {/* Button Inner Area */}
      <button className="relative z-10 flex items-center justify-center w-[122px] h-[38px] px-6 py-3 bg-gradient-to-b from-[#FFFFFF] to-[rgba(255,255,255,0.7)] rounded-[8px] shadow-md">
        <span className="text-[13px] font-semibold leading-[17px] bg-gradient-to-b from-[#1DA1F2] to-[#03111A] bg-clip-text text-transparent">
          {children}
        </span>
      </button>
    </div>
  );
};

export default ActiveButton;
