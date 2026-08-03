export const profile = {
  name: "Muibi Rasaq",
  role: "Full Stack Developer",
  tagline: "Building fast, reliable web experiences from front end to back end.",
  location: "Jeddah, Saudi Arabia",
  email: "rasaq608@gmail.com",
  phoneDisplay: "+966 51 149 5148",
  phoneHref: "+966511495148",
  whatsapp: "https://wa.me/966511495148",
  github: "https://github.com/Rosisky527",
  linkedin: "https://www.linkedin.com/in/muibi-rasaq-a97901255",
  resumeUrl: "/resume.pdf",
  bio: "I'm a Full Stack Developer who builds complete web applications from front end to back end — clean interfaces, solid APIs, and code that's built to last. I work across JavaScript, Python, and modern frameworks, and I care as much about how a project is structured and documented as I do about how it looks. Clients hire me because I deliver work that's dependable and easy to hand off or build on — no shortcuts, no guesswork, just software that does what it's supposed to do.",
  aboutLong: [
    "I'm a Full Stack Developer based in Jeddah, Saudi Arabia, building websites and web applications end to end — from interface to database.",
    "My path into development has been self-directed: an ALX Africa Software Engineering Certificate, a string of self-built projects spanning finance tools, games, and data lookups, and ongoing freelance work building sites for real clients.",
    "I also work as an Expert Contributor reviewing AI-generated coding submissions, which keeps me close to how real production codebases are judged for correctness, test coverage, and quality — a habit that shows up in how I write and structure my own code.",
    "Clients hire me because I take ownership of a project rather than just executing a spec: I ask the right questions upfront, communicate clearly through the build, and deliver something documented enough that another developer could pick it up after me.",
  ],
};

export const stats = [
  { label: "Projects Shipped", value: 5, suffix: "+" },
  { label: "Core Technologies", value: 20, suffix: "+" },
  { label: "Remote Ready", value: 100, suffix: "%" },
];

export const rotatingRoles = [
  "Full Stack Developer",
  "React & Next.js Developer",
  "API Builder",
  "Freelance Web Developer",
];

export const services = [
  { title: "Business Websites", description: "Professional websites for companies that need a credible, fast, well-structured online presence." },
  { title: "Landing Pages", description: "Focused, conversion-oriented single pages for campaigns, launches, and lead generation." },
  { title: "E-commerce", description: "Online stores with product catalogs, cart flows, and payment integration." },
  { title: "Portfolio Websites", description: "Personal and professional portfolios that present work clearly and load fast." },
  { title: "Website Redesign", description: "Modernizing an existing site's design, performance, and structure without losing what already works." },
  { title: "Website Maintenance", description: "Ongoing fixes, updates, and monitoring to keep an existing site running smoothly." },
  { title: "SEO", description: "On-page SEO, structured metadata, and technical fundamentals to help a site get found." },
  { title: "Speed Optimization", description: "Diagnosing and fixing what's slowing a site down — assets, queries, rendering, and delivery." },
  { title: "Web Application Development", description: "Custom web apps with real logic and data — not just marketing pages." },
  { title: "API Integration", description: "Connecting a site or app to payment providers, maps, third-party data, and other services." },
  { title: "AI Feature Integration", description: "Adding AI-powered features — chat, search, recommendations — into an existing product." },
  { title: "Progressive Web Apps (PWA)", description: "Installable, app-like experiences that work offline and load instantly on repeat visits." },
  { title: "CMS / E-commerce Platforms", description: "Builds on WordPress and Shopify for clients who need a platform they can manage themselves." },
  { title: "Ongoing Support / Retainer", description: "A standing arrangement for regular updates, fixes, and small feature work — billed monthly rather than per task." },
];

export const skills = [
  {
    group: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Redux / Zustand", "Framer Motion", "SASS/SCSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Firebase", "Supabase", "REST APIs", "GraphQL", "PostgreSQL", "Prisma", "JWT / Auth"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Postman", "Docker", "npm / yarn", "Netlify", "ESLint & Prettier", "Vite", "Jest / React Testing Library", "GitHub Actions", "Stripe", "Insomnia", "Linux / CLI"],
  },
];

export const projects = [
  {
    title: "Rosco — Crypto Paper Trading Simulator",
    status: "Shipped · PWA",
    description: "A full progressive web app for practicing crypto trading with zero real risk. Live prices from the CoinGecko API, TradingView Lightweight Charts with live-ticking candles and OHLCV hover tooltips across eight timeframes, a $10,000 virtual starting balance, and session-based auth. Installable as a PWA with a full icon set and service worker.",
    stack: ["JavaScript", "CoinGecko API", "TradingView Charts", "Service Worker", "PWA"],
    link: "https://rosisky527.github.io/rosco_pwa/",
linkLabel: "Try it live",
  },
  {
    title: "Dungeon Quest — RPG Game",
    status: "Shipped · Live",
    description: "A browser-based RPG built around ES6 classes and factory functions — character stats, combat logic, and game state managed entirely in vanilla JavaScript, deployed as a static site.",
    stack: ["JavaScript (ES6)", "OOP", "GitHub Pages"],
    link: "https://rosisky527.github.io/fact_project/",
    linkLabel: "Play it live",
  },
  {
    title: "Pokémon Finder",
    status: "Shipped",
    description: "A lookup tool built on the public PokéAPI, using async/await to handle live data fetching and rendering without blocking the UI.",
    stack: ["JavaScript", "PokéAPI", "Async/Await"],
    link: "https://rosisky527.github.io/pokemon-finder/",
linkLabel: "Try it live",
  },
  {
    title: "Object Detection Model",
    status: "Self-directed",
    description: "A YOLO-based object detection model trained and evaluated with PyTorch, built as a self-directed deep dive into computer vision fundamentals.",
    stack: ["Python", "PyTorch", "YOLO"],
    link: "https://github.com/Rosisky527",
    linkLabel: "View on GitHub",
  },
  {
    title: "Algorithmic Trading Prototype",
    status: "Self-directed",
    description: "A Python prototype exploring rules-based algorithmic trading strategies — signal logic, backtesting mechanics, and position sizing.",
    stack: ["Python", "Backtesting"],
    link: "https://github.com/Rosisky527",
    linkLabel: "View on GitHub",
  },
];
