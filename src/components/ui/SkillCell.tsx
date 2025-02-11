import React from "react";
import Skill from "../../types/Skill";

interface Props {
  skill: Skill;
}
const SkillCell: React.FC<Props> = ({ skill }) => {
  return (
    <div
      title={skill.name}
      className="flex flex-col items-center justify-around rounded-md w-[100px] h-[100px] bg-linear-to-t from-[rgba(38,133,255,0.3)] border border-[rgba(38,133,255,0.3)] to-transparent shadow-md shadow-[rgba(38,133,255,0.3)] backdrop-blur-md"
    >
      <div className="w-[60px] h-[60px]">
        <img src={skill.image} className="w-full h-full" />
      </div>
      <p className="smooth-sans font-semibold text-[1.1em]">{skill.name}</p>
    </div>
  );
};

export default SkillCell;
