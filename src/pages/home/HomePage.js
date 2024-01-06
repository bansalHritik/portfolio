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
    <Section heading={heading} className="my-0" sectionName="contact-me">
      <Card className="p-4">
        <form className="contact-me-form flex flex-col gap-5">
          <Textfield placeholder="Name" name="name" />
          <Textfield placeholder="Subject" name="Subject" />
          <Textfield placeholder="Message" name="message" />
          <input type="submit" value="Messgae Me!" className="rounded-full bg-blue-200 mt-2" />
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
    <section className="flex flex-row justify-center text-white py-20" id="about">
      <div className="flex flex-col flex-1 justify-between">
        <p className="text-5xl my-5 font-bold">{greeting}</p>
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
      <div className="flex flex-1 self-center justify-center">
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
    <section id="projects" className="p-5 mt-16 flex flex-col">
      <p className="text-4xl text-center font-bold py-5">{heading}</p>
      <ProjectTabs categories={["Personal", "Professional"]} />
      <div className="mt-14">
        {projects?.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

const Skill = ({ title, skills }) => {
  return (
    <div className="flex flex-col shadow-md shadow-blue-primary border-[1px] rounded-md border-blue-primary w-96 justify-between p-5">
      <p className="text-center text-gray-200 font-semibold text-2xl mb-5">{title}</p>
      <div className="flex flex-1 justify-center items-center flex-wrap gap-x-2">
        {skills?.map((props, index) => (
          <Chip key={index} {...props} />
        ))}
      </div>
    </div>
  );
};

export const SkillSet = ({ skillSets }) => {
  console.log(skillSets);
  return (
    <Section heading="Skills" sectionName="skillset">
      <div className="flex flex-1 justify-around gap-x-6">
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
        <div className="flex gap-4">
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
    <div className="bg-text text-white flex flex-col">
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
