import React from "react";
import { LOGO_URL } from "../constants/content";

const imageLink =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

export const Chip = ({ title, logo, link, containerClassName }) => {
  return (
    <div className={containerClassName + " gap-1 flex justify-center items-center"}>
      <img className="w-4 h-4" src={LOGO_URL[logo] ?? imageLink} />
      <span className="text-gray-100">{title}</span>
    </div>
  );
};
