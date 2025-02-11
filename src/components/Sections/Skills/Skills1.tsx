import React from "react";
import { skills } from "../../../constants/skills";
import SectionHeader from "../../ui/SectionHeader";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full bg-[#f7f8fa] text-black px-5 py-3 mt-32">
      <SectionHeader text="MY SKILLS" />
      <h2 className="text-4xl font-bold mb-5">VIEW MY TECH STACK</h2>
      <div className="flex justify-end gap-5 mb-5">
        {skills.map((skill, index) => (
          <div
            title={skill.name}
            key={index}
            className="flex flex-col items-center justify-around rounded-md w-[100px] h-[100px] bg-linear-to-t from-[rgba(38,133,255,0.3)] border border-[rgba(38,133,255,0.3)] to-transparent shadow-md shadow-[rgba(38,133,255,0.3)] backdrop-blur-md"
          >
            <div className="w-[60px] h-[60px]">
              <img src={skill.image} className="w-full h-full" />
            </div>
            <p className="smooth-sans font-semibold text-[1.1em]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
