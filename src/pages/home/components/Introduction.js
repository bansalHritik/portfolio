import React from 'react';
import { Button } from '../../../components/Button';
import { TypeWriter } from '../../../components/TypeWriter';

export const Introduction = ({ greeting, name, tagLinePrefix, skills, summary, profilePic }) => {
  return (
    <div className="flex flex-row justify-center text-white py-20">
      <div className="flex flex-col flex-1 justify-between">
        <p className="text-5xl my-5 font-bold">{greeting}</p>
        <p className="text-5xl my-2 font-bold">{name}</p>
        <TypeWriter text={skills[0]} />

        <div className="flex flex-row">
          {/* <div className="w-auto flex-1"> */}
          {/* </div> */}
        </div>

        <p className="text-lg w-4/5 mt-4 text-gray-300">{summary}</p>
        <Button
          text="Download my resume"
          className="capitalize mt-10 w-fit rounded-md p-3 text-center bg-[#1e599d] font-medium text-white"
        />
      </div>
      <div className="flex flex-1 self-center justify-center">
        <img className="h-96 w-auto rounded-full" src={profilePic} alt="Profile Image"></img>
      </div>
    </div>
  );
};
