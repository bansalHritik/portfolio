import React from "react";

export const Section = ({ heading, subHeading, className, children }) => {
  return (
    <div className={(className ?? "red") + " mt-10 my-28 flex flex-col "}>
      <p className="text-5xl font-bold text-center mb-14">{heading}</p>
      <p>{subHeading}</p>
      {children}
    </div>
  );
};
