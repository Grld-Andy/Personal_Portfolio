import React from "react";
import Logo from "../Logo";
import { motion } from "framer-motion";

const Navbar1: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`z-10 shadow-md text-[1.3em] font-medium bg-white
        flex justify-between py-5 px-5 items-center text-black`}
    >
      <Logo />
      <div>
        <div className="flex gap-1 sm:gap-3 text-[0.8em]">
          <a href="#intro">Intro</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="https://drive.google.com/file/d/1iPgONbYGT3hHU_-mkP8D7X9rR3s9vMYs/view?usp=drive_link">Resume</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar1;
