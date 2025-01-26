import React from "react";
import { projects } from "../../../constants/projects";
import ProjectCard from "../../ProjectCard";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-full">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold leading-8">My Projects</h1>
      </div>
      <div className="my-5 md:px-10 px-5 grid md:grid-cols-3 grid-cols-2 gap-5 gap-y-12 items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
