import React from "react";

const JourneyOdd: React.FC = () => {
  return (
    <>
      <div className="flex justify-end">
        <div className="max-w-[400px] pt-5">
          <h1 className="font-semibold text-2xl pr-3">Journey Point</h1>
          <p className="pr-5 text-right text-[0.9em]">
            {new Date().toUTCString()}
          </p>
          <p className="opacity-60 text-right pr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            laudantium veniam repudiandae id iure quidem sit nostrum adipisci,
            ipsum ea?
          </p>
        </div>
      </div>
      <div className="w-full bg-red-500 h-full col-start-2"></div>
      <div
        className={`overflow-hidden py-5 px-2 flex items-center justify-start`}
      >
        <div className="max-w-[350px]">
          <img
            className="w-full"
            src="/public/images/backgrounds/hero-bg3.png"
          />
        </div>
      </div>
    </>
  );
};

export default JourneyOdd;
