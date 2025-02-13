import React from "react";
import { projects } from "../../../constants/projects";
import ProjectCard from "../../ui/ProjectCard";
import SectionHeader from "../../ui/SectionHeader";
import SectionSubHeader from "../../ui/SectionSubHeader";

const Projects: React.FC = () => {
  const buttons = ["All", "Personal", "School", "Work"];

  return (
    <div
      id="projects"
      className="relative w-full bg-white text-black px-5 py-3 mt-36"
    >
      <SectionHeader text="MY PROJECTS" />
      <SectionSubHeader text="CREATING USABLE PRODUCTS" />
      <div className="flex justify-end gap-5 mb-5">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-slate-300 hover:bg-slate-400 transition-all duration-300 cursor-pointer font-light rounded-full py-2 px-6"
          >
            {button}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="absolute w-full left-0 bottom-[-150px]">
        <img src="/public/svgs/waves1.svg" className="w-full" />
      </div>
    </div>
  );
};

export default Projects;
