import React from "react";
import {
  ContactMeContent,
  ExperienceContent,
  IntroductionContent,
  ProjectContent,
  SkillSetContent,
} from "../../constants/content";
import { Button, Card, Chip, NavigationBar, Section, Textfield, TypeWriter } from "../../components";

const ContactMe = ({ heading }) => {
  return (
    <Section heading={heading} className="my-0 items-center" sectionName="contact-me">
      <Card className="p-14 lg:p-4 w-[80%] lg:w-fit">
        <form className="flex flex-1 flex-col w-auto gap-5">
          <Textfield placeholder="Name" className="w-auto" name="name" />
          <Textfield placeholder="Subject" name="Subject" />
          <Textfield placeholder="Message" name="message" />
          <input type="submit" value="Messgae Me!" className="rounded-md py-2 px-3 bg-blue-primary mt-2" />
        </form>
      </Card>
    </Section>
  );
};

const Experience = ({ heading, subheading, experiences }) => {
  return (
    <Section heading={heading} subHeading={subheading} sectionName="experience">
      {experiences?.map((experience, index) => (
        <Timeline {...experience} key={index} />
      ))}
    </Section>
  );
};

const Header = () => (
  <NavigationBar />
  // <div className="flex flex-1">

  // </div>
);

const Introduction = ({ greeting, name, tagLinePrefix, skills, summary, profilePic, resumeLink }) => {
  return (
    <section className="flex flex-col lg:flex-row sm:justify-center text-white py-20" id="about">
      <div className="flex flex-col flex-1 justify-between order-2 lg:order-1 items-center lg:items-start mt-10 lg:mt-0">
        <p className="text-4xl my-5 font-bold">{greeting}</p>
        <p className="text-5xl my-2 font-bold">{name}</p>
        <TypeWriter text={skills[0]} />

        <div className="flex flex-row">
          {/* <div className="w-auto flex-1"> */}
          {/* </div> */}
        </div>

        <p className="text-lg w-4/5 mt-4 text-gray-300">{summary}</p>
        <a
          target="_blank"
          href={resumeLink}
          className="capitalize mt-10 w-fit rounded-md p-3 text-center bg-blue-primary font-medium text-white"
        >
          Download my resume
        </a>
      </div>
      <div className="flex flex-1 self-center justify-center order-1 lg:order-2">
        <img className="h-96 w-auto rounded-full" src={profilePic} alt="Profile Image"></img>
      </div>
    </section>
  );
};

const ProjectTab = ({ tabTitle }) => (
  <div className="border border-blue-primary shadow-md shadow-blue-primary px-3 py-2">
    <span>{tabTitle}</span>
  </div>
);

const Project = ({ name, date, description, imageLink }) => (
  <Card className="flex-col w-[80%] lg:w-80 px-5 py-5">
    <div className="flex w-full h-60 lg:h-40 justify-center mb-5">
      <img src={imageLink} className="rounded-md overflow-hidden" alt="" />
    </div>
    <div className="project-text-content">
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-sm text-gray-400 mt-3 mb-2">{date}</p>
      <p className="text-sm text-gray-200">{description}</p>
      <div className="mt-5 flex gap-4 items-center">
        <Button text="Demo" className="bg-blue-primary rounded-md font-medium py-2 px-3" />
        <Button text="Code" className="bg-blue-primary rounded-md font-medium py-2 px-3" />
      </div>
    </div>
  </Card>
);

export const Projects = ({ heading, subHeading, projects }) => {
  return (
    <Section sectionName="projects" heading={heading} className="p-5 mt-16 flex flex-col">
      <div className="mt-14 flex items-center justify-center flex-col lg:flex-row lg:justify-around gap-x-11 gap-y-11">
        {projects?.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </Section>
  );
};

const Skill = ({ title, skills }) => {
  return (
    <div className="flex flex-col shadow-md shadow-blue-primary border-[1px] rounded-md border-blue-primary lg:w-96 justify-between p-5">
      <p className="text-center text-gray-200 font-semibold text-2xl mb-5">{title}</p>
      <div className="flex flex-1 justify-center items-center flex-wrap gap-2">
        {skills?.map((props, index) => (
          <Chip key={index} {...props} />
        ))}
      </div>
    </div>
  );
};

export const SkillSet = ({ skillSets }) => {
  return (
    <Section heading="Skills" className="justify-center items-center" sectionName="skillset">
      <div className="flex flex-1 flex-col lg:flex-row justify-around lg:gap-x-6 gap-y-6">
        {skillSets?.map((skillset, index) => (
          <Skill {...skillset} key={"skill_" + index} />
        ))}
      </div>
    </Section>
  );
};

const Timeline = ({ position, companyName, date, skills, shortDesc }) => {
  return (
    <div className="rounded-md shadow-md shadow-blue-primary border-2 border-blue-primary flex flex-1 mt-8 p-5 flex-row">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 m-1 rounded-full border-2 border-blue-primary" />
        <div className="flex flex-1 w-[2px] bg-blue-primary" />
      </div>
      <div className="flex flex-1 flex-col mx-4">
        <p className="text-lg font-medium">{position}</p>
        <p className="font-light">{companyName}</p>
        <p className="text-sm font-light">{date}</p>
        <p className="my-4 font-extralight">{shortDesc}</p>
        <div className="flex flex-wrap gap-4">
          {skills?.map((skill, index) => (
            <Chip
              key={index}
              {...skill}
              containerClassName="flex items-center border-2 border-gray-600 py-2 px-2 rounded-lg gap-1 flex justify-center items-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const HomePage = () => (
  <>
    <Header />
    <div className="bg-text text-white flex flex-col font-inter">
      <div className="px-32 bg-slate-800">
        <Introduction {...IntroductionContent} />
        <SkillSet skillSets={SkillSetContent} />
        <Experience {...ExperienceContent} />
        <Projects {...ProjectContent} />
        <ContactMe {...ContactMeContent} />
      </div>
    </div>
  </>
);
