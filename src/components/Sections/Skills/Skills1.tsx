import React from "react";
import { skills } from "../../../constants/skills";
import SectionHeader from "../../ui/SectionHeader";
import SkillCell from "../../ui/skillCell";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full text-black px-5 py-3 mt-32">
      <SectionHeader text="MY SKILLS" />
      <h2 className="text-4xl font-bold mb-5 libreBaskerville">
        VIEW MY TECH STACK
      </h2>
      <div className="flex justify-center gap-5 mb-5">
        {skills.slice(0, 4).map((skill, index) => (
          <SkillCell skill={skill} key={index} />
        ))}
      </div>
      <div className="flex justify-center gap-5 mb-5">
        {skills.slice(4, 6).map((skill, index) => (
          <SkillCell skill={skill} key={index} />
        ))}
      </div>
      <div className="flex justify-center gap-5 mb-5">
        {skills.slice(6, 9).map((skill, index) => (
          <SkillCell skill={skill} key={index} />
        ))}
      </div>
      <div className="flex justify-center gap-5 mb-5">
        {skills.slice(6).map((skill, index) => (
          <SkillCell skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
