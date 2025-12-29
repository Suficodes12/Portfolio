import type { SkillCategory } from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML",
        level: "Experienced",
        icon: "fa-brands fa-html5",
        color: "text-orange-600", // HTML brand
      },
      {
        name: "CSS3",
        level: "Experienced",
        icon: "fa-brands fa-css3-alt",
        color: "text-blue-600", // CSS brand
      },
      {
        name: "JAVASCRIPT",
        level: "Experienced",
        icon: "fa-brands fa-js",
        color: "text-yellow-400", // JS brand
      },
      {
        name: "REACT.JS",
        level: "Experienced",
        icon: "fa-brands fa-react",
        color: "text-cyan-400", // React brand
      },
      {
        name: "BOOTSTRAP",
        level: "Experienced",
        icon: "fa-brands fa-bootstrap",
        color: "text-purple-600", // Bootstrap brand
      },
      {
        name: "Angular",
        level: "Beginner",
        icon: "fa-brands fa-angular",
        color: "text-red-600", // Angular brand
      },
    ],
  },
  {
    title: "UI Design & Tooling",
    skills: [
      {
        name: "TAILWIND CSS",
        level: "Advanced",
        icon: "fa-solid fa-wind",
        color: "text-sky-400", // Tailwind brand
      },
      {
        name: "TYPESCRIPT",
        level: "Experienced",
        icon: "fa-solid fa-code",
        color: "text-blue-500", // TS brand feel
      },
      {
        name: "NEXT.JS",
        level: "Experienced",
        icon: "fa-solid fa-n",
        color: "text-white", // Next.js black/white
      },
      {
        name: "MY SQL",
        level: "Intermediate",
        icon: "fa-solid fa-database",
        color: "text-blue-400", // MySQL blue
      },
      {
        name: "GIT & GITHUB",
        level: "Intermediate",
        icon: "fa-brands fa-github",
        color: "text-gray-200", // GitHub neutral
      },
      {
        name: "PHP",
        level: "Beginner",
        icon: "fa-brands fa-php",
        color: "text-indigo-500", // PHP brand
      },
    ],
  },
];
