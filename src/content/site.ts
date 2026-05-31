/**
 * Single source of truth for site copy.
 * Edit text here; components read from this file.
 */

export const site = {
  name: "Shawn Balgobind",
  role: "Software engineer & designer",
  location: "NY-BOS",
  email: "srb5012@gmail.com",
  github: "https://github.com/srb5012",
  linkedin: "https://www.linkedin.com/in/shawn-balgobind-64ba722a2/",
  resume: "/Resume.pdf",
} as const;

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Academics", href: "/#academics" },
  { label: "Contact", href: "/#contact" },
] as const;

export const hero = {
  headline: "Good software should work for everyone.",
  subline: "Not just the people who already know how to use it.",
  meta: "Software engineer & designer · NY-BOS",
  ctas: [
    { label: "See Work", href: "#projects" },
    { label: "Get in touch", href: "#contact" },
  ],
} as const;

export const about = {
  lead: "I'm Shawn, a Computer Science & Mathematics graduate from Boston University, based in the NY-BOS area.",
  paragraphs: [
    "Since I was a child, systems and design have always fascinated me. I feel like the best inspiration comes from asking why something else works the way it does.",
    "I believe the best solutions are ones that everyone can understand. Good technical work and real human impact should go hand in hand.",
    "Right now I'm after one thing: Finding a way to engineer solutions to real world problems.",
  ],
} as const;

/* ── Experience ──────────────────────────────────────────────────────────── */

export type FreelanceProject = {
  name: string;
  url: string;
  slug: string;
  blurb: string;
  tags: string[];
};

export const freelance = {
  intro:
    "A growing part-time studio. I design and build fast, accessible sites for businesses across New York, Long Island, and Boston.",
  projects: [
    {
      name: "Written Exposure Therapy",
      url: "https://www.writtenexposure.com/",
      slug: "written-exposure",
      blurb:
        "An evidence-based PTSD treatment resource. Full-stack responsive build in React, Tailwind, and Node.js, with RESTful APIs and an indexed MongoDB database, built in Agile sprints, delivered ahead of schedule, and still shipping features.",
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "REST"],
    },
    {
      name: "Chris Gallant for Congress",
      url: "https://gallantny.com/",
      slug: "gallant",
      blurb:
        "A campaign site for New York's 1st Congressional District, built on WordPress with a PHP backend. Donation tiers, volunteer and event portals, and social integration, designed to turn visitors into supporters.",
      tags: ["WordPress", "PHP", "Responsive"],
    },
  ] satisfies FreelanceProject[],
} as const;

export type ExperienceItem = {
  org: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
  media?: { label: string; src: string };
};

export const teaching: ExperienceItem[] = [
  {
    org: "Boston University",
    role: "Academic Tutor",
    dates: "Sept 2025 – May 2026",
    location: "Boston, MA",
    bullets: [
      "Broke down the hardest parts of my own coursework (Calculus, Statistics, Data Structures, and Algorithm Design) for 15+ students just starting out.",
      "Built custom learning materials and coding exercises, adapting to diverse, international learners.",
    ],
  },
  {
    org: "Lavner Education, Garden City, NY",
    role: "Technical Instructor (Adelphi University)",
    dates: "Jun – Aug 2025",
    location: "Garden City, NY",
    bullets: [
      "Taught 130+ students Python, Java, and Lua through project-based learning.",
      "Kept the camp running: managed the student-roster database and resolved network and server issues across 100+ laptops.",
    ],
    media: {
      label: "Adelphi University · Garden City, NY",
      src: "/media/lavner-adelphi.png",
    },
  },
];

/* ── Projects ────────────────────────────────────────────────────────────── */

export type Project = {
  title: string;
  date: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string; external?: boolean }[];
  media?: { kind: "image" | "video"; label: string; src?: string };
  featured?: boolean;
};

export const projectsIntro =
  "A few of the projects I've learned the most from.";

