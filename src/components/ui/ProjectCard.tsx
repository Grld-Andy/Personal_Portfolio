import React from "react";
import Project from "../../types/Project";
import TiltedCard from "./TiltedCard/TiltedCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-full h-full px-7">
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
      <div className="mt-2 flex flex-col gap-3">
        <h1 className="text-[1.3em] font-semibold leading-[1em]">
          {project.name}
        </h1>
        <p className="text-[#aaa] leading-[1em]">{project.description}</p>
      </div>
      <div className="flex gap-1 flex-wrap mt-2 items-center">
        {project.github && (
          <a href={project.github} target="_blank">
            <GitHubIcon />
          </a>
        )}
        {project.website && (
          <a href={project.website} target="_blank">
            <LanguageIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
