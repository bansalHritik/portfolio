function skill(name, logo) {
  return {
    title: name,
    logo,
  };
}

export const IntroductionContent = {
  greeting: "Hey There! 👋",
  name: "I'm Ritik Bansal",
  tagLinePrefix: "Working as ",
  skills: ["Developer"],
  summary:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  profilePic: "https://i.ibb.co/BVdMbnk/Profile.jpg",
  resumeLink: "https://drive.google.com/uc?export=download&id=11Wl9B_RlOO-G1SzDzonm1XTuJZ2XxUyj",
};

export const SkillSetContent = [
  {
    title: "Frontend",
    skills: [skill("React"), skill("Angular"), skill("React Native"), skill("JavaScript"), skill("TypeScript")],
  },
  {
    title: "Backend",
    skills: [
      skill("Node.js", "dotnet"),
      skill("C#", "csharp"),
      skill("Java", "java"),
      skill(".NET Core", "react"),
      skill(".NET Framework", "angular"),
    ],
  },
  {
    title: "Additional",
    skills: [skill("AWS"), skill("Oracle"), skill("DynamoDB"), skill("Git")],
  },
];

export const ExperienceContent = {
  heading: "Experience",
  subHeading: "Details of all of my professional experience in the industry.",
  experiences: [
    {
      position: "Senior Engineer",
      companyName: "Nagarro",
      date: "Jan-2024 till Present",
      skills: [skill("AWS MSK"), skill("AWS SQS"), skill("AWS Lambda"), skill("API Gateway"), skill("Windows Service")],
      shortDesc: "Worked on complex asyncronous applications using AWS based services and Windows services.",
    },
    {
      position: "Engineer",
      companyName: "Nagarro",
      date: "July-2021 To Dec-2023",
      skills: [
        skill(".Net Core"),
        skill("AWS Step Function"),
        skill("AWS EventBridge"),
        skill("AWS Lambda"),
        skill("API Gateway"),
        skill("Angular"),
      ],
      shortDesc: "Worked on AWS, REST and WebSocket APIs and asyncronous applications.",
    },
    {
      position: "Associate Engineer",
      companyName: "Nagarro",
      date: "Jan-2021 To July-2022",
      skills: [skill(".Net Framework"), skill("Angular"), skill(".Net Core"), skill("React"), skill("Git")],
      shortDesc: "Worked on API and UI test frameworks, Angular and .NET framework based application",
    },
    {
      position: "Software Developer Intern",
      companyName: "Memorres",
      date: "Oct-2020 To Jan-2021",
      skills: [skill("React"), skill("React Native"), skill("Express"), skill("TypeScript")],
      shortDesc:
        "Created various mobile application using React-Native, including QR code based application, Sudoku game, WiFi scanner, etc.",
    },
  ],
};

export const ProjectContent = {
  heading: "Projects",
  subHeading: "",
  projects: [
    {
      name: "Place Me",
      date: "12-22-1232",
      description: "A placement platform for collage students in house.",
      imageLink: "https://artsaccessinc.org/wp-content/uploads/2023/08/Free-to-join-1024x577.jpg",
      repo: "",
      link: "",
    },
    {
      name: "Mp3 Song classifier",
      date: "12-22-1232",
      description: "A console tool to categorize mp3 songs based on their genre, artist, etc",
      imageLink: "https://artsaccessinc.org/wp-content/uploads/2023/08/Free-to-join-1024x577.jpg",
      repo: "",
      link: "",
    },
    {
      name: "Book Shala",
      date: "12-22-1232",
      description: "A intra-college platform to share books and notes among the juniors and peers.",
      imageLink: "https://artsaccessinc.org/wp-content/uploads/2023/08/Free-to-join-1024x577.jpg",
      repo: "",
      link: "",
    },
  ],
};

export const ContactMeContent = {
  heading: "Lets Get Connected!",
};

export const LOGO_URL = {
  dotnet: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  csharp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
};

export const ORG_URL = {
  nagarro: "",
  memorres: "",
};
