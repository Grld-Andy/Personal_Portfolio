import React from "react";
import JourneyEven from "../../Timeline/JourneyEven";
import JourneyOdd from "../../Timeline/JourneyOdd";
import SectionHeader from "../../ui/SectionHeader";
import SectionSubHeader from "../../ui/SectionSubHeader";
import experiences from "../../../constants/experience";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="w-full text-black mt-30 px-5">
      <SectionHeader text="My Journey" />
      <SectionSubHeader text="Place cool text here" />
      <div className="text-center my-10">
        <div className="grid grid-cols-[1fr_3px_1fr] py-10">
          {experiences.map((experience, index) => (
            <>
              <div
                className={`overflow-hidden py-5 px-2 flex items-center justify-end`}
              >
                <div className="w-[350px] max-w-[350px] bg-white h-[250px] grid place-items-center">
                  <img className="max-h-[200px]" src={experience.logo} />
                </div>
              </div>
              <div className="w-full bg-black/50 h-full col-start-2"></div>
              <div className="max-w-[400px] pt-5">
                <h1 className="font-semibold text-2xl pl-5">
                  {experience.name}
                </h1>
                <p className="pl-5 text-left text-[0.9em]">{experience.date}</p>
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
