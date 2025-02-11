import React from "react";
import Project from "../../types/Project";
import TiltedCard from "./TiltedCard/TiltedCard";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-full h-full">
      <TiltedCard
        imageSrc={project.image}
        altText={project.name}
        captionText={project.name}
        containerHeight="170px"
        containerWidth="300px"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="relative top-2 left-2 ">
            {project.techStack.map((stack, index) => (
              <img
                key={index}
                src={stack}
                className="w-[30px] h-[30px] cursor-pointer"
              />
            ))}
          </p>
        }
      />
      {/* {project.techStack.map((stack, index) => (
        <img
          key={index}
          src={stack}
          className="w-[30px] h-[30px] cursor-pointer"
        />
      ))} */}
      <div className="mt-2 flex flex-col gap-3">
        <h1 className="text-[1.3em] font-semibold leading-[1em]">
          {project.name}
        </h1>
        <p className="text-[#aaa] leading-[1em]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          fugiat.
        </p>
      </div>
      <div className="flex gap-1 flex-wrap mt-2 items-center">
        {project.github && (
          <a href={project.github} target="_blank">
            <img
              className="w-[30px] h-[30px]"
              src="/images/icons/github-60.png"
              alt={project.name}
            />
          </a>
        )}
        {project.website && (
          <a href={project.website} target="_blank">
            <img
              className="w-[25px] h-[25px]"
              src="/images/icons/website-50.png"
              alt={project.name}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
