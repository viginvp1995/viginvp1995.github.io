// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file; the pages update.
//  Items marked TODO need your real details before going live.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Vigin V P',
  firstName: 'Vigin',
  roles: ['Full Stack Developer', 'AI-Assisted Engineer', 'SDD Engineer', 'Seed Engineer', 'FDE'],
  intro:
    'I build scalable web applications, solve real-world problems, and use modern engineering practices to ship software that is efficient and reliable.',
  location: 'Thiruvananthapuram, India',
  email: 'vpvigin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vigin-v-p-2403b8115',
  github: 'https://github.com/viginvp1995',
  resume: 'resume.pdf', // TODO: drop your resume at public/resume.pdf
  tagline: ['Better code.', 'Smarter solutions.', 'A brighter future.'],
};

export const about = {
  paragraphs: [
    "I'm a full stack developer with 8 years of experience building and maintaining software, with a strong foundation in Node.js, TypeScript, backend architecture, and frontend development with React.",
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
    stack: ['NestJS', 'TypeScript', 'MongoDB'],
    body: 'Platform for issuing and validating biliteracy certificates, with role-based access, multi-step authentication, and partner dashboards.',
    accent: '#4C8DFF',
    url: 'https://theglobalseal.com',
  },
  {
    name: 'KSFE Chits',
    stack: ['Node.js', 'React', 'MongoDB'],
    body: 'Chit fund management application with secure transactions and role-based workflows.',
    accent: '#2EC4B6',
  },
  {
    name: 'AccuCerts',
    stack: ['Blockchain', 'Node.js', 'React'],
    body: 'Certification platform that anchors certificates on a blockchain for transparent verification.',
    accent: '#A78BFA',
  },
  {
    name: 'LODE',
    stack: ['Node.js', 'React', 'PostgreSQL'],
    body: 'Digital gold and silver trading platform with secure transactions.',
    accent: '#F5B841',
  },
  {
    name: 'Smart Kids',
    stack: ['React', 'Node.js', 'MongoDB'],
    body: 'Learning platform for children with interactive content and progress tracking.',
    accent: '#FF7A90',
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
      'Lead backend development in Node.js, TypeScript, and NestJS across client platforms.',
      'Build REST APIs and services, integrated with cloud platforms (AWS, GCP).',
      'Work with MongoDB, PostgreSQL, MySQL, and Redis.',
      'Set up testing, CI/CD pipelines, and security practices.',
      'Work with cross-functional teams and stakeholders from requirements to release.',
    ],
  },
  {
    company: 'Accubits Technologies',
    role: 'Software Engineer',
    period: 'Oct 2018 – Aug 2021',
    location: 'Thiruvananthapuram, India',
    points: [
      'Built and maintained web applications and backend services in Node.js.',
      'Delivered client projects end to end, from requirements through deployment.', // TODO: add specifics
    ],
  },
];
