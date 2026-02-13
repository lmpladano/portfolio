export type PortfolioContent = {
  site: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    links: Array<{ label: string; url: string }>;
  };
  about: {
    photo: string;
    shortBio: string;
  };
  projects: Array<{
    title: string;
    description: string;
    image: string;
    tech: string[];
    highlights: string[];
    liveUrl: string;
    repoUrl: string;
  }>;
  experience: Array<{
    company: string;
    logo: string;
    role: string;
    employmentType: string;
    dateRange: string;
    duration: string;
    location: string;
    workMode: string;
    description: string;
  }>;
  hobbies: Array<{
    title: string;
    description: string;
    image: string;
  }>;
};

export const content: PortfolioContent = {
  site: {
    name: "Luis Pladano",
    role: "Full-stack Developer",
    tagline: "I build clean, fast web apps with great UX.",
    location: "Texas, USA",
    links: [
      { label: "GitHub", url: "https://github.com/lmpladano" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/luis-pladano" },
      { label: "Email", url: "mailto:you@email.com" }
    ]
  },
  about: {
    photo: "/images/me.jpg",
    shortBio:
      "I am a Full-stack Developer with hands-on experience building scalable, production-ready web applications using React, Node.js, JavaScript, Express, and PostgreSQL. At WrightIMC, I delivered custom WordPress and headless WordPress + React solutions end to end, including architecture, development, deployment, API integrations, and performance optimization. I combine strong technical execution with client-facing communication and project ownership to ship clean, maintainable software that solves real business problems."
  },
  projects: [
    {
      title: "Project One",
      description: "1–2 sentences: what it is + who it’s for + why it matters.",
      image: "/images/project-one.jpg",
      tech: ["React", "TypeScript", "Node"],
      highlights: ["Fast search", "Auth", "Responsive UI"],
      liveUrl: "https://your-live-link.com",
      repoUrl: "https://github.com/you/repo"
    },
    {
      title: "Project Two",
      description: "1–2 sentences: the problem + your solution.",
      image: "/images/project-two.jpg",
      tech: ["Next.js", "Postgres", "Tailwind"],
      highlights: ["Payments", "Dashboard", "Caching"],
      liveUrl: "https://your-live-link.com",
      repoUrl: "https://github.com/you/repo"
    }
  ],
  experience: [
    {
      company: "WrightIMC",
      logo: "/images/wrightimc-logo.jpg",
      role: "Software Developer",
      employmentType: "Full-time",
      dateRange: "Sep 2020 - Mar 2025",
      duration: "4 yrs 7 mos",
      location: "Dallas, Texas, United States",
      workMode: "Remote",
      description:
        "At WrightIMC, I led the design and development of custom WordPress solutions, ranging from traditional theme-based builds to headless WordPress architectures using React. I owned projects end to end, handling technical planning, development, and deployment while working directly with clients to translate complex business requirements into scalable, high-performance web applications. My work included custom theme and plugin development, API integrations, performance optimization, and tailored solutions for unique technical needs, balancing clean architecture with real-world usability and maintainability."
    }
  ],
  hobbies: [
    {
      title: "Guitar",
      description: "A line or two about what you’re into (gear, styles, goals).",
      image: "/images/guitar.jpg"
    },
    {
      title: "Legacy iOS Development",
      description: "I enjoy revisiting classic iOS patterns, refining UIKit fundamentals, and modernizing older app ideas with cleaner architecture.",
      image: "/images/legacy-ios.jpg"
    }
  ]
};
