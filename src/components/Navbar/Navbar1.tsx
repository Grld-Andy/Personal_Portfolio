import React from "react";
import Logo from "../Logo";

const Navbar1: React.FC = () => {
  return (
    <nav
      className={`z-10 shadow-md shadow-[#fff3] text-[1.3em] font-medium bg-white
        flex justify-between py-5 px-5 items-center text-black`}
    >
      <Logo />
      <div>
        <div className="flex gap-1 sm:gap-3 text-[0.8em]">
          <a href="#intro">Intro</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about-me">About_Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
