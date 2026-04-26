export type ProjectStatus =
  | "In Development"
  | "Released"
  | "Released / Prototype"
  | "Prototype"
  | "Concept / Prototype"
  | "Utility App";

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  links: {
    appStore: string;
    googlePlay: string;
    github: string;
    learnMore: string;
  };
  accent: string;
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export const featuredProject = {
  title: "Freedom Player",
  status: "In Development",
  description:
    "Freedom Player is a minimalistic music player focused on clean design, simple control, and access to free music sources. It is being shaped as a distraction-free listening experience with category-based browsing, streaming support, and room for AI-generated music features.",
  features: [
    "Clean ascetic interface",
    "Play, pause, next, and previous controls",
    "Seek bar and playlist flow",
    "Category-based browsing",
    "Free music API integration",
    "Possible AI music integration",
    "Mobile-first experience",
  ],
  tech: ["Flutter", "Dart", "REST APIs", "Audio Streaming", "State Management"],
  links: {
    learnMore: "/projects#freedom-player",
    github: "https://github.com/",
    contact: "/contact",
  },
};

export const projects: Project[] = [
  {
    slug: "wordie",
    title: "Wordie",
    description:
      "A released casual word game built around simple gameplay, clean presentation, and replayable sessions that feel easy to pick up.",
    status: "Released",
    tech: ["Flutter", "Dart", "Game Logic", "App Store Deployment"],
    links: {
      appStore: "https://apps.apple.com/",
      googlePlay: "https://play.google.com/store",
      github: "https://github.com/",
      learnMore: "/projects#wordie",
    },
    accent: "from-sky-500/30 to-cyan-400/15",
  },
  {
    slug: "snake-classique",
    title: "Snake Classique",
    description:
      "A retro-style Snake experience inspired by classic mobile games, rebuilt with modern touch controls and minimalist visuals.",
    status: "Released / Prototype",
    tech: ["Flutter", "Dart", "Game Loop", "Touch Controls"],
    links: {
      appStore: "https://apps.apple.com/",
      googlePlay: "https://play.google.com/store",
      github: "https://github.com/",
      learnMore: "/projects#snake-classique",
    },
    accent: "from-emerald-500/30 to-lime-400/15",
  },
  {
    slug: "tab-dodge",
    title: "Tab Dodge",
    description:
      "A fast reaction arcade prototype where the player avoids incoming obstacles and survives for as long as possible.",
    status: "Prototype",
    tech: ["Flutter", "Dart", "Animations", "Game Logic"],
    links: {
      appStore: "https://apps.apple.com/",
      googlePlay: "https://play.google.com/store",
      github: "https://github.com/",
      learnMore: "/projects#tab-dodge",
    },
    accent: "from-violet-500/30 to-fuchsia-400/15",
  },
  {
    slug: "either-lexicon",
    title: "Either Lexicon",
    description:
      "An experimental word and choice-based concept focused on vocabulary, decisions, and concise interactive mechanics.",
    status: "Concept / Prototype",
    tech: ["Flutter", "Dart", "Local Data", "Game Mechanics"],
    links: {
      appStore: "https://apps.apple.com/",
      googlePlay: "https://play.google.com/store",
      github: "https://github.com/",
      learnMore: "/projects#either-lexicon",
    },
    accent: "from-amber-500/30 to-orange-400/15",
  },
  {
    slug: "dog-whistle",
    title: "Dog Whistle",
    description:
      "A practical utility app for dog whistle sounds and frequency-based audio tools with a straightforward mobile interface.",
    status: "Utility App",
    tech: ["Flutter", "Dart", "Audio Playback", "Frequency Generation"],
    links: {
      appStore: "https://apps.apple.com/",
      googlePlay: "https://play.google.com/store",
      github: "https://github.com/",
      learnMore: "/projects#dog-whistle",
    },
    accent: "from-rose-500/30 to-pink-400/15",
  },
];

export const technologies = [
  "Flutter",
  "Dart",
  "Firebase",
  "REST APIs",
  "Audio Streaming",
  "Game Logic",
  "Flame Engine",
  "Git / GitHub",
  "CI/CD",
  "App Store Connect",
  "Google Play Console",
  "AI APIs",
];

export const principles = [
  "Simple design with sharp focus",
  "Real user value before feature noise",
  "Fast mobile experiences that feel native",
  "Clean and maintainable code built for iteration",
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "App Store", href: "https://apps.apple.com/" },
];
