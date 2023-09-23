import React from 'react';
import { Chip } from '../../../components/Chip';
import { Section } from '../../../components/Section';

export const Skill = ({ title, skills }) => {
  return (
    <div className="flex flex-col shadow-md shadow-[#1e599d] border-[1px] rounded-md border-[#1e599d] w-96 justify-between mt-7 p-5">
      <p className="text-center text-gray-200 font-semibold text-2xl mb-5">{title}</p>
      <div className="flex flex-row justify-center flex-wrap gap-3">
        {skills?.map((skill) => (
          <Chip title={skill} containerClassName="flex items-center border-2 border-gray-600 py-2 px-3 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export const SkillSet = ({ skillSets }) => {
  return (
    <Section heading="Skills">
      <div className="flex flex-1 justify-around">
        {skillSets?.map((skillset) => (
          <Skill {...skillset} />
        ))}
      </div>
    </Section>
  );
};
