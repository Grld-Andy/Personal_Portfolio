import React from "react";
import { projects } from "../../../constants/projects";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-full">
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold leading-8 mb-4">My Projects</h1>
      </div>
      <div className="my-5 md:px-10 px-5 grid md:grid-cols-3 grid-cols-2 gap-5 gap-y-12 items-center justify-center">
        {projects.map((project, index) => (
          <div key={index} className="w-full h-full">
            <div className="relative w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover object-center w-full h-[200px] md:h-[230px] hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <h1 className="text-[1.3em] font-semibold leading-[1em]">
                {project.name}
              </h1>
              <p className="text-[#aaa] leading-[1em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, fugiat.
              </p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
