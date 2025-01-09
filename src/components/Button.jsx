const ActiveButton = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-1 rounded-[9px] isolation-auto">
      {/* <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#041526] via-[#3F8DE8] to-[#041526] mix-blend-normal"></div> */}
      <button className="relative z-10 flex items-center justify-center bg-white bg-gradient-to-b from-[#FFFFFF] to-[#3F8DE880] rounded-[8px] shadow-md">
        <span className="px-6 py-3 text-[13px] font-semibold leading-[17px] bg-gradient-to-b from-[#1DA1F2] to-[#03111A] bg-clip-text text-transparent">
          {children}
        </span>
      </button>
    </div>
  );
};

export default ActiveButton;
