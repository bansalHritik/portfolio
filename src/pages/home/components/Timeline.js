import React from 'react';
import { Chip } from '../../../components/Chip';

export const Timeline = ({ position, companyName, date, skills, shortDesc }) => {
  return (
    <div className="rounded-md shadow-md shadow-blue-primary border-2 border-blue-primary flex flex-1 mt-8 p-5 flex-row">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 m-1 rounded-full border-2 border-[#1e599d]" />
        <div className="flex flex-1 w-[2px] bg-[#1e599d]" />
      </div>
      <div className="flex flex-1 flex-col mx-4">
        <p className="text-lg font-medium">{position}</p>
        <p className="font-light">{companyName}</p>
        <p className="text-sm font-light">{date}</p>
        <p className="my-4 font-extralight">{shortDesc}</p>
        <div className="flex gap-4">
          {skills?.map((skill) => (
            <Chip
              title={skill}
              containerClassName="flex items-center border-2 border-gray-600 py-2 px-2 rounded-lg gap-1 flex justify-center items-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
