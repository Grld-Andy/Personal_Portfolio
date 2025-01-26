import React from "react";
import Project from "../types/Project";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="object-cover object-center w-full h-[200px] md:h-[230px] hover:scale-110 transition-all duration-300"
        />
        <div className="absolute top-0 bottom-0 w-full h-full bg-gradient-to-t from-[#0009] to-transparent hover:bg-[#0006] transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 flex p-2">
          {project.techStack.map((stack, index) => (
            <img
              key={index}
              src={stack}
              className="w-[30px] h-[30px] cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-3">
        <h1 className="text-[1.3em] font-semibold leading-[1em]">
          {project.name}
        </h1>
        <p className="text-[#aaa] leading-[1em]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          fugiat.
        </p>
      </div>
      <div className="flex gap-2 flex-wrap mt-2">
        {project.github && (
          <a href={project.github} target="_blank">
            <img
              className="w-[30px] h-[30px]"
              src="/public/images/icons/html_5_48px.png"
              alt={project.name}
            />
          </a>
        )}
        {project.website && (
          <a href={project.website} target="_blank">
            <img
              className="w-[30px] h-[30px]"
              src="/public/images/icons/redis_48px.png"
              alt={project.name}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
