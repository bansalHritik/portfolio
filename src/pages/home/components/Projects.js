import React from 'react';
import { Card } from '../../../components/Card';

const ProjectTab = ({ tabTitle }) => (
  <div className="border border-blue-primary shadow-md shadow-blue-primary px-3 py-2">
    <span>{tabTitle}</span>
  </div>
);

const ProjectTabs = ({ categories }) => (
  <div className="flex self-center">
    <div className="flex flex-row">
      {categories?.map((category) => (
        <ProjectTab tabTitle={category} />
      ))}
    </div>
  </div>
);

const Project = ({ name, date, description, imageLink }) => (
  <Card className="flex-col w-[200px] px-3 py-5">
    <div className="flex w-full h-28 justify-center mb-5">
      <img src={imageLink} className="rounded-md overflow-hidden" alt="" />
    </div>
    <div className="project-text-content">
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-sm text-gray-400">{date}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </Card>
);

export const Projects = ({ heading, subHeading, projects }) => {
  return (
    <div className="p-5 mt-16 flex flex-col">
      <p className="text-4xl text-center font-bold py-5">{heading}</p>
      <ProjectTabs categories={['Personal', 'Professional']} />
      <div className="mt-14">
        {projects?.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
};
