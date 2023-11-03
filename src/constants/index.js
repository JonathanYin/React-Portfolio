import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  caida,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  stellantis,
  bpt,
  northrop,
  cookies,
  uberclone,
  jobtracker,
  profile,
  anime,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend",
    icon: web,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Mobile",
    icon: mobile,
  },
  {
    title: "Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const girl = anime;

const resumeDescription = [
  {
    description:
      "Check out my resume for my full work experience and education!",
    name: "Jonathan Yin",
    designation: "Software Engineer",
    image: profile,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Berkeley Pharma Tech",
    icon: bpt,
    iconBg: "#E6DEDD",
    date: "June 2021 - August 2021",
    points: [
      "Built and published an Android game to the Google Play Store using Unity and C# scripts",
      "Designed sprite animations and UI functionality using Unity animation controllers",
      "Utilized Azure PlayFab to implement leaderboards and player login system, monitoring player data and game analytics",
      "Worked with Photon Engine to implement multiplayer functionality, including real-time synchronization of player movement",
    ],
  },
  {
    title: "ICT Intern",
    company_name: "Stellantis",
    icon: stellantis,
    iconBg: "#5dabcf",
    date: "May 2022 - August 2022",
    points: [
      "Created a UE5 prototype to capture and display high-resolution screenshots of vehicle models imported from Autodesk Maya",
      "Developed an interface using editor utility widgets in Unreal Motion Graphics for user input and camera controls",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Northrop Grumman",
    icon: northrop,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Authored Python scripts to automate over 50 API calls for map software system GUIs, enhancing system efficiency and reducing manual overhead",
      "Developed and implemented a suite of testing solutions for application GUIs using Robot Framework and Python",
      "Leveraged Robot Framework's libdoc tool to automate documentation for five application codebases",
      // "Developed a React web application for employees to view and manage their schedules",
      // "Leveraged Redux Toolkit to manage application state and Redux Thunk to implement asynchronous actions",
      // "Implemented a calendar component using React Big Calendar to display employee schedules",
      // "Built a REST API using Node.js and Express to retrieve and update employee schedules",
    ],
  },
  {
    title: "Frontend Developer Intern Intern",
    company_name: "Center for Applied Internet Data Analysis",
    icon: caida,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Refactored over 2000+ lines of React code for Meteor.js data monitoring application, integrating multiple UI libraries for enhanced readability and maintainability",
      "Led the migration and integration of legacy testing API into React codebase, amplifying network analytics capabilities",
      "Discovered and documented 10+ bugs via manual testing, improving application reliability and performance",
      "Managed and optimized AWS EC2 instances for simulation application, improving performance by 15%",
      // "Developed a React web application for employees to view and manage their schedules",
      // "Leveraged Redux Toolkit to manage application state and Redux Thunk to implement asynchronous actions",
      // "Implemented a calendar component using React Big Calendar to display employee schedules",
      // "Built a REST API using Node.js and Express to retrieve and update employee schedules",
    ],
  },
  // {
  //     title: "Software Engineering Intern",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "September 2023 - December 2023",
  //     points: [
  //         "Developed a RESTful API using Node.js and Express to retrieve and update vehicle data",
  //         "Utilized Ruby on Rails to manage vehicle data and implement a vehicle management system",
  //         "Implementing responsive design and ensuring cross-browser compatibility",
  //         "Improved runtime performance by optimizing code and implementing caching",
  //     ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sustainable Cookies",
    description:
      "Interactive research site and geocoding app with custom map markers displaying local farms and gardens in the San Diego area",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cookies,
    source_code_link: "https://github.com/SYN100-WI23-Team-6",
  },
  {
    name: "Uber Clone",
    description:
      "Ride request app with commute visualization and dynamic pricing complete with address autocomplete, geocoding, and routing",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: uberclone,
    source_code_link: "https://github.com/JonathanYin/UberClone",
  },
  {
    name: "Job Tracker",
    description:
      "Full-stack job application tracker with functional CI/CD pipeline and local storage backend",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "github-actions",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
    ],
    image: jobtracker,
    source_code_link:
      "https://github.com/cse110-fa22-group23/cse110-fa22-group23",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  resumeDescription,
};
