/**
 * Single source of truth for site copy.
 * Edit text here; components read from this file. Case-study prose lives in
 * src/content/work.ts.
 */

export const site = {
  name: "Shawn Balgobind",
  role: "Software engineer & designer",
  location: "NYC metro",
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
  kicker: "Shawn Balgobind",
  headline: "Good software should work for everyone.",
  subline: "Not just the people who already know how to use it.",
  support: "Math to think it through. CS to build it.",
  meta: "Software engineer & designer · NYC",
  ctas: [
    { label: "See the work", href: "#projects" },
    { label: "Get in touch", href: "#contact" },
  ],
} as const;

export const about = {
  lead: "I'm Shawn, a Computer Science & Mathematics graduate from Boston University, based in the NYC metro area.",
  paragraphs: [
    "Mathematics taught me to think carefully about problems. Computer Science gave me the tools to solve them.",
    "I care about software that works for everyone, not just the people who already know how to use it. Good technical work and real human impact should go hand in hand.",
    "Right now I'm after two things: contributing at AI research labs, and building web products for freelance clients.",
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
    "A growing part-time studio. I design and build fast, accessible sites, and I'm currently in contact with businesses across New York and Long Island.",
  projects: [
    {
      name: "Written Exposure Therapy",
      url: "https://www.writtenexposure.com/",
      slug: "written-exposure",
      blurb:
        "An evidence-based PTSD treatment resource. Full-stack responsive build in React, Tailwind, and Node.js, with RESTful APIs and an indexed MongoDB database. Built in Agile sprints, delivered ahead of schedule, and still shipping features.",
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
  media?: { label: string; note: string };
};

export const teaching: ExperienceItem[] = [
  {
    org: "Boston University",
    role: "Academic Tutor",
    dates: "Sept 2025 – Present",
    location: "Boston, MA",
    bullets: [
      "Break down the hardest parts of my own coursework (Calculus, Statistics, Data Structures, and Algorithm Design) for 15+ students just starting out.",
      "Build custom learning materials and coding exercises, adapting to diverse, international learners.",
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
      note: "Photo coming soon",
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
  media?: { kind: "image" | "video"; label: string };
  featured?: boolean;
};

export const projectsIntro =
  "A through-line across my work: large, messy, real-world data. Feature engineering, statistical modeling, evaluation, experimentation, and pipelines (Pandas / NumPy / SciPy, with Apache Airflow for orchestration). It's the bridge from data analytics to AI research.";

export const projects: Project[] = [
  {
    title: "Hack For Impact · Harvard Hackathon",
    date: "Nov 2024",
    blurb:
      "A 60-hour build: an iOS app (SwiftUI) that generates a personalized workout plan from your goals and preferences, backed by a Python / Flask service.",
    tags: ["SwiftUI", "Python", "Flask", "iOS"],
    links: [{ label: "Case study", href: "/work/hack-for-impact" }],
    media: { kind: "video", label: "App demo" },
    featured: true,
  },
  {
    title: "Harvard HDSI Datathon",
    date: "Oct 2024",
    blurb:
      "Analyzed decades of U.S. census data to show how an aging farmer population is reshaping American agriculture. 50,000+ records wrangled in Python and Pandas, with Seaborn / Plotly dashboards and statistical modeling.",
    tags: ["Python", "Pandas", "Seaborn", "Plotly", "Statistics"],
    links: [
      { label: "Submission (PDF)", href: "/HDSI_Submission.pdf", external: true },
    ],
    media: { kind: "image", label: "Dashboard excerpt" },
  },
  {
    title: "UFCPredictor",
    date: "2024",
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
    media: { kind: "image", label: "Results & charts" },
  },
  {
    title: "CohesiveAudioVisualizer",
    date: "2024",
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
    media: { kind: "video", label: "Screen recording" },
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
  detail: "GPA 3.5 · 2022–2026 · NYC metro",
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

export const certificates = [
  "IBM Data Analyst Professional Certificate",
  "FreeCodeCamp Web Design",
  "Udemy Modern JavaScript",
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
