import React from "react";
import JourneyEven from "../../Timeline/JourneyEven";
import JourneyOdd from "../../Timeline/JourneyOdd";
import SectionHeader from "../../ui/SectionHeader";
import SectionSubHeader from "../../ui/SectionSubHeader";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="w-full text-black mt-30 px-5">
      <SectionHeader text="My Journey" />
      <SectionSubHeader text="Place cool text here" />
      <div className="text-center my-10">
        <div className="grid grid-cols-[1fr_5px_1fr] py-10">
          {Array.from({ length: 4 }).map((_item, index) => (
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
