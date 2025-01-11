import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

export const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  name: "SAI MADHURI",
  introduction: "I am a [animated-text]",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autplaceat, temporibus.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const educationData = [
  {
    id: 1,
    institution: "IIITM Gwalior",
    degree: "B.Tech Computer Science",
    period: "2023 - 2027",
    current: true
  },
  {
    id: 2,
    institution: "BRS Abu Dhabi",
    degree: "High School CBSE 10+12",
    period: "2018 - 2023",
    current: false
  }
];

export const PROJECTS = [
  {
    name: "WanderLust",
    description: "An Airbnb style platform with property listings, reviews, and secure login",
    image: projects1,
    link: "https://github.com/Madhuri36/WanderLust",
  },
  {
    name: "Forever",
    description: "A fashion ecommerce website with stripe integration",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "Personal Portfolio",
    description: "Completely responsive personal portfolio website made with MERN",
    image: projects3,
    link: "https://github.com/your-github/hairrevive",
  },
  {
    name: "Amazon Clone",
    description:
      "Interactive and Responsive amazon clone made using CSS",
    image: projects4,
    link: "https://github.com/your-github/devdeck",
  },
  // {
  //   name: "FitConnect",
  //   description: "Fitness social network to connect athletes and trainers",
  //   image: projects5,
  //   link: "https://github.com/your-github/fitconnect",
  // },
  // {
  //   name: "WellNest",
  //   description: "A wellness app for mental and physical health improvement",
  //   image: projects6,
  //   link: "https://github.com/your-github/wellnest",
  // },
];


export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Paris, France",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Inc.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

