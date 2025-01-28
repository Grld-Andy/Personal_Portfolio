import React from "react";
import JourneyEven from "../../Timeline/JourneyEven";
import JourneyOdd from "../../Timeline/JourneyOdd";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="w-full">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold leading-8">My Journey</h1>
        <div className="grid grid-cols-[1fr_5px_1fr] px-5 py-10">
          {Array.from({ length: 4 }).map((item, index) => (
            <>
              {index % 2 == 0 ? (
                <JourneyEven key={index} />
              ) : (
                <JourneyOdd key={index} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
