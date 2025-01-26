import React from "react";
import Background from "../../Background/Background";

const Hero1: React.FC = () => {
  return (
    <>
      <div className="absolute z-[-1] h-screen border">
        <Background />
      </div>
      <section
        id="intro"
        className="relative px-4 h-[calc(100vh)] grid place-items-center"
      >
        <div className="absolute w-full h-screen z-[1]">
          <div className="absolute w-full h-screen bg-radial from-transparent from-[1%] to-[#111]"></div>
          <div className="absolute w-full h-screen bg-radial from-transparent from-[1%] to-[#111]"></div>
          <div className="absolute w-full h-screen bg-radial from-transparent from-[1%] to-[#111]"></div>
          {/* <div className="absolute w-full h-screen bg-gradient-to-t from-[#111] from-[1%] via-transparent to-transparent"></div> */}
          <img
            src="/images/backgrounds/hero-bg1.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-5 flex-col z-[3]">
          <div className="text-center">
            <h1 className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Hi,
            </h1>
            <h1 className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 leading-18">
              I'm Andy
            </h1>
            <h1 className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              I build for the WEB
            </h1>
          </div>
          <div className="flex gap-5 text-center items-center justify-center h-[45px] text-white">
            <button className="relative border-2 border-[#7510F7] rounded-sm h-full w-full font-medium text-[18px] leading-[20px] overflow-hidden group cursor-pointer">
              <span className="absolute inset-0 bg-[#7510F7] transform scale-x-100 group-hover:scale-x-0 origin-left transition-transform duration-300 ease-in-out"></span>
              <span className="relative text-white z-10">View my CV</span>
            </button>
            <button className="relative border-2 border-[#7510F7] rounded-sm h-full w-full font-medium text-[18px] leading-[20px] overflow-hidden group cursor-pointer">
              <a href="#projects">
                <span className="absolute inset-0 bg-[#7510F7] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-5"></span>
                <span className="relative text-white z-10">Projects</span>
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;
