import React from "react";
import { projects } from "../../../constants/projects";
import ProjectCard from "../../ProjectCard";
import SectionHeader from "../../ui/SectionHeader";

const Projects: React.FC = () => {
  const buttons = ["All", "Personal", "School", "Work"];

  return (
    <div id="projects" className="w-full bg-[#f7f8fa] text-black px-5 py-3">
      <SectionHeader text="MY PROJECTS" />
      <h2 className="text-4xl font-bold mb-5">CREATING USABLE PRODUCTS</h2>
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
