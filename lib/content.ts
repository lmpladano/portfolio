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
  agencyWork: Array<{
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
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/luis-pladano-9517ba1a1",
      },
      { label: "Email", url: "mailto:you@email.com" },
    ],
  },
  about: {
    photo: "/images/me.png",
    shortBio:
      "I am a Full-stack Developer with hands-on experience building scalable, production-ready web applications using React, Node.js, JavaScript, Express, and PostgreSQL. At WrightIMC, I delivered custom WordPress and headless WordPress + React solutions end to end, including architecture, development, deployment, API integrations, and performance optimization. I combine strong technical execution with client-facing communication and project ownership to ship clean, maintainable software that solves real business problems.",
  },
  projects: [
    {
      title: "CodeChimp",
      description:
        "Typing exercises for developers to build coding speed and accuracy under realistic timed practice.",
      image: "/images/project-one.png",
      tech: ["React", "TypeScript", "Node"],
      highlights: ["Fast search", "Auth", "Responsive UI"],
      liveUrl: "https://codechimp-lmpladano.netlify.app/",
      repoUrl: "https://github.com/you/repo",
    },
    {
      title: "Tetris 99ish",
      description:
        "A hyper-casual browser puzzle game with auth, leaderboard, chat, multiplayer row attacks, and smooth play on desktop and mobile.",
      image: "/images/project-two.png",
      tech: [
        "JavaScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Materialize CSS",
        "Heroku",
      ],
      highlights: [
        "Auth + guest mode",
        "Realtime chat + multiplayer",
        "Top-10 leaderboard + persisted scores",
      ],
      liveUrl: "https://powerful-ravine-73143.herokuapp.com/",
      repoUrl: "https://github.com/you/repo",
    },
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
        "At WrightIMC, I led the design and development of custom WordPress solutions, ranging from traditional theme-based builds to headless WordPress architectures using React. I owned projects end to end, handling technical planning, development, and deployment while working directly with clients to translate complex business requirements into scalable, high-performance web applications. My work included custom theme and plugin development, API integrations, performance optimization, and tailored solutions for unique technical needs, balancing clean architecture with real-world usability and maintainability.",
    },
  ],
  agencyWork: [
    {
      title: "ICUC Social",
      description:
        "Agency website work focused on clarity, service communication, and enterprise-ready presentation.",
      image: "/images/agency-work/icuc-social.png",
    },
    {
      title: "Simple Loose Leaf",
      description:
        "E-commerce content and page implementation supporting a product-led tea subscription experience.",
      image: "/images/agency-work/simple-loose-leaf.png",
    },
    {
      title: "Social CRM & Strategy",
      description:
        "Marketing-focused web page build emphasizing messaging hierarchy, conversion flow, and readability.",
      image: "/images/agency-work/social-crm-strategy.png",
    },
    {
      title: "Gentrifi GPS",
      description:
        "Fleet technology website implementation focused on product positioning, trust signals, and strong hero-to-content flow.",
      image: "/images/agency-work/gentrifi-gps.png",
    },
  ],
};