export const projects: Project[] = [
  {
    title: "Harvard HDSI Datathon",
    date: "Oct 2024",
    blurb:
      "Analyzed decades of U.S. census data to show how an aging farmer population is reshaping American agriculture. 50,000+ records wrangled in Python and Pandas, with Seaborn / Plotly dashboards and statistical modeling.",
    tags: ["Python", "Pandas", "Seaborn", "Plotly", "Statistics"],
    links: [
      { label: "Submission (PDF)", href: "/HDSI_Submission.pdf", external: true },
    ],
    media: {
      kind: "image",
      label: "Dashboard excerpt",
      src: "/media/hdsi-datathon.png",
    },
  },
  {
    title: "Hack For Impact · Harvard Hackathon",
    date: "Nov 2024",
    blurb:
      "A 60-hour build: an iOS app (SwiftUI) that generates a personalized workout plan from your goals and preferences, backed by a Python / Flask service.",
    tags: ["SwiftUI", "Python", "Flask", "iOS"],
    links: [],
  },
  {
    title: "UFCPredictor",
    date: "Jun 2025",
    blurb:
      "ML models predicting UFC fight outcomes with XGBoost and Random Forest on the Kaggle UFC dataset, using EWMA feature engineering and TimeSeriesSplit validation to prevent data leakage. ~58% on stats alone, ~65% with market odds. Plus a from-scratch C++ ID3 decision tree.",
    tags: ["Python", "XGBoost", "scikit-learn", "C++", "Feature engineering"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/srb5012/UFCPredictor",
        external: true,
      },
    ],
    media: {
      kind: "image",
      label: "Results & charts",
      src: "/media/ufc-predictor.png",
    },
  },
  {
    title: "CohesiveAudioVisualizer",
    date: "Aug 2025",
    blurb:
      "A real-time audio-to-color visualizer in Python: live mic input runs through an FFT (NumPy), and the dominant frequency maps to a color, with a Hann window, quadratic-interpolation peak detection, and EMA + hysteresis smoothing to kill jitter.",
    tags: ["Python", "NumPy", "FFT", "PyAudio", "DSP"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/srb5012/CohesiveAudioVisualizer",
        external: true,
      },
    ],
  },
  {
    title: "Stock Market Prediction Tool",
    date: "Nov 2023",
    blurb:
      "Linear-regression time-series models over 10,000+ data points (~85% accuracy), with engineered features from stock indicators and backtesting.",
    tags: ["Python", "Pandas", "Matplotlib", "Sympy"],
    links: [],
  },
  {
    title: "Spotify Recommendation Engine",
    date: "Feb 2024",
    blurb:
      "Feature extraction from the Spotify API with SciPy-based recommendations, tuned via A/B testing for ~45% faster generation and higher engagement.",
    tags: ["Python", "SciPy", "Flask", "A/B testing"],
    links: [],
  },
];

/* ── Academics ───────────────────────────────────────────────────────────── */

export const education = {
  school: "Boston University",
  degree: "BA, Computer Science & Mathematics",
  detail: "2022–2026",
};

export const spotlightCourses = [
  { code: "CS 440", name: "Artificial Intelligence" },
  { code: "MA 582", name: "Mathematical Statistics" },
  { code: "CS 460", name: "Database Systems" },
];

export const coursework = [
  "Advanced Calculus",
  "Linear Algebra",
  "Computer Systems",
  "Probability in Computing",
  "Algorithm & Data-Structure Analysis",
  "System Design",
];

export type Certificate = { name: string; issuer: "ibm" | "freecodecamp" | "udemy" };

export const certificates: Certificate[] = [
  { name: "IBM Data Analyst Professional Certificate", issuer: "ibm" },
  { name: "FreeCodeCamp Web Design", issuer: "freecodecamp" },
  { name: "Udemy Modern JavaScript", issuer: "udemy" },
];

export const skills = [
  {
    group: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript (React)",
      "C",
      "C++",
      "HTML",
      "Swift",
      "R",
      "Rust",
      "SQL",
      "Go",
    ],
  },
  {
    group: "Tools & Libraries",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Sympy",
      "Seaborn",
      "Plotly",
      "SciPy",
      "Apache Airflow",
      "Azure",
    ],
  },
  {
    group: "Software & Methods",
    items: [
      "Git",
      "Microsoft Office",
      "Tableau",
      "LaTeX",
      "Agile / Scrum",
      "CI/CD",
      "RESTful APIs",
    ],
  },
];

/* ── Contact ─────────────────────────────────────────────────────────────── */

export const contact = {
  headline: "Let's build something that works for everyone.",
  line: "Hiring at a lab, or have a project in mind? Either way, I'd love to hear from you.",
};
