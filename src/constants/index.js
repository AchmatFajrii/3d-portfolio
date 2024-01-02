import {
  meta,
  shopify,
  starbucks,
  tesla,
  rsud,
  konekseed,
  arkatama,
} from "../assets/images";
import {
  car,
  contact,
  game,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  emoji,
  shopping,
  portfolio,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  // {
  //   imageUrl: express,
  //   name: "Express",
  //   type: "Backend",
  // },

  // {
  //   imageUrl: mongodb,
  //   name: "MongoDB",
  //   type: "Database",
  // },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Front End Developer",
    company_name: "RSUD Dr. R. Soedarsono",
    icon: rsud,
    iconBg: "#EEC759",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Develop and maintain electronic medical record web applications using React.js and related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Optimizing web applications for maximum speed and scalability, especially in the context of medical records that require fast and efficient access",
      "Develop technical solutions to unique challenges in the context of medical records, such as integration with medical devices or other systems in the hospital",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Konekseed",
    icon: konekseed,
    iconBg: "#A7D397",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Develop and implement user-facing features and web applications.",
      "Collaborate with designers to translate UI/UX wireframes into functional code.",
      "Collaborate with back-end developers and integrate front-end components with server-side logic.",
      "Optimize web applications for maximum speed and scalability.",
    ],
  },
  {
    title: "Programmer",
    company_name: "Arkatama",
    icon: arkatama,
    iconBg: "#FFA559",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Actively participated in the development team to design, implement, and test new features.",
      "Handled maintenance and routine updates to ensure the security and stability of the application.",
      "Collaborated with 5 fellow interns to develop websites for digital marketing and fullstack developer training.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: portfolio,
    theme: "btn-back-red",
    name: "Personal Web V4",
    description:
      "My personal website has now reached version 4 with updated design, technology, and information about myself. Enjoy!",
    link: "https://fajri-site-v4.vercel.app/",
  },
  {
    iconUrl: emoji,
    theme: "btn-back-green",
    name: "Emoji Searcher",
    description:
      "Developed an innovative emoji search website, integrated with an advanced API, allowing users to effortlessly find any emoji.",
    link: "",
  },
  {
    iconUrl: game,
    theme: "btn-back-blue",
    name: "Vouchify App",
    description:
      "Vouchify is an e-commerce platform specializing in the sale of digital game vouchers.",
    link: "https://achmatfajrii.github.io/VouchifyApp/",
  },
  {
    iconUrl: shopping,
    theme: "btn-back-pink",
    name: "Shopping List",
    description:
      "Created a practical shopping list application designed to conveniently track and organize users' purchase needs.",
    link: "https://shopping-list-bix6.vercel.app/",
  },
];
