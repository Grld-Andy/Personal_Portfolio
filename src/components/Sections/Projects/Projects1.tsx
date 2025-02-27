import React, { useEffect, useState } from "react";
import currentProjects from "../../../constants/projects";
import ProjectCard from "../../ui/ProjectCard";
import SectionHeader from "../../ui/SectionHeader";
import SectionSubHeader from "../../ui/SectionSubHeader";
import Project from "../../../types/Project";
import { motion, AnimatePresence } from "framer-motion";

const Projects: React.FC = () => {
  const buttons = ["All", "Personal", "School", "Work"];
  const [projects, setProjects] = useState<Array<Project>>(currentProjects);
  const [view, setView] = useState<string>("All");

  useEffect(() => {
    if (view == "All") {
      setProjects(currentProjects);
    } else {
      setProjects(() =>
        currentProjects.filter((project) => project.tag === view)
      );
    }
  }, [view]);

  const changeView = (newView: string) => {
    setView(newView);
  };
  return (
    <div
      id="projects"
      className="relative w-full bg-white text-black px-5 py-3 mt-36"
    >
      <SectionHeader text="MY PROJECTS" />
      <SectionSubHeader text="BRINGING IDEAS TO LIFE" />
      <div className="flex justify-end gap-5 mb-5 flex-wrap">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => {
              changeView(button);
            }}
            className={`${
              view === button ? "bg-slate-400 shadow-md" : "bg-slate-300"
            } hover:bg-slate-500 transition-all duration-300 cursor-pointer font-light rounded-full py-2 px-6`}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              layout
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="absolute w-full left-0 bottom-[-150px]">
        <img src="/svgs/waves1.svg" className="w-full" />
      </div>
    </div>
  );
};

export default Projects;
