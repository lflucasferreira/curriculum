import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Lucas Ferreira",
  initials: "LF",
  location: "Recife, Pernambuco - Brazil",
  locationLink: "https://www.google.com/maps/place/Recife,+Pernambuco",
  about:
    "QA Engineer with a keen eye for detail and a deep understanding of software full-stack engineering",
    
  summary:
    "With a decade of experience as a QA Engineer, I currently hold the position of Senior QA Engineer at Questrade. My expertise encompasses testing web and mobile applications, API testing, and test automation. I have gained valuable experience across diverse industries, including mainly finance, e-commerce, and telecommunications. Driven by a passion for technology, I am continuously seeking opportunities to expand my knowledge and contribute to the advancement of software quality.",
  avatarUrl: "https://avatars.githubusercontent.com/lflucasferreira",
  // personalWebsiteUrl: "https://www.lucasferreira.net",
  contact: {
    email: "lucasferreira@outlook.com.br",
    tel: "+5581997226092",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/LFLucasFerreira",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lflucasferreira/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Dalhousie University",
      degree: "Undergraduate in Computer Science",
      start: "09/2013",
      end: "12/2014",
    },
    {
      school: "UFRPE",
      degree: "Undergraduate in Information Systems",
      start: "07/2011",
      end: "10/2022",
    },
    {
      school: "SENAI-PE",
      degree: "Computer Technician (CISCO systems)",
      start: "07/2008",
      end: "12/2010",
    },
  ],
  licenses: [
    {
      school: "DevOps Essentials Professional Certificate",
      degree: "Credential ID: 42649903 by CertiProf",
      expiration: "July 2022",
    },
    {
      school: "Scrum Foundation Professional Certificate",
      degree: "Credential ID: CLVPFPQNPN-SSSSLKJH-XHRTXHXTYH by CertiProf",
      expiration: "",
    },
  ],
  work: [
    {
      company: "Questrade",
      link: "https://www.questrade.com",
      badges: ["Remote", "Full-time"],
      title: "Senior QA Engineer",
      // logo: ConsultlyLogo,
      start: "05/2022",
      end: null,
      description: "Developed and maintained automated test scripts using Cypress for end-to-end and component testing of web applications. Designed and executed comprehensive test plans to ensure thorough coverage of application features. Implemented CI/CD pipelines to automate testing processes and ensure rapid feedback on code changes. Utilized Postman for API testing and validation, ensuring robust backend functionality. Conducted web development tasks using Angular to enhance front-end features and user experience. Managed and queried databases including MongoDB and SQL Server to support testing and development activities. Monitored application performance and quality metrics using Datadog to identify and address issues proactively. Tracked and managed defects using Jira and Zephyr Scale, ensuring timely resolution and continuous improvement of software quality.",
    },
    {
      company: "CI&T",
      link: "https://www.ciandt.com",
      badges: ["Remote", "Full-time"],
      title: "Mid QA Engineer → Senior QA Engineer",
      // logo: ParabolLogo,
      start: "10/2020",
      end: "04/2022",
      description: "Developed and executed comprehensive test plans and test cases for RESTful APIs using Postman. Implemented Behavior Driven Development (BDD) with Cucumber to enhance collaboration between developers and stakeholders. Utilized Docker for containerization to ensure consistent test environments. Managed and queried MongoDB databases using Compass and NoSQLBooster. Leveraged Jetbrains IntelliJ IDEA for efficient code development and debugging. Tracked and managed defects using Jira and Zephyr Scale (TM4J). Worked extensively in a Linux environment to perform various testing and development tasks. Integrated RabbitMQ for messaging and communication between services.",
    },
    {
      company: "Stefanini",
      link: "https://www.stefanini.com",
      badges: ["Full-time"],
      title: "Junior QA Engineer",
      // logo: ClevertechLogo,
      start: "05/2019",
      end: "09/2020",
      description: "Developed and maintained automated test scripts for APIs using HTTParty and HTTPie. Conducted mobile testing with Appium and web testing with Capybara and Selenium. Implemented Behavior Driven Development (BDD) using Cucumber to improve collaboration between developers and stakeholders. Utilized Docker for containerization to ensure consistent test environments. Configured and managed continuous integration pipelines with Jenkins. Worked with Laravel for backend development and NodeJS (including Babel, Forever, and Mongoose) for server-side scripting. Created and executed test cases using Mocha, along with generating detailed reports using Mochawesome, Chai, and ChaiHTTP. Managed and queried MongoDB databases using MongoKu and Robo 3T. Utilized Postman for API testing and RabbitMQ for messaging and communication between services. Developed and executed test cases using Rspec and Ruby.",
    },
    {
      company: "Qualinfo",
      link: "https://www.qualinfo.com.br",
      badges: ["Full-time"],
      title: "Intern Test Analyst → Junior QA Engineer",
      // logo: JojoMobileLogo,
      start: "09/2017",
      end: "04/2019",
      description: "Developed and maintained automated test scripts using Selenium WebDriver for web applications. Utilized Java and PHP for backend development and scripting. Managed and queried databases including PostgreSQL, MySQL, SQL Server, and Oracle SQL. Generated detailed reports using Crystal Reports. Worked with hypervisors to create and manage virtual test environments. Leveraged Eclipse and DBeaver for development and database management. Tracked and managed project tasks and defects using Redmine. Developed web applications using the Laravel Framework.",
    },
    {
      company: "Qualinfo",
      link: "https://www.qualinfo.com.br",
      badges: ["Internship"],
      title: "Intern Test Analyst",
      // logo: JojoMobileLogo,
      start: "06/2016",
      end: "08/2017",
      description: "Assisted in the development and maintenance of automated test scripts using Behat and Cucumber for web applications. Utilized Laravel for backend development and scripting. Managed and queried databases including PostgreSQL and Oracle SQL. Contributed to software quality assurance processes by executing test cases, reporting defects, and verifying fixes. Collaborated with cross-functional teams to ensure the delivery of high-quality software products."
    },
    {
      company: "Qualinfo",
      link: "https://www.qualinfo.com.br",
      badges: ["Internship"],
      title: "Support Analyst",
      // logo: JojoMobileLogo,
      start: "09/2015",
      end: "05/2016",
      description: "Assisted in managing and querying databases including MySQL and SQL Server. Developed and maintained reports using Crystal Reports. Contributed to the implementation and verification of business rules for the educational network.",      
    },
    {
      company: "SolutionInc",
      link: "https://www.solutioninc.com",
      badges: ["Co-op Program"],
      title: "Test Analyst",
      // logo: NSNLogo,
      start: "05/2014",
      end: "09/2014",
      description: "Utilized Red Hat Linux for server management, including SSH access and structured cabling. Created and maintained detailed test cases and documentation to ensure software quality. Managed both front-end and back-end interfaces of the software, ensuring seamless integration and functionality.",
    },
  ],
  skills: [
    "Cypress",
    "Docker",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Postman",
    "API REST",
    "GIT"
  ],
  volunteerings: [
    {
      event: "Kotlin Trail",
      organization: "The Developers Conference",
      description: "I was responsible for organizing the Kotlin trail event held at Anhembi Morumbi University.",
      local: "São Paulo, SP - Brazil",
      date: "07/2018",
    },
  ],
  projects: [
    // {
    //   title: "Mission Accomplished",
    //   techStack: [
    //     "CI&T",
    //     "2021"
    //   ],
    //   description:
    //     "Our Squad team's unwavering dedication to surpassing global company expectations has been recognized with this esteemed award.",
    //   // logo: ParabolLogo,
    //   // link: {
    //   //   label: "github.com",
    //   //   href: "https://parabol.co/",
    //   // },
    // },
    {
      title: "Team Highlight",
      techStack: [
        "CI&T",
        "2021"
      ],
      description:
        "In recognition of our unwavering commitment to exceeding global client expectations, our Squad team was honored with this prestigious award.",
      // logo: ParabolLogo,
      // link: {
      //   label: "github.com",
      //   href: "https://parabol.co/",
      // },
    },
    {
      title: "MV Challenge",
      techStack: [
        "MV Sistemas",
        "2018"
      ],
      description:
        "In a challenge involving 30 candidates divided into 10 teams of 3, my team emerged victorious. Our solution utilized Blockchain technology to securely decentralize data within the company's health system.",
      // logo: ParabolLogo,
      // link: {
      //   label: "github.com",
      //   href: "https://parabol.co/",
      // },
    },
    {
      title: "Google Apps for Education",
      techStack: [
        "Qualinfo",
        "2016"
      ],
      description:
        "Through my contributions, Qualinfo became the inaugural Brazilian organization to secure a partnership with Google Apps for Education.",
      // logo: ParabolLogo,
      // link: {
      //   label: "github.com",
      //   href: "https://parabol.co/",
      // },
    },
  ],
} as const;
