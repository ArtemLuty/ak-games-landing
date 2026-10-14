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
  status: "Released" | "In development" | "Playable beta" | "Prototype";
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
  visual?: "phones" | "workflow" | "audio";
};
export const projects: Project[] = [
  {
    slug: "vocabio",
    title: "Vocabio LV",
    category: "App",
    status: "Released",
    tagline: "Your words. Your way to learn.",
    color: "lavender",
    visual: "phones",
    description:
      "An English vocabulary trainer that turns your own word lists into a daily learning practice.",
    overview:
      "Vocabio brings five ways to practise into one focused learning experience. Create a personal vocabulary, switch between English and Ukrainian, and study offline at your own pace.",
    tech: ["iOS", "Education", "Offline learning"],
    features: [
      "Flashcards, quiz, writing, scramble and mixed practice",
      "Personal word lists with translations and examples",
      "English and Ukrainian interface with light and dark themes",
    ],
    appStore: "https://apps.apple.com/us/app/vocabio-lv/id6774777047",
    icon: "/projects/vocabio-icon.jpg",
    screenshots: ["/projects/vocabio-1.jpg", "/projects/vocabio-2.jpg"],
  },
  {
    slug: "hollow",
    title: "HOLLOW",
    category: "Game",
    status: "Playable beta",
    color: "forest",
    tagline: "A small keeper. A world worth saving.",
    description:
      "An atmospheric puzzle-platformer about a forest keeper and the echo they leave behind.",
    overview:
      "Carry the forest’s last voice home through fifty authored chapters. An eight-second echo can hold a pressure stone while you move on, turning a simple ability into puzzles about timing, space and cooperation with your past self. Currently a playable beta; mobile editions are in testing.",
    tech: ["JavaScript", "Matter.js", "Canvas", "Electron"],
    features: [
      "Fifty chapters with environmental puzzles and checkpoints",
      "Echoes, movable crates, gates and connected routes",
      "Keyboard, gamepad and touch controls",
    ],
    image: "/projects/hollow-cover.jpg",
    screenshots: ["/projects/hollow-gameplay.jpg"],
  },
  {
    slug: "clinicflow",
    title: "ClinicFlow",
    category: "Product",
    status: "Prototype",
    color: "blue",
    visual: "workflow",
    tagline: "Less admin. More room for care.",
    description:
      "A working practice-management MVP connecting patients, appointments, visits and payments.",
    overview:
      "ClinicFlow explores the everyday workflow of a medical or dental practice. The Flutter MVP connects patient records, scheduling, performed services and balances in a shared Firebase-backed workspace. The MVP is currently being developed and tested.",
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
    status: "Prototype",
    color: "stone",
    tagline: "Build a company. Shape a dark world.",
    description:
      "An original dark-fantasy strategy RPG with world exploration and turn-based tactical battles.",
    overview:
      "ASHVEIL is a playable Godot prototype combining a strategic map with squad-based combat. Recruit and develop units, capture resources, explore linked chapters and lead a company through tactical encounters.",
    tech: ["Godot 4", "GDScript", "Systems design"],
    features: [
      "Strategic exploration, resource control and progression",
      "Two-row tactical battles with distinct unit roles",
      "Linked campaign chapters and replayable skirmishes",
    ],
    image: "/projects/ashveil.jpg",
    screenshots: ["/projects/ashveil.jpg"],
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
export const selectedProjects = [
  "hollow",
  "vocabio",
  "clinicflow",
  "ashveil",
].map((slug) => projects.find((p) => p.slug === slug)!);
