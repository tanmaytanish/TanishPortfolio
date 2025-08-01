import project1 from "../assets/projects/project-1.webp";
import docMate from "../assets/projects/docmate-home.png";
import devops from "../assets/projects/devops.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import VisuaLyze from "../assets/projects/VisuaLyze.png";
import charles from "../assets/projects/CharlesTyrwhitt.png";


export const HERO_CONTENT = `I architect and deploy complete web solutions using the MERN stack (MongoDB, Express, React, Node.js), Next.js for production-grade applications, and DevOps tools for seamless deployments. Specialize in building performant systems from database design to UI implementation, automated with CI/CD pipelines and cloud infrastructure (AWS, Docker).`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "June, 2025 - July, 2025",
        role: "DevOps Engineer",
        company: "Ingenious-Tech World",
        description: `Implemented CI/CD pipelines using GitHub Actions and Docker. Monitored cloud infrastructure and automated deployment processes for Node.js and React apps. Collaborated with developers to streamline delivery cycles and reduce deployment errors.`,
        technologies: ["DevSecOps","Kubernetes","Docker", "GitHub Actions", "AWS", "Terraform",],
    },
    {
        year: "June, 2024 - July, 2024",
        role: "MERN Stack Developer",
        company: "CodeBeat Placement",
        description: `Developed dynamic web interfaces using React and Next.js. Collaborated with backend engineers to connect frontend components with Node.js APIs. Ensured responsive design, optimized performance, and enhanced user experience.`,
        technologies: ["HTML", "CSS", "React.js", "Next.js", "MongoDB"],
    },
    {
        year: "July, 2023 - August, 2023",
        role: "Cloud Practitioner",
        company: "Ingenious-Tech World",
        description: `Assisted in managing cloud-based services and deploying applications using AWS. Gained hands-on experience with modern JS frameworks and cloud databases. Focused on scalability, security, and performance monitoring.`,
        technologies: ["AWS", "VPN", "Load Balancers", "s3 Buckets"],
    },
];

export const PROJECTS = [
    {
        title: "Secure AWS CI/CD Pipeline with Terraform & DevSecOps Integration",
        image: devops,
        description:
            "Built a secure CI/CD pipeline using Terraform to provision AWS EKS infrastructure, integrated with GitHub Actions for automated deployments. Implemented security scanning (tfsec, Trivy, kube-bench) and encrypted secrets management (Sealed Secrets) to enforce compliance throughout the deployment process.",
        technologies: ["Terraform", "AWS CodePipeline", "EKS", "GitHub Actions", "tfsec","Trivy", "kube-bench"],
        // link: "https://excel-analytics-platform.vercel.app/",
    },{
        title: "Doctor Appointment Booking System",
        image: docMate,
        description:
            "A full-stack web application for managing doctor appointments with role-based access for patients, doctors, and admins. Features include appointment booking, real-time doctor availability, profile management, and admin dashboard.",
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
];

export const CONTACT = {
    address: "Dahaliabag, Cuttack, Odisha, India",
    phoneNo: "+91 84580 05099 ",
    email: "tanishtech14@gmail.com",
};
