import React from "react";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="w-full">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold leading-8">My Journey</h1>
        <div className="grid grid-cols-[1fr_5px_1fr] px-5 py-10">
          {Array.from({ length: 4 }).map((item, index) => (
            <>
              <div
                className={`overflow-hidden row-start-${index + 1} pb-10 px-5 ${
                  index % 2 == 1 ? `col-start-3` : ""
                }`}
              >
                <div>
                  <img
                    className="w-full"
                    src="/public/images/backgrounds/hero-bg3.png"
                  />
                </div>
              </div>
              <div className="w-full bg-red-500 h-full col-start-2"></div>
              <div
                className={` ${
                  index % 2 == 1 ? `col-start-1 row-start-${index + 1}` : ""
                }`}
              >
                <h1 className="font-semibold text-2xl">Journey Point</h1>
                <p className="opacity-60 text-left pl-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima laudantium veniam repudiandae id iure quidem sit
                  nostrum adipisci, ipsum ea?
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
