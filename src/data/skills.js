import { Layout, Database, Terminal } from "lucide-react";

export const skillsData = [
    {
        category: "Frontend & Full-Stack Development",
        icon: Layout,
        skills: [
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "Hono", level: 80 },
            { name: "React Query", level: 85 },
        ]
    },
    {
        category: "Backend, Databases & Cloud",
        icon: Database,
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "AWS EC2", level: 75 },
            { name: "Amazon RDS", level: 75 },
        ]
    },
    {
        category: "Core CS, Tools & DevOps",
        icon: Terminal,
        skills: [
            { name: "Java", level: 85 },
            { name: "OOP", level: 90 },
            { name: "DBMS", level: 85 },
            { name: "Docker", level: 70 },
            { name: "Git & GitHub", level: 90 },
        ]
    }
];
