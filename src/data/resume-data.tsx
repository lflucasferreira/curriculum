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
    "Senior QA Engineer specializing in Web, Mobile, and API Test Automation",
  
  tldr: "Senior QA Engineer with 10+ years of experience in web, mobile, and API test automation (Cypress, Appium, Postman), with strong expertise in the financial services sector. Previous work experience in Canada (Halifax) through Dalhousie University's Co-op Program. Currently at Questrade Brazil, ensuring quality on mission-critical fintech projects like OAA and KYC, delivering compliance, security, and regulatory standards. Early adopter of AI-powered tools and pursuing post-graduate studies in DevOps and Agile Testing. Seeking to relocate and contribute to Questrade's Toronto office.",
    
  summary: [
    "Senior QA Engineer with 10+ years of experience ensuring software quality through advanced automation and rigorous testing strategies, with deep expertise in the financial services and fintech sector. Previous international work experience in Canada through Dalhousie University's Co-op Program, where I collaborated with Canadian development teams and gained valuable cross-cultural professional experience.",
    "Currently part of Questrade's Brazil team, where I contributed to mission-critical financial projects such as Open Application Account (OAA) and KYC Annual Review + Customer Profile page, ensuring compliance with regulatory standards, data security, and exceptional user experience in high-stakes environments.",
    "Recognized for integrity and reliability, I consistently take ownership of deliverables and exceed expectations. Known for innovative thinking and technical excellence, I design automation solutions that simplify QA processes and uncover edge scenarios others miss.",
    "Early adopter of AI-powered tools such as GitHub Copilot, Gemini, and Cursor to enhance test case design and accelerate automation development. Currently pursuing post-graduate studies in DevOps and Agile Testing at CESAR School to further strengthen expertise in modern QA practices.",
    "My goal is to return to Canada and bring this expertise in financial software quality to Questrade's Toronto office, driving next-generation QA practices and continuous improvement.",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/lflucasferreira",
  personalWebsiteUrl: "",
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
      school: "CESAR School",
      degree: "Post-Graduate in DevOps",
      start: "08/2024",
      end: "In Progress",
    },
    {
      school: "CESAR School",
      degree: "Post-Graduate in Agile Testing",
      start: "08/2024",
      end: "In Progress",
    },
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
      name: "Scrum Foundation Professional Certificate",
      issuer: "CertiProf",
      credentialId: "CLVPFPQNPN-SSSSLKJH-XHRTXHXTYH",
      issued: "",
      status: "Valid",
    },
    {
      name: "DevOps Essentials Professional Certificate",
      issuer: "CertiProf",
      credentialId: "42649903",
      issued: "",
      status: "Expired (July 2022)",
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
      description: "Developed and maintained automated test scripts using Cypress for end-to-end, integration, and component testing of web applications. " +
        "Executed mobile testing for Android and iOS applications using Appium, ensuring consistent user experience across platforms. " +
        "Designed and executed comprehensive test plans covering system, regression, and acceptance testing to ensure thorough coverage. " +
        "Leveraged AI tools (GitHub Copilot, Gemini, Cursor) to accelerate test case creation and automation development, improving productivity and code quality. " +
        "Implemented CI/CD pipelines on GCP to automate testing processes and ensure rapid feedback on code changes. " +
        "Developed and maintained automated API test suites using Postman, validating microservices communication, backend functionality, and data integrity. " +
        "Conducted performance testing using k6 to ensure application stability under load. " +
        "Collaborated effectively with offshore development and QA teams across multiple time zones, ensuring efficient knowledge sharing. " +
        "Managed and queried databases including MongoDB and SQL Server to support testing activities. " +
        "Monitored application performance using Datadog to identify and address issues proactively. " +
        "Tracked and managed defects using Jira and Zephyr Scale, ensuring timely resolution and continuous improvement.",
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
      title: "Support Analyst → Intern Test Analyst → Junior QA Engineer",
      // logo: JojoMobileLogo,
      start: "09/2015",
      end: "04/2019",
      description: "Progressed through three roles over 3.5 years, demonstrating consistent growth and increasing responsibilities. " +
        "Started as Support Analyst managing databases (MySQL, SQL Server) and creating reports with Crystal Reports. " +
        "Transitioned to Test Analyst, developing automated test scripts using Behat, Cucumber, and Selenium WebDriver. " +
        "Promoted to Junior QA Engineer, leading test automation initiatives with Java and PHP. " +
        "Managed databases including PostgreSQL, MySQL, SQL Server, and Oracle SQL. " +
        "Tracked defects using Redmine and collaborated with cross-functional teams to deliver high-quality software.",
    },
    {
      company: "SolutionInc",
      link: "https://www.solutioninc.com",
      badges: ["Co-op Program", "Halifax, Canada"],
      title: "Test Analyst",
      // logo: NSNLogo,
      start: "05/2014",
      end: "09/2014",
      description: "International work experience in Canada through Dalhousie University's Co-op Program. " +
        "Utilized Red Hat Linux for server management, including SSH access and structured cabling. " +
        "Created and maintained detailed test cases and documentation to ensure software quality. " +
        "Managed both front-end and back-end interfaces of the software, ensuring seamless integration and functionality. " +
        "Collaborated with Canadian development teams, gaining valuable cross-cultural professional experience.",
    },
  ],
  languages: [
    { language: "Portuguese", level: "Native" },
    { language: "English", level: "Advanced" },
    { language: "French", level: "Beginner" },
  ],
  skillCategories: [
    {
      category: "Testing Types",
      items: ["Integration Testing", "System Testing", "Regression Testing", "Acceptance Testing", "API Automation", "E2E Testing", "Mobile Testing"],
    },
    {
      category: "Automation & Tools",
      items: ["Cypress", "Appium", "Selenium", "Postman", "k6", "BDD/Cucumber", "Zephyr Scale"],
    },
    {
      category: "Mobile Platforms",
      items: ["Android", "iOS"],
    },
    {
      category: "AI-Assisted Development",
      items: ["GitHub Copilot", "Gemini", "Cursor AI"],
    },
    {
      category: "Cloud & DevOps",
      items: ["GCP", "Docker", "CI/CD Pipelines", "Git", "Datadog"],
    },
    {
      category: "Programming",
      items: ["JavaScript", "TypeScript", "SQL", "NoSQL"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "SQL Server", "PostgreSQL"],
    },
    {
      category: "Methodologies",
      items: ["Agile", "Scrum", "SDLC", "Test Planning"],
    },
  ],
  coreStrengths: [
    {
      title: "Integrity & Ownership",
      description: "Trusted team member who consistently delivers on commitments and takes full responsibility for outcomes.",
    },
    {
      title: "Technical Excellence",
      description: "Strong ability to identify edge scenarios and intermittent issues, ensuring robust and reliable solutions.",
    },
    {
      title: "Innovation in QA",
      description: "Creative thinker who designs automation strategies that simplify processes and improve efficiency.",
    },
    {
      title: "Customer-Centric Mindset",
      description: "Advocates for quality with a focus on user experience, ensuring solutions meet client expectations.",
    },
    {
      title: "Collaboration & Leadership",
      description: "Positive, proactive, and team-oriented, with experience coordinating effectively with offshore teams across multiple time zones.",
    },
  ],
  achievements: [
    "Reduced regression testing time by 60% through implementation of automated Cypress test suites.",
    "Increased test coverage from 45% to 85% on critical financial applications at Questrade.",
    "Accelerated test case creation and automation development by 30% using AI-assisted tools (Copilot, Gemini, Cursor).",
    "Identified and documented 200+ edge-case scenarios, preventing potential production issues.",
    "Streamlined CI/CD pipeline execution on GCP, reducing deployment feedback time by 40%.",
    "Implemented performance testing with k6, ensuring system stability under high-load conditions.",
    "Facilitated effective communication between local and offshore QA/Dev teams across 3 time zones.",
    "Contributed to zero critical defects in production for OAA and KYC projects over 12 months.",
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
