// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file; the pages update.
//  Items marked TODO need your real details before going live.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Vigin V P',
  firstName: 'Vigin',
  roles: ['Full Stack Developer', 'Spec-driven · AI-assisted'],
  intro:
    'I build scalable web applications, solve real-world problems, and use modern engineering practices to ship software that is efficient and reliable.',
  location: 'Thiruvananthapuram, India',
  email: 'vpvigin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vigin-v-p-2403b8115',
  github: 'https://github.com/viginvp1995',
  resume: 'resume.pdf', // TODO: drop your resume at public/resume.pdf
  avatar: 'profile.jpg', // drop your photo at public/profile.jpg; leave empty to hide
  tagline: ['Better code.', 'Smarter solutions.', 'A brighter future.'],
};

export const about = {
  paragraphs: [
    "I'm a full stack developer with 8+ years of experience building and maintaining software, with a strong foundation in Node.js, TypeScript, backend architecture, and frontend development with React.",
    'I work across the whole development lifecycle: understanding requirements, designing solutions, building, testing, deploying, and maintaining them. I enjoy untangling complex problems, working with modern tools, and getting a little better every release.',
  ],
  highlights: [
    { value: '8+', label: 'Years of experience' },
    { value: 'Full stack', label: 'Node.js, NestJS and React' },
    { value: 'Problem solver', label: 'And team player' },
    { value: 'Always learning', label: 'AI tools, SDD, new stacks' },
  ],
};

// `icon` is a simple-icons export name (https://simpleicons.org). Leave it
// out and the badge shows the name alone.
export const skills: { name: string; icon?: string }[] = [
  { name: 'React', icon: 'siReact' },
  { name: 'TypeScript', icon: 'siTypescript' },
  { name: 'Node.js', icon: 'siNodedotjs' },
  { name: 'NestJS', icon: 'siNestjs' },
  { name: 'Express.js', icon: 'siExpress' },
  { name: 'JavaScript', icon: 'siJavascript' },
  { name: 'Python', icon: 'siPython' },
  { name: 'MongoDB', icon: 'siMongodb' },
  { name: 'PostgreSQL', icon: 'siPostgresql' },
  { name: 'MySQL', icon: 'siMysql' },
  { name: 'Redis', icon: 'siRedis' },
  { name: 'AWS', icon: 'siAmazonwebservices' },
  { name: 'GCP', icon: 'siGooglecloud' },
  { name: 'Docker', icon: 'siDocker' },
  { name: 'Jest', icon: 'siJest' },
  { name: 'Cypress', icon: 'siCypress' },
  { name: 'Git', icon: 'siGit' },
  { name: 'CI/CD', icon: 'siGithubactions' },
  { name: 'Linux', icon: 'siLinux' },
];

export const approaches = [
  {
    icon: 'spark',
    title: 'AI-assisted development',
    body: 'Using AI tools and agents to move faster, raise code quality, and take the busywork out of development.',
  },
  {
    icon: 'doc',
    title: 'Spec-driven development (SDD)',
    body: 'Turning requirements into clear, structured specifications first, so the implementation is consistent and verifiable.',
  },
  {
    icon: 'seed',
    title: 'Seed engineering',
    body: 'Starting projects on AI-native workflows, reusable patterns, and modern tooling so they grow cleanly as they scale.',
  },
  {
    icon: 'people',
    title: 'Forward deployed engineering (FDE)',
    body: 'Working directly on customer problems: building the software, staying close to the people using it, and iterating with them.',
  },
];

// `accent` tints the generated preview. Add `image: 'projects/gsb.png'`
// (file in public/projects/) to show a real screenshot instead.
// Add `url` to make "View project" link somewhere.
export const projects: {
  name: string;
  stack: string[];
  body: string;
  accent: string;
  image?: string;
  url?: string;
}[] = [
  {
    name: 'Global Seal of Biliteracy',
    stack: ['NestJS', 'React', 'TypeScript', 'MongoDB'],
    body: 'Platform for issuing and validating language proficiency certificates in 100+ languages, used by students, schools, and employers worldwide. I owned both backend and frontend: React partner dashboards, role-based access, multi-step authentication, and a certificate PDF generation pipeline with Unicode-safe rendering for every supported language.',
    accent: '#4C8DFF',
    url: 'https://theglobalseal.com',
  },
  {
    name: 'KSFE Pravasi Chits',
    stack: ['Node.js', 'React', 'MongoDB'],
    body: 'Online chit fund platform for Non-Resident Keralites — the digital channel for a state-run institution serving 65 lakh+ customers. Backend work spanned KYC with proof-of-residency, UPI and internet-banking payment integrations, and the real-time online auction room where chit prizes are bid.',
    accent: '#2EC4B6',
    url: 'https://pravasi.ksfe.com',
  },
  {
    name: 'LODE',
    stack: ['Node.js', 'React', 'PostgreSQL'],
    body: 'Digital gold and silver trading platform where each token ($AUX, $AGX) is backed by physical bullion vaulted with Brinks. Built services that reconcile on-chain issuance with off-chain inventory, audits, and payouts.',
    accent: '#F5B841',
    url: 'https://lode.one',
  },
];

// Newest first. Shown as a timeline.
export const experience = [
  {
    company: 'InApp Information Technologies',
    role: 'Lead Backend Engineer, Development Head (Systems Analyst Engineer)',
    period: 'Aug 2021 – Present',
    location: 'Thiruvananthapuram, India',
    points: [
      'Own end-to-end delivery across the full SDLC — requirements, design, build, release, and support — for client web platforms in Node.js, TypeScript, and NestJS.',
      'Currently lead a team of 3 engineers; previously led a team of 6, setting backend architecture and engineering standards across projects.',
      'Shipped a certificate PDF generation pipeline for a language-proficiency platform used worldwide, with Unicode-safe rendering across 100+ languages.',
      'Design REST APIs on AWS/GCP backed by MongoDB, PostgreSQL, MySQL, and Redis; own testing, CI/CD, and security practices.',
      'Partner directly with stakeholders — from scoping requirements through production support.',
    ],
  },
  {
    company: 'Accubits Technologies',
    role: 'Software Engineer',
    period: 'Oct 2018 – Aug 2021',
    location: 'Thiruvananthapuram, India',
    points: [
      'Built and maintained web applications and backend services in Node.js across multiple client projects.',
      'Delivered features end to end — from requirements and implementation through QA, deployment, and bug fixes.',
    ],
  },
];

export const caseStudy = {
  project: 'Global Seal of Biliteracy',
  tag: 'Spec-driven · AI-assisted',
  summary:
    'A language-proficiency platform where I owned backend and the React frontend, including a Unicode-safe certificate PDF pipeline for 100+ languages.',
  blocks: [
    {
      heading: 'Spec first',
      body: 'Every feature started as a structured spec — intent, interfaces, data shapes, acceptance criteria. The spec became the contract between frontend, backend, and QA, so there was no drift between what was asked and what shipped.',
    },
    {
      heading: 'AI-assisted implementation',
      body: 'With the spec in hand, AI tools scaffolded routes, schemas, tests, and PDF rendering logic. I spent my time on the parts that actually needed judgement: edge cases, security, Unicode behaviour, and review.',
    },
    {
      heading: 'Verifiable at every step',
      body: 'Because acceptance criteria were written upfront, tests and reviews lined up with intent. Fewer round-trips, less re-work, cleaner handoffs between people and tools.',
    },
  ],
  outcome: {
    stat: '~40%',
    label: 'reduction in development time versus comparable prior work',
  },
};
