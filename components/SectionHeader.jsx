import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="container mx-auto text-center mb-[5rem]">
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeader;
