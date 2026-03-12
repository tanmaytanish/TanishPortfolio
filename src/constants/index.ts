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
  threejs,
  project1,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  docMate,
  devops,
  invogen,
  VisuaLyze,
  charles,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Experience",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

export const HERO_CONTENT = `I build scalable web apps using the MERN stack and Next.js, and automate deployments with robust CI/CD pipelines on AWS and Docker.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
] as const;

// Experiences
export const EXPERIENCES = [
  {
    year: "June, 2025 - July, 2025",
    role: "DevOps Engineer",
    company: "Ingenious-Tech World",
    description: `Implemented CI/CD pipelines using GitHub Actions and Docker. Monitored cloud infrastructure and automated deployment processes for Node.js and React apps. Collaborated with developers to streamline delivery cycles and reduce deployment errors.`,
    technologies: [
      "DevSecOps",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "AWS",
      "Terraform",
    ],
    icon: backend, // Using fallback icon
    iconBg: "#383E56",
  },
  {
    year: "June, 2024 - July, 2024",
    role: "MERN Stack Developer",
    company: "CodeBeat Placement",
    description: `Developed dynamic web interfaces using React and Next.js. Collaborated with backend engineers to connect frontend components with Node.js APIs. Ensured responsive design, optimized performance, and enhanced user experience.`,
    technologies: ["HTML", "CSS", "React.js", "Next.js", "MongoDB"],
    icon: reactjs, // Using fallback icon
    iconBg: "#E6DEDD",
  },
  {
    year: "July, 2023 - August, 2023",
    role: "Cloud Practitioner",
    company: "Ingenious-Tech World",
    description: `Assisted in managing cloud-based services and deploying applications using AWS. Gained hands-on experience with modern JS frameworks and cloud databases. Focused on scalability, security, and performance monitoring.`,
    technologies: ["AWS", "VPN", "Load Balancers", "s3 Buckets"],
    icon: mobile, // Using fallback icon
    iconBg: "#383E56",
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tanish proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tanish does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Tanish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    title: "AI-Powered Invoice Generator",
    image: invogen,
    description:
      "InvoGen - An AI-powered full-stack invoice generation platform built with the MERN stack and Google Gemini AI. Features include AI-driven invoice creation from text/emails, financial analytics dashboard, smart AI payment reminders, invoice management, and PDF export.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Google Gemini AI",
    ],
    link: "https://invogen-frontend.onrender.com/",
  },
  {
    title: "Secure AWS CI/CD Pipeline",
    image: devops,
    description:
      "Built a secure CI/CD pipeline using Terraform to provision AWS EKS infrastructure, integrated with GitHub Actions for automated deployments. Implemented security scanning (tfsec, Trivy, kube-bench) and encrypted secrets management.",
    technologies: [
      "Terraform",
      "AWS CodePipeline",
      "EKS",
      "GitHub Actions",
      "tfsec",
      "Trivy",
    ],
    link: "#",
  },
  {
    title: "Doctor Appointment Booking",
    image: docMate,
    description:
      "DocMate - A full-stack web application for managing doctor appointments with role-based access for patients, doctors, and admins. Features include appointment booking, real-time doctor availability, and admin dashboard.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://docmate-8ygo.onrender.com/",
  },
  {
    title: "Excel-Analytics Platform",
    image: VisuaLyze,
    description:
      "An analytics platform that allows users to upload Excel/CSV files, process data, and view insights. Includes file upload with Multer, data storage in MongoDB, and user-specific data retrieval.",
    technologies: ["MongoDB", "Express.js", "React.js", "Three.js", "SheetJS"],
    link: "https://excel-analytics-platform.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    image: charles,
    description:
      "A fully responsive MERN stack e-commerce website inspired by Charles Tyrwhitt, featuring user authentication, product management, cart, checkout, and admin dashboard.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Node.js"],
    link: "https://charles-tyrwhitt-clone.vercel.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/tanish-tanmay-sahoo/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/tanish",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/tanmaytanish",
  },
] as const;

export const CONTACT = {
  address: "Dahaliabag, Cuttack, Odisha, India",
  phoneNo: "+91 84580 05099 ",
  email: "tanishtech14@gmail.com",
};
