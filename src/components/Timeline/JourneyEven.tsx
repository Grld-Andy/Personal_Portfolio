import React from "react";

const JourneyEven: React.FC = () => {
  return (
    <>
      <div
        className={`overflow-hidden py-5 px-2 flex items-center justify-end`}
      >
        <div className="max-w-[350px]">
          <img
            className="w-full"
            src="/public/images/backgrounds/hero-bg3.png"
          />
        </div>
      </div>
      <div className="w-full bg-red-500 h-full col-start-2"></div>
      <div className="max-w-[400px]">
        <h1 className="font-semibold text-2xl pl-5">Journey Point</h1>
        <p className="pl-5 text-left text-[0.9em]">
          {new Date().toUTCString()}
        </p>
        <p className="opacity-60 text-left pl-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laudantium veniam repudiandae id iure quidem sit nostrum adipisci,
          ipsum ea?
        </p>
      </div>
    </>
  );
};

export default JourneyEven;
