import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import VisuaLyze from "../assets/projects/VisuaLyze.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "July, 2025 - August, 2025",
        role: "DevOps Engineer",
        company: "Ingenious-Tech World",
        description: `Implemented CI/CD pipelines using GitHub Actions and Docker. Monitored cloud infrastructure and automated deployment processes for Node.js and React apps. Collaborated with developers to streamline delivery cycles and reduce deployment errors.`,
        technologies: ["Docker", "GitHub Actions", "AWS", "Kubernetes"],
    },
    {
        year: "May, 2025 - July, 2025",
        role: "Full Stack Developer",
        company: "Zidio Development",
        description: `Built full-stack web applications using React.js, Next.js, and Node.js. Integrated MongoDB for database management and designed reusable components. Worked in agile sprints and contributed to feature planning and deployment.`,
        technologies: ["React.js", "Express.js", "MongoDB", "Three.js"],
    },
    {
        year: "2022 - 2023",
        role: "MERN Stack Developer",
        company: "CodeBeats",
        description: `Developed dynamic web interfaces using React and Next.js. Collaborated with backend engineers to connect frontend components with Node.js APIs. Ensured responsive design, optimized performance, and enhanced user experience.`,
        technologies: ["HTML", "CSS", "React.js", "Next.js", "MongoDB"],
    },
    {
        year: "2021 - 2022",
        role: "Cloud Practitioner",
        company: "Ingenious-Tech World",
        description: `Assisted in managing cloud-based services and deploying applications using AWS. Gained hands-on experience with modern JS frameworks and cloud databases. Focused on scalability, security, and performance monitoring.`,
        technologies: ["AWS", "VPN", "Load Balancers", "s3 Buckets"],
    },
];

export const PROJECTS = [
    {
        title: "Rent Management System",
        image: project1,
        description:
            "A full-stack web application to manage rental properties, tenants, and rent payments. Features include tenant onboarding, rent tracking, flat status updates, and owner dashboard.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
        // link: "https://excel-analytics-demo.vercel.app",
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
        image: project1,
        description:
            "A functional e-commerce site with product listing, shopping cart, checkout, and user authentication. Designed with responsive layout and basic state management.",
        technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Node.js"],
        // link: "https://ecommerce-website-demo.vercel.app",
    },
];

export const CONTACT = {
    address: "Dahaliabag, Cuttack, Odisha, India",
    phoneNo: "+91 84580 05099 ",
    email: "tanishtech14@gmail.com",
};
