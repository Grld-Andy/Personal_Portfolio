import React from "react";

const Footer1: React.FC = () => {
  return (
    <footer className="bg-black py-3 flex justify-center z-[3]">
      <p>
        &copy; {new Date().getFullYear()} Gerald Andy Ansong. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer1;
