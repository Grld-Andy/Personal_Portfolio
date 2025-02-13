import React from "react";
import { generalSkills, skills } from "../../../constants/skills";
import SectionHeader from "../../ui/SectionHeader";
import SectionSubHeader from "../../ui/SectionSubHeader";
import SkillCell from "../../ui/SkillCell";

const Skills: React.FC = () => {
  return (
    <div>
      <div id="skills" className="relative w-full text-black px-5 py-3 mt-32">
        <SectionHeader text="MY SKILLS" />
        <SectionSubHeader text="VIEW MY TECH STACK" />
        <div className="flex justify-center gap-5 mb-5 flex-wrap">
          {generalSkills.map((skill, index) => (
            <SkillCell skill={skill} key={index} />
          ))}
        </div>
      </div>
      <div className="w-full absolute">
        <img src="/svgs/wavesNeg1.svg" className="w-full" />
      </div>
    </div>
  );
};

export default Skills;
