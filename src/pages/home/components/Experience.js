import React from 'react';
import { Timeline } from './Timeline';
import { Section } from '../../../components/Section';

export const Experience = ({ heading, subheading, experiences }) => {
  return (
    <Section heading={heading} subHeading={subheading}>
      {experiences?.map((experience) => (
        <Timeline {...experience} />
      ))}
    </Section>
  );
};
