import React from "react";

const Navbar1: React.FC = () => {
  return (
    <nav
      className={`z-10 shadow-md shadow-[#fff3] smooth-sans text-[1.3em] font-medium text-white bg-linear-to-t from-[#fff3]
    to-[#fff1] fixed flex items-center justify-between rounded-full p-5 sm:px-10 md:px-16 w-[calc(100%-20px)] mx-[10px] my-5 backdrop-blur-sm`}
    >
      <div className="relative h-[30px] w-[30px] scale-110 rubik">
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
      <div className="flex gap-3">
        <a href="#intro">Intro</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
      </div>
      <div>
        <a href="#contact-me">
          <button className="bg-blue-700 px-3 rounded-2xl shadow-sm shadow-blue-500 relative hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 active:brightness-125 active:shadow-sm active:translate-y-[0px] cursor-pointer">
            Contact <span className="hidden sm:inline">me</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar1;
