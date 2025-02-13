import React, { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import SectionSubHeader from "../../ui/SectionSubHeader";
import experiences from "../../../constants/experience";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="experience" className="w-full text-black mt-30 px-5">
      <SectionHeader text="My Journey" />
      <SectionSubHeader text="Place cool text here" />
      <div className="text-center my-10">
        {experiences.map((experience, index) => (
          <motion.div
            className="grid grid-cols-[1fr_3px_1fr] gap-3"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`overflow-hidden py-5 px-2 flex items-center justify-end`}
            >
              <div
                className={`w-[350px] max-w-[350px] bg-white h-[250px] grid place-items-center transition-all duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "grayscale blur-xs"
                    : ""
                }`}
              >
                <img className="max-h-[200px]" src={experience.logo} />
              </div>
            </div>
            <div className="w-full bg-black/50 h-full col-start-2 relative">
              <div className="absolute left-[-8px] top-6 bg-blue-500 border-[4px] border-white shadow-[0_0_5px_rgba(0,0,0,0.3)] w-5 h-5 rounded-full"></div>
            </div>
            <div className="max-w-[400px] pt-5">
              <h1 className="font-semibold text-2xl pl-5">{experience.name}</h1>
              <div className="flex flex-col my-1">
                <p className="pl-5 text-left text-[0.9em] flex items-center">
                  <LocationOnIcon />
                  {experience.location}
                </p>
                <p className="pl-5 text-left text-[0.9em] flex items-center">
                  <CalendarMonthIcon />
                  {experience.date}
                </p>
              </div>
              <p className="opacity-60 text-left pl-5">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
