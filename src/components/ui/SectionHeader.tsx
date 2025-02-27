import React from "react";

interface Props {
  text: string;
}

const SectionHeader: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="text-sm oregano text-blue-900 font-semibold mb-3 uppercase">
      {text}
    </h1>
  );
};

export default SectionHeader;
