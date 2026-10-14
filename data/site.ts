export const siteUrl = "https://artemluty.github.io/ak-games-landing";
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
export const contactDetails = {
  email: "temofy@gmail.com",
  linkedin: "https://www.linkedin.com/in/artem-kolesnikov-49690ab6/",
  github: "https://github.com/ArtemLuty",
  appStoreDeveloper:
    "https://apps.apple.com/us/developer/artem-kolesnikov/id1864616987",
};
export type Project = {
  slug: string;
  title: string;
  category: "App" | "Game" | "Product";
  status:
    | "Released"
    | "In development"
    | "Release preparation"
    | "Live in clinics";
  releaseNote?: string;
  tagline: string;
  description: string;
  overview: string;
  tech: string[];
  features: string[];
  color: string;
  appStore?: string;
  github?: string;
  image?: string;
  icon?: string;
  screenshots?: string[];
  video?: { src: string; poster: string; caption: string; description: string };
  visual?: "phones" | "workflow" | "audio";
};
export const projects: Project[] = [
  {
    slug: "hollow",
    title: "HOLLOW: The Last Echo",
    category: "Game",
    status: "Release preparation",
    releaseNote:
      "In App Store review · Steam release in preparation · Desktop & mobile",
    color: "forest",
    tagline: "A small keeper. A world worth saving.",
    description:
      "An atmospheric puzzle-platformer about a forest keeper and the echo they leave behind.",
    overview:
      "Carry the forest’s last voice home through fifty authored chapters. An eight-second echo can hold a pressure stone while you move on, turning a simple ability into puzzles about timing, space and cooperation with your past self. The game is in its final release stage across desktop and mobile, with the App Store edition under review and the Steam release in preparation.",
    tech: ["JavaScript", "Matter.js", "Canvas", "Electron"],
    features: [
      "Fifty chapters with environmental puzzles and checkpoints",
      "Echoes, movable crates, gates and connected routes",
      "Keyboard, gamepad and touch controls",
    ],
    image: "/projects/hollow-cover.jpg",
    screenshots: ["/projects/hollow-gameplay.jpg"],
    video: {
      src: "/projects/hollow-gameplay.mp4",
      poster: "/projects/hollow-video-poster.jpg",
      caption: "Echoes, forest paths & a little ingenuity.",
      description:
        "A small forest keeper explores woodland paths, leaves an echo and moves crates to reach higher ground. Gameplay excerpt from HOLLOW: The Last Echo.",
    },
  },
  {
    slug: "clinicflow",
    title: "ClinicFlow",
    category: "Product",
    status: "Live in clinics",
    releaseNote:
      "A complete product, already used in day-to-day clinical work.",
    color: "blue",
    visual: "workflow",
    tagline: "Less admin. More room for care.",
    description:
      "Practice-management software already used in clinics, connecting patients, appointments, visits and payments.",
    overview:
      "ClinicFlow is a complete practice-management product, already supporting daily work in clinics. It brings patient records, scheduling, performed services, files and payments into a shared workspace, helping the team keep the whole patient journey connected. Built with Flutter and Firebase. ClinicFlow is the product’s working name.",
    tech: ["Flutter", "Firebase", "Web", "Product design"],
    features: [
      "Patient records and appointment scheduling",
      "Visit workflows, service records and file attachments",
      "Payment tracking and patient balances",
    ],
  },
  {
    slug: "snake-reflex",
    title: "Snake Reflex",
    category: "Game",
    status: "Released",
    color: "lime",
    visual: "phones",
    tagline: "One more run. One better score.",
    description:
      "The classic Snake idea, rebuilt around increasing difficulty, daily runs and global competition.",
    overview:
      "Snake Reflex puts reaction speed and focus at the centre of a familiar game. Progressive difficulty keeps each run moving, while daily challenges and a live global leaderboard give players a reason to return. Available on the App Store.",
    tech: ["Flutter", "Dart", "Firebase"],
    features: [
      "Progressive difficulty with skill-based scoring",
      "Daily challenges and a live global leaderboard",
      "Offline gameplay support",
    ],
    appStore: "https://apps.apple.com/us/app/snake-reflex/id6757111938",
    github: "https://github.com/ArtemLuty/snake_classic",
    icon: "/projects/snake-reflex-icon.jpg",
    screenshots: [
      "/projects/snake-reflex-1.jpg",
      "/projects/snake-reflex-2.jpg",
    ],
  },
  {
    slug: "pupwhistle",
    title: "PupWhistle",
    category: "App",
    status: "Released",
    color: "sand",
    visual: "phones",
    tagline: "A clearer cue for your best friend.",
    description:
      "A focused dog-training utility for repeatable whistle cues and custom sound patterns.",
    overview:
      "PupWhistle makes consistent training cues easy to set up. Built-in commands sit alongside adjustable frequencies, pulse patterns and saved custom cues. An audible Test mode lets the owner preview playback.",
    tech: ["Flutter", "Dart", "Audio"],
    features: [
      "Built-in Sit, Stay, Come and Quiet cues",
      "Saved custom commands with frequency and pulse controls",
      "Dog-size presets and human-audible Test mode",
    ],
    appStore: "https://apps.apple.com/us/app/pupwhistle/id6773967725",
    icon: "/projects/pupwhistle-icon.jpg",
    screenshots: ["/projects/pupwhistle-1.jpg", "/projects/pupwhistle-2.jpg"],
  },
  {
    slug: "tap-dodge",
    title: "Tap Dodge: Reflex",
    category: "Game",
    status: "Released",
    color: "violet",
    visual: "phones",
    tagline: "Find your rhythm in the neon storm.",
    description:
      "A one-tap arcade game with lane switching, falling obstacles and escalating waves.",
    overview:
      "Tap Dodge is built for short, concentrated play. Three difficulty modes change the number of lanes and wave patterns, while level progression, bonus rounds and combo multipliers keep each session varied.",
    tech: ["Flutter", "Dart", "Game design"],
    features: [
      "Easy, Medium and Hard difficulty modes",
      "Wave events, bonus rounds and combo multipliers",
      "One-tap controls, haptics and a neon visual identity",
    ],
    appStore: "https://apps.apple.com/us/app/tap-dodge-reflex/id6757133605",
    icon: "/projects/tap-dodge-icon.jpg",
    screenshots: ["/projects/tap-dodge-1.jpg", "/projects/tap-dodge-2.jpg"],
  },
  {
    slug: "aether-lexicon",
    title: "Aether Lexicon",
    category: "Game",
    status: "Released",
    color: "amber",
    visual: "phones",
    tagline: "Make a little room for wordplay.",
    description:
      "A word puzzle game combining vocabulary, logic and a gradually growing challenge.",
    overview:
      "Aether Lexicon pairs word puzzles with progressive difficulty. Designed for a quieter kind of play, it lets players solve puzzles, discover words and continue offline.",
    tech: ["Flutter", "Dart", "Offline gameplay"],
    features: [
      "Word puzzles with progressive difficulty",
      "Vocabulary and logic-based challenges",
      "Offline play support",
    ],
    appStore: "https://apps.apple.com/us/app/aether-lexicon/id6761136022",
    icon: "/projects/aether-lexicon-icon.jpg",
    screenshots: [
      "/projects/aether-lexicon-1.jpg",
      "/projects/aether-lexicon-2.jpg",
    ],
  },
  {
    slug: "ashveil",
    title: "ASHVEIL",
    category: "Game",
    status: "In development",
    releaseNote: "In active development · Strategy RPG",
    color: "stone",
    tagline: "Build a company. Shape a dark world.",
    description:
      "An original dark-fantasy strategy RPG with world exploration and turn-based tactical battles.",
    overview:
      "ASHVEIL is a dark-fantasy strategy RPG in active development, combining a strategic map with squad-based combat. Recruit and develop units, capture resources, explore linked chapters and lead a company through tactical encounters.",
    tech: ["Godot 4", "GDScript", "Systems design"],
    features: [
      "Strategic exploration, resource control and progression",
      "Two-row tactical battles with distinct unit roles",
      "Linked campaign chapters and replayable skirmishes",
    ],
    image: "/projects/ashveil.jpg",
    screenshots: ["/projects/ashveil.jpg"],
    video: {
      src: "/projects/ashveil-gameplay.mp4",
      poster: "/projects/ashveil-video-poster.jpg",
      caption: "A company of your own. Every turn matters.",
      description:
        "Two companies face each other in the Cinder Cathedral. Units take turns attacking as the combat log records their actions. Silent footage from an ASHVEIL development build.",
    },
  },
  {
    slug: "freedom-player",
    title: "Freedom Player",
    category: "App",
    status: "In development",
    color: "coral",
    visual: "audio",
    tagline: "Music discovery, without the clutter.",
    description:
      "A Flutter music player for discovering independent and archival music through public APIs.",
    overview:
      "Freedom Player connects Jamendo and Internet Archive to a focused listening interface. The current development build includes background playback, search, a queue, favourites and recent listening, with a dark visual direction.",
    tech: ["Flutter", "Riverpod", "Audio streaming", "REST APIs"],
    features: [
      "Search and category browsing across two music providers",
      "Background audio, queue management, shuffle and repeat",
      "Favourites, recently played and a sleep timer",
    ],
    github: "https://github.com/ArtemLuty/free_music_plauer",
  },
];
export const releasedProjects = projects.filter((p) => p.status === "Released");
export const isLiveProject = (p: Project) =>
  p.status === "Released" || p.status === "Live in clinics";
export const gameplayProjects = projects.filter((p) => p.video);
export const selectedProjects = [
  "hollow",
  "clinicflow",
  "snake-reflex",
  "ashveil",
].map((slug) => projects.find((p) => p.slug === slug)!);
