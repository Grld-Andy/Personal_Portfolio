import React from "react";

interface Props {
  text: string;
}

const SectionSubHeader: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="uppercase text-4xl font-bold mb-5 libreBaskerville">
      {text}
    </h1>
  );
};

export default SectionSubHeader;
