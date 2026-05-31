/**
 * Case-study content for /work/[slug]. Edit prose here; media stays as labeled
 * placeholders until real screenshots / recordings are dropped in.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  url?: string;
  date: string;
  tags: string[];
  media: { kind: "image" | "video"; label: string; ratio?: string }[];
  sections: { heading?: string; body: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "written-exposure",
    title: "Written Exposure Therapy",
    subtitle:
      "A full-stack, accessible resource for an evidence-based PTSD treatment.",
    url: "https://www.writtenexposure.com/",
    date: "2025 – Present · Freelance",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "REST", "Agile"],
    media: [
      { kind: "image", label: "Homepage — desktop" },
      { kind: "image", label: "Mobile view" },
    ],
    sections: [
      {
        heading: "The brief",
        body: [
          "Written Exposure Therapy (WET) is an evidence-based treatment for PTSD. The site needed to present the method clearly and credibly, to patients and clinicians alike, and load fast on any connection.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A full-stack, responsive application in React, Tailwind CSS, and Node.js, backed by RESTful APIs and a MongoDB database with indexing to keep load times low.",
          "I worked in Agile sprints and iterated on the UI/UX directly with the client, shipping ahead of schedule and continuing to add features.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Clear, accessible information about a clinical treatment is real human impact, exactly the kind of work I want to do. Good engineering in service of the people who need it.",
        ],
      },
    ],
  },
  {
    slug: "gallant",
    title: "Chris Gallant for Congress",
    subtitle: "A campaign site built to turn visitors into supporters.",
    url: "https://gallantny.com/",
    date: "2025 · Freelance",
    tags: ["WordPress", "PHP", "Responsive"],
    media: [
      { kind: "image", label: "Homepage" },
      { kind: "image", label: "Donate flow" },
    ],
    sections: [
      {
        heading: "The brief",
        body: [
          "A congressional campaign for New York's 1st District (Long Island) needed a digital hub: introduce the candidate, mobilize volunteers, and drive donations.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A clean, responsive campaign site with clear paths to action: donation tiers, volunteer and event sign-ups, a news room, and social integration, organized so a first-time visitor always knows the next step.",
        ],
      },
      {
        heading: "The stack",
        body: [
          "Built on WordPress with a PHP backend, themed and extended so the campaign team could update content themselves while the donation, volunteer, and event flows stayed reliable.",
        ],
      },
    ],
  },
  {
    slug: "hack-for-impact",
    title: "Hack For Impact · Harvard Hackathon",
    subtitle: "A personalized workout-planner iOS app, built in 60 hours.",
    date: "Nov 2024 · Hackathon",
    tags: ["SwiftUI", "Python", "Flask", "iOS"],
    media: [
      { kind: "video", label: "App demo" },
      { kind: "image", label: "Workout plan screen", ratio: "9 / 16" },
    ],
    sections: [
      {
        heading: "The build",
        body: [
          "Over a 60-hour hackathon, my team designed and shipped an iOS app in SwiftUI that generates a personalized workout plan from a user's goals and preferences.",
          "A Python / Flask service powered the planning logic behind the app.",
        ],
      },
      {
        heading: "What I took from it",
        body: [
          "Turning fuzzy user input into a useful, tailored result, under a hard deadline, as a team. The kind of constraint that forces clear priorities and clean handoffs.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
