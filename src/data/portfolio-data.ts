export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  learningOutcomes: string[];
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl: string;
  isPlaceholderUrl: boolean;
  status: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    focus: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Md Jisan Hossain",
  nickname: "Jisan",
  role: "Aspiring Full-Stack Developer",
  status: "Fresher / Self-learning Developer",
  location: "Bangladesh",
  timezone: "GMT+6",
  availability: "Open to Internships & Junior Opportunities",
  tagline: "Md Jisan Hossain: Fresher Full-Stack Developer.",
  introduction:
    "I build clean, responsive web apps with Next.js, TypeScript and Tailwind CSS. I am now learning backend development with Node.js, Express and MongoDB.",
  aboutStory: [
    "I am a self-taught web developer from Bangladesh. I started with HTML, CSS and JavaScript, then moved to React, Next.js and TypeScript to build responsive, clean user interfaces.",
    "As I built frontend projects, I got curious about how data flows behind the screen. I am now learning Node.js, Express and MongoDB, and I have used Better Auth for login and registration in my projects.",
  ],
  careerGoals: [
    {
      title: "Become a Professional Full-Stack Developer",
      detail: "Grow across frontend, server-side APIs and databases.",
    },
    {
      title: "Join a Collaborative Engineering Team",
      detail: "Learn from experienced engineers through code reviews and real workflows.",
    },
    {
      title: "Build Useful Applications",
      detail: "Solve real problems with clean, maintainable code.",
    },
  ],
 
    contacts: {
    email: "mdjisan400000@gmail.com",
    emailPlaceholderNote: "",
    github: "https://github.com/jisan-hossain",
    githubDisplay: "github.com/jisan-hossain",
    linkedin: "https://www.linkedin.com/in/jisanhossain01",
    linkedinDisplay: "linkedin.com/in/jisanhossain01",
    isPlaceholder: false,
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Creating responsive, accessible, and fast client-side applications.",
    skills: [
      { name: "HTML5", level: "Semantic Markup", icon: "file-code", focus: "Accessible structure & modern SEO standards" },
      { name: "CSS3", level: "Styling & Layout", icon: "palette", focus: "Flexbox, Grid, keyframe animations & responsive queries" },
      { name: "JavaScript", level: "Modern ES6+", icon: "braces", focus: "Async/await, DOM manipulation, closures & modular code" },
      { name: "TypeScript", level: "Type Safety", icon: "shield-check", focus: "Interfaces, generics, type guards & strict type checking" },
      { name: "React", level: "Component Architecture", icon: "atom", focus: "Hooks, state management, component lifecycle & reusable UI" },
      { name: "Next.js", level: "App Router & SSR", icon: "layout", focus: "Server Components, client boundaries & optimized routing" },
      { name: "Tailwind CSS", level: "Utility-First CSS", icon: "wind", focus: "Responsive design, modern typography & design token systems" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Currently learning server logic, REST endpoints and database models.",
    skills: [
      { name: "Node.js", level: "Currently learning", icon: "server", focus: "Asynchronous runtime, event loop & npm ecosystem" },
      { name: "Express.js", level: "Currently learning", icon: "network", focus: "Middleware, routing & request/response handling" },
      { name: "MongoDB", level: "Used in Bazar Dor", icon: "database", focus: "Storing user data and document modeling" },
      { name: "REST APIs", level: "Currently learning", icon: "layers", focus: "HTTP methods, status codes & JSON" },
      { name: "Better Auth", level: "Used in Bazar Dor", icon: "key", focus: "Login and registration with user data in MongoDB" },
    ],
  },
  {
    title: "Tools & Development Workflow",
    description: "Version control and development environments for disciplined workflows.",
    skills: [
      { name: "Git", level: "Version Control", icon: "git-branch", focus: "Branching, staging, committing & history tracking" },
      { name: "GitHub", level: "Collaboration", icon: "github", focus: "Repository management, issues & open-source exploration" },
      { name: "VS Code", level: "Primary Editor", icon: "terminal", focus: "Debugging, extensions, linting & keyboard-driven workflow" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bazar-dor",
    number: "01",
    title: "Bazar Dor",
    tagline: "Daily Grocery Price Tracker in Bangla",
    description:
      "A Bangla web app that shows daily grocery prices at a glance, covering rice, lentils, oil, vegetables, fish, meat, dairy and spices.",
    longDescription:
      "Bazar Dor lists 33 products across 8 categories with price per unit and percentage change. It has daily sections for prices that went up or dropped, a scrolling price ticker, category-wise browsing and individual product pages. Users can register and log in with Better Auth, and user data is stored in MongoDB.",
    technologies: ["Next.js", "Better Auth", "MongoDB", "Vercel"],
    features: [
      "User authentication (login and register) with Better Auth",
      "33 products with price per unit and percentage change (up or down)",
      "Daily 'prices went up' and 'prices dropped' sections, plus a scrolling price ticker",
      "Category-wise browsing and individual product detail pages",
    ],
    learningOutcomes: [
      "Implemented user authentication with Better Auth and stored user data in MongoDB",
      "Deployed a full-stack Next.js app on Vercel",
    ],
    metrics: [
      { label: "Products", value: "33" },
      { label: "Categories", value: "8" },
      { label: "Auth", value: "Better Auth" },
    ],
    githubUrl: "https://github.com/jisan-hossain/bazar-dur-advance",
    liveUrl: "https://bazar-dur-advance.vercel.app",
    isPlaceholderUrl: false,
    status: "Live on Vercel",
  },
  {
    id: "fitlog",
    number: "02",
    title: "FitLog",
    tagline: "Dark-themed Gym Companion Web App",
    description:
      "A dark-themed gym companion app to browse lifts, build today's plan, save workouts and track exercises, minutes and calories.",
    longDescription:
      "FitLog is a dark, no-nonsense gym companion with a library of 12 lifts covering every major muscle group. Each workout shows its muscle groups, equipment, duration, calories and rating. Users can add lifts to today's plan and save workouts, with live counters in the navbar. It is built with the Next.js App Router, TypeScript and Tailwind CSS, with DaisyUI for components, React Context API for shared state and React Toastify for notifications.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "React Context API", "React Toastify"],
    features: [
      "Workout library of 12 lifts with muscle-group tags, equipment, duration, calories and rating",
      "Build today's plan and save workouts, with live Plan and Saved counters",
      "Track exercises, minutes and calories",
      "Dark-themed, responsive interface",
    ],
    learningOutcomes: [
      "Built a multi-page app with the Next.js App Router and TypeScript",
      "Managed shared state (plan and saved workouts) across components with React Context API",
    ],
    metrics: [
      { label: "Workouts", value: "12" },
      { label: "Theme", value: "Dark" },
      { label: "Deployed", value: "Vercel" },
    ],
    githubUrl: "https://github.com/jisan-hossain/My-next-js-Projects",
    liveUrl: "https://fitlog-app-pi.vercel.app",
    isPlaceholderUrl: false,
    status: "Live on Vercel",
  },
];