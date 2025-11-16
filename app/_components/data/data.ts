import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageCircleIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/app/_components/Icons";
import { platform } from "os";

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "Docker",
  "Mikrotik",
  "Cisco",
  "Iot",
  "PC building",
  "Double Touch",
  "Juggling",
  "Shooting",
  "Yapping",
];

export const education = [
  {
    period: "2021 - 2024",
    degree: "Vocational High School",
    school: "SMK Ananda Bekasi",
    description: "Computer and Network Engineering",
  },
];

export const experience = [
  {
    period: "2025 Apr - Present",
    role: "Fullstack Developer",
    company: "Pansonic Gobel Life Solutions Manufacturing Indonesia",
    description:
      "Helping digitize and automate company tasks through web applications",
  },
  {
    period: "2024 Apr - 2024 Oct",
    role: "Internship",
    company: "Panasonic Gobel Life Solutions Manufacturing Indonesia",
    description: "Assisting my mentor with network setup and coding stuff",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bigetron Alpha",
    description: "Website Profile for MLBB Teams Bigetron Alpha",
    image: "/project/bigetron.png",
    tech: ["Next", "Tailwind", "Framer Motion"],
    github: "https://github.com/micelvalensia/BigetronWebsite",
  },
  {
    id: 2,
    title: "First Portofolio",
    description: "My first Portofolio Project by following Youtube",
    image: "/project/porto1.png",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/micelvalensia/portofolio",
  },
  {
    id: 3,
    title: "RestaurantOS",
    description:
      "RestaurantOS is a web-based platform designed to simplify restaurant management. Currently under development, RestaurantOS is coming soon to improve restaurant operations.",
    image: "/project/restos.png",
    tech: [
      "Next",
      "Shadcn",
      "Tailwind",
      "Express",
      "Prisma",
      "PostgreSQL",
      "etc",
    ],
    github: "https://github.com/micelvalensia/RestaurantOS",
  },
];

export const contacts = [
  {
    icon: MailIcon,
    platform: "Email",
    handle: "gamingvalorant590@gmail.com",
    link: "mailto:gamingvalorant590@gmail.com",
    description: "For everything except phishing and spam.",
  },
  {
    icon: InstagramIcon,
    platform: "Instagram",
    handle: "@mdoang2",
    link: "https://www.instagram.com/mdoang2/",
    description: "Quick response",
  },
  {
    icon: GitHubIcon,
    platform: "GitHub",
    handle: "@mdoang",
    link: "https://github.com/micelvalensia",
    description: "View my code",
  },
  {
    icon: FacebookIcon,
    platform: "FaceBook",
    handle: "Micel Doang",
    link: "https://www.facebook.com/micel.doang.92",
    description: "Not Active...",
  },
  {
    icon: YouTubeIcon,
    platform: "Youtube",
    handle: "valorantgaming5031",
    link: "https://www.youtube.com/@valorantgaming5031",
    description: "Soon start creating content (🤑)",
  },
];
