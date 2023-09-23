import React from "react";
import { navigationLinks } from "../constants/navigationLinks";

export const NavigationBar = () => (
  <nav className="flex flex-1 flex-col py-3 bg-slate-900 text-white">
    <ul className="flex w-1/3 list-none justify-around self-center">
      {navigationLinks.map(({ link, title }, index) => (
        <li key={title + index}>
          <a href={link}>{title}</a>
        </li>
      ))}
    </ul>
  </nav>
);
