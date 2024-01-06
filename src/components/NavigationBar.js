import React from "react";
import { navigationLinks } from "../constants/navigationLinks";

export const NavigationBar = () => (
  <nav className="flex flex-1 flex-col py-3 bg-slate-900 text-white sticky top-0 z-50">
    <ul className="flex w-1/3 list-none justify-around self-center">
      {navigationLinks.map(({ link, title, sectionId }, index) => (
        <li key={title + index}>
          <a href={"#" + sectionId}>{title}</a>
        </li>
      ))}
    </ul>
  </nav>
);
