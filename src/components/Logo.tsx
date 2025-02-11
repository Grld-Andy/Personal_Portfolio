import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="relative h-[30px] text-white hidden sm:flex w-[30px] scale-110 rubik">
      <div className="absolute left-[0px] bg-red-500 w-[25px] h-[25px] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-200 cursor-default">
        <span className="relative bottom-[2px]">a</span>
      </div>
      <div className="absolute top-[5px] left-[15px] bg-amber-500 w-[25px] h-[25px] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-200 cursor-default">
        <span className="relative bottom-[2px]">n</span>
      </div>
      <div className="absolute bottom-[13px] left-[28px] bg-black w-[25px] h-[25px] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-200 cursor-default">
        <span className="relative bottom-[2px] right-[1px]">d</span>
      </div>
      <div className="absolute top-[2px] left-[45px] bg-green-700 w-[25px] h-[25px] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-200 cursor-default">
        <span className="relative bottom-[3px]">y</span>
      </div>
    </div>
  );
};

export default Logo;
