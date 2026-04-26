export type ProjectStatus =
  | "In Development"
  | "Released"
  | "Released / Prototype"
  | "Waiting for Review"
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

export const contactDetails = {
  email: "temofy@gmail.com",
  linkedin: "https://www.linkedin.com/in/artem-kolesnikov-49690ab6/",
  github: "https://github.com/ArtemLuty",
  appStoreDeveloper: "https://apps.apple.com/us/developer/artem-kolesnikov/id1864616987",
};

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
    github: "https://github.com/ArtemLuty/free_music_plauer",
    contact: "/contact",
  },
};

export const projects: Project[] = [
  {
    slug: "snake-reflex",
    title: "Snake Reflex",
    description:
      "A skill-based Snake game built around progressive difficulty, live global leaderboards, daily challenges, and a clean minimal interface where reflexes matter more than grind.",
    status: "Waiting for Review",
    tech: ["Flutter", "Dart", "Firebase", "Leaderboards", "Offline Gameplay"],
    links: {
      appStore: contactDetails.appStoreDeveloper,
      googlePlay: "https://play.google.com/store",
      github: "https://github.com/ArtemLuty/snake_classic",
      learnMore: "/projects#snake-reflex",
    },
    accent: "from-emerald-500/30 to-lime-400/15",
  },
  {
    slug: "tab-dodge",
    title: "Tap Dodge: Reflex",
    description:
      "A fast neon reflex arcade game built around one-tap lane switching, falling obstacle waves, escalating difficulty, and a clean futuristic presentation.",
    status: "Released",
    tech: ["Flutter", "Dart", "Animations", "Game Logic"],
    links: {
      appStore: "https://apps.apple.com/us/app/tap-dodge-reflex/id6757133605",
      googlePlay: "https://play.google.com/store",
      github: contactDetails.github,
      learnMore: "/projects#tab-dodge",
    },
    accent: "from-violet-500/30 to-fuchsia-400/15",
  },
  {
    slug: "aether-lexicon",
    title: "Aether Lexicon",
    description:
      "A futuristic word puzzle game focused on vocabulary, logic, progressive challenge, and a calm modern interface with offline play support.",
    status: "Released",
    tech: ["Flutter", "Dart", "Local Data", "Game Mechanics"],
    links: {
      appStore: "https://apps.apple.com/us/app/aether-lexicon/id6761136022",
      googlePlay: "https://play.google.com/store",
      github: contactDetails.github,
      learnMore: "/projects#aether-lexicon",
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
      github: contactDetails.github,
      learnMore: "/projects#dog-whistle",
    },
    accent: "from-rose-500/30 to-pink-400/15",
  },
  {
    slug: "wordie",
    title: "Wordie",
    description:
      "A casual word game currently in development, focused on simple gameplay, clean visual rhythm, and replayable vocabulary-driven sessions.",
    status: "In Development",
    tech: ["Flutter", "Dart", "Game Logic", "Word Mechanics"],
    links: {
      appStore: "https://apps.apple.com/",
      googlePlay: "https://play.google.com/store",
      github: contactDetails.github,
      learnMore: "/projects#wordie",
    },
    accent: "from-sky-500/30 to-cyan-400/15",
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
  { label: "GitHub", href: contactDetails.github },
  { label: "LinkedIn", href: contactDetails.linkedin },
  { label: "App Store", href: contactDetails.appStoreDeveloper },
];
