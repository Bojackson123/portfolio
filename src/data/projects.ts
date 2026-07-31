export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  name: string
  tagline: string
  /** 2–4 sentences, first person, written to be read rather than skimmed past. */
  summary: string
  /** The mono metadata rail. Keys encode something true, not decoration. */
  meta: { key: string; value: string }[]
  stack: string[]
  links: ProjectLink[]
  /** Flagships render a schematic; supporting work does not. */
  diagram?: 'signal-path' | 'dispatch'
  /** A second schematic, rendered full width below the two columns. */
  wideDiagram?: 'security-boundary'
  image?: { src: string; alt: string; width: number; height: number }
  /** Thumbnail strip, for work whose evidence is several small things. */
  gallery?: { src: string; alt: string; label: string; href: string }[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'sentinel',
    name: 'Sentinel',
    tagline: 'Multi-tenant IoT monitoring for grinder pumps in the field',
    summary:
      'I built Sentinel end to end — the firmware on the device, the cloud pipeline that ingests its telemetry, and the dashboard operators watch it on. These pumps sit underground across a utility’s service area, and when one fails quietly someone’s basement floods. Sentinel’s whole job is to notice first: it watches electrical signatures for the shape of a failing pump, escalates through email and SMS until a human acknowledges, and flags devices that have simply gone silent.',
    meta: [
      { key: 'Role', value: 'Solo — firmware to frontend' },
      { key: 'Period', value: '2026' },
      { key: 'Scale', value: '4 services · 150+ tests' },
    ],
    stack: [
      '.NET 9',
      'Azure IoT Hub',
      'Event Hubs',
      'EF Core 9',
      'Azure SQL',
      'React 19',
      'TanStack',
      'Arduino',
    ],
    links: [
      { label: 'Live dashboard', href: 'https://sentinel-frontend-beige.vercel.app' },
      { label: 'Backend', href: 'https://github.com/Bojackson123/SentinelBackend' },
      { label: 'Frontend', href: 'https://github.com/Bojackson123/SentinelFrontend' },
      { label: 'Firmware', href: 'https://github.com/Bojackson123/SentinelFirmware' },
    ],
    diagram: 'signal-path',
    image: {
      src: '/work/sentinel-dashboard.webp',
      alt: 'Sentinel dashboard showing fleet status, active alarms and device telemetry',
      width: 1600,
      height: 1000,
    },
    featured: true,
  },
  {
    id: 'workflow-engine',
    name: 'Agentic Workflow Engine',
    tagline: 'A workflow engine for agents, living inside Google Workspace',
    summary:
      'An engine that turns a slash command in Google Chat into an agent run. Each workflow is a self-contained module that declares its command, its access policy and a factory returning its own agent — so adding a capability means dropping in a file, never touching the dispatcher. The engine itself stays deliberately thin: resolve the command, build the agent, run it, post back to the thread. Around that sit the parts an internal tool actually needs — per-workflow access rules, sessions that survive a multi-turn conversation, and background dispatch so nothing dies against Chat’s 30-second webhook timeout. And because these workflows read someone’s real inbox, context and actions run under two separate identities: the half that can read has no ability to write anywhere.',
    meta: [
      { key: 'Role', value: 'Solo — architecture and build' },
      { key: 'Period', value: '2026' },
      { key: 'Design', value: 'Workflows are drop-in modules; the dispatcher stays thin' },
    ],
    stack: [
      'Google ADK',
      'MCP',
      'Vertex AI',
      'Gemini 2.5 Flash',
      'Google Chat',
      'FastAPI',
      'Python 3.12',
    ],
    links: [
      { label: 'Source', href: 'https://github.com/Bojackson123/Acme-Agentic-PoC' },
    ],
    diagram: 'dispatch',
    image: {
      src: '/work/workflow-engine-chat.webp',
      alt: 'The workflow engine answering a slash command in a Google Chat thread',
      width: 1200,
      height: 900,
    },
    wideDiagram: 'security-boundary',
    featured: true,
  },
  {
    id: 'qatarenergy',
    name: 'QatarEnergy LNG',
    tagline: 'Two $2M platforms, three go-lives, 5,000+ users',
    summary:
      'I co-led delivery of two concurrent $2M applications in a regulated environment — 20+ deployments, three production go-lives, and SME ownership of business-critical systems. I cut application response times from ten seconds to one, set the React and TypeScript UI standards a six-developer team built against, and architected the Playwright suite that kept releases honest.',
    meta: [
      { key: 'Role', value: 'Co-lead · Full-stack engineer' },
      { key: 'Period', value: 'Apr 2025 – May 2026' },
      { key: 'Scale', value: '5,000+ internal users' },
    ],
    stack: ['C#', '.NET', 'React', 'TypeScript', 'SQL', 'Playwright', 'Azure'],
    links: [],
  },
  {
    id: 'concept-sites',
    name: 'Concept sites',
    tagline: 'Three builds for local businesses, made on spec',
    summary:
      'Cold outreach works better with something already built. I picked three businesses on the Alabama Gulf Coast, built each of them a real site, and sent it over. None of them bit — but all three are live, fast and finished, which is more than a pitch deck ever is.',
    meta: [
      { key: 'Role', value: 'Design and build' },
      { key: 'Period', value: '2026' },
      { key: 'Note', value: 'Self-initiated — not client work' },
    ],
    stack: ['TanStack Start', 'TypeScript', 'React', 'Tailwind CSS'],
    links: [],
    gallery: [
      {
        src: '/work/concept-dragonfly.webp',
        alt: 'Dragonfly Tavern homepage — tacos and cocktails in Daphne, Alabama',
        label: 'Dragonfly Tavern',
        href: 'https://dragonflytavern.vercel.app',
      },
      {
        src: '/work/concept-waterfront.webp',
        alt: 'The Waterfront homepage — coastal dining on Mobile Bay',
        label: 'The Waterfront',
        href: 'https://waterfrontdaphne.vercel.app',
      },
      {
        src: '/work/concept-tops.webp',
        alt: 'Top’s Food Truck homepage — soul food in Mobile, Alabama',
        label: 'Top’s Food Truck',
        href: 'https://topsfoodtruck.vercel.app',
      },
    ],
  },
  {
    id: 'time-flies',
    name: 'Time Flies',
    tagline: 'Making a subjective-time model usable by the researchers who need it',
    summary:
      'My dissertation, built with Dr. Warrick Roseboom’s Time Storm group at Sussex. Their model, Time Without Clocks, predicts not how long a video was, but how long a person will feel it lasted. I wrapped it in a web application researchers could actually run studies through — upload pipeline, storage, model hosting — and fine-tuned the model itself onto a more modern backbone.',
    meta: [
      { key: 'Role', value: 'Full-stack and ML' },
      { key: 'Period', value: '2024' },
      { key: 'Context', value: 'BSc dissertation, University of Sussex' },
    ],
    stack: ['PyTorch', 'Python', 'TypeScript', 'React'],
    links: [
      { label: 'Read the report', href: '/time-flies-report.pdf' },
      { label: 'Frontend', href: 'https://github.com/Bojackson123/Time-Flies-Frontend' },
      { label: 'Model', href: 'https://github.com/Bojackson123/Time-Without-Clocks-PyTorch' },
    ],
  },
]
