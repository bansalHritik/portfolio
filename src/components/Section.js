import React from "react";

export const Section = ({ heading, subHeading, className, children, sectionName }) => {
  return (
    <section className={(className ?? "red") + " pt-10 my-28 flex flex-col "} id={sectionName}>
      <p className="text-5xl font-bold text-center mb-14">{heading}</p>
      <p>{subHeading}</p>
      {children}
    </section>
  );
};
