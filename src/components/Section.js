import React from "react";

export const Section = ({ heading, subHeading, className, children, sectionName }) => {
  return (
    <section className={(className ?? "red") + " pt-16 my-12 flex flex-col "} id={sectionName}>
      <p className="text-5xl font-semibold text-center mb-14">{heading}</p>
      <p>{subHeading}</p>
      {children}
    </section>
  );
};
