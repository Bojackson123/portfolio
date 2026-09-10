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
  diagram?: 'signal-path' | 'dispatch' | 'retrieval' | 'telemetry'
  /** A second schematic, rendered full width below the two columns. */
  wideDiagram?: 'security-boundary'
  image?: { src: string; alt: string; width: number; height: number }
  /** Thumbnail strip, for work whose evidence is several small things. */
  gallery?: { src: string; alt: string; label: string; href: string }[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'warrant',
    name: 'Warrant',
    tagline: 'Question answering over NIST SP 800-53, where every claim names the control that warrants it',
    summary:
      'Compliance answers are only useful if you can check them. Warrant embeds the full NIST SP 800-53 catalog — 1,014 controls from the OSCAL source — into Postgres with pgvector, retrieves the controls that bear on a question, and tags every sentence of the answer to the control ID that supports it, with the clause itself one click away. I chose the embedding model by measurement rather than habit: four candidates run on CPU against a 42-question golden set, with recall@5 and latency recorded for each. Recorded answer fixtures mean the whole pipeline replays deterministically, so the tests never need an API key.',
    meta: [
      { key: 'Role', value: 'Solo — corpus to console' },
      { key: 'Period', value: 'Aug 2026' },
      { key: 'Scale', value: '1,014 controls · 42-question golden set' },
      { key: 'Measure', value: 'recall@5 0.679 · retrieval under 80 ms' },
    ],
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'bge-base-en-v1.5',
      'OSCAL',
      'React',
      'TypeScript',
      'Vite',
      'Docker Compose',
    ],
    links: [{ label: 'Source', href: 'https://github.com/Bojackson123/warrant' }],
    diagram: 'retrieval',
    featured: true,
  },
  {
    id: 'meridian',
    name: 'Meridian Control Station',
    tagline: 'A ground station that tells you how old its data is',
    summary:
      'A ground control station for simulated uncrewed aircraft, built around one rule: the console says exactly what it last heard and never pretends otherwise. The MAVLink v2 codec is hand-written and verified byte-for-byte against pymavlink vectors; the aircraft flies in its own process and speaks UDP; an ASP.NET Core service ingests into a bounded twelve-vehicle store and streams it to a React and MapLibre console over Server-Sent Events. Nothing is interpolated — at three seconds without a heartbeat a marker goes stale with its age on screen, and at fifteen it is marked lost. The requirements table names the two items still unverified rather than smoothing them over.',
    meta: [
      { key: 'Role', value: 'Solo — codec to console' },
      { key: 'Period', value: 'Aug 2026' },
      { key: 'Scale', value: '12 simulated aircraft · 4 unit suites + Testcontainers' },
      { key: 'Design', value: 'Age is always visible; no colour-only states' },
    ],
    stack: [
      '.NET 10',
      'ASP.NET Core',
      'MAVLink v2',
      'UDP',
      'PostgreSQL 18',
      'Server-Sent Events',
      'React',
      'TypeScript',
      'MapLibre GL',
      'Testcontainers',
      'Docker Compose',
    ],
    links: [
      { label: 'Source', href: 'https://github.com/Bojackson123/meridian-control-station' },
    ],
    diagram: 'telemetry',
    image: {
      src: '/work/meridian-console.webp',
      alt: 'Meridian console showing twelve aircraft on a dark basemap, one marked stale in amber with a nine-second age counter',
      width: 1600,
      height: 792,
    },
    featured: true,
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    tagline: 'Multi-tenant IoT monitoring for grinder pumps in the field',
    summary:
      'I built Sentinel end to end — the firmware on the device, the cloud pipeline that ingests its telemetry, and the dashboard operators watch it on. These pumps sit underground across a utility’s service area, and when one fails quietly someone’s basement floods. Sentinel’s whole job is to notice first: it watches electrical signatures for the shape of a failing pump, escalates through email and SMS until a human acknowledges, and flags devices that have simply gone silent.',
    meta: [
      { key: 'Role', value: 'Solo — firmware to frontend' },
      { key: 'Period', value: '2026' },
      { key: 'Scale', value: '150 unit tests · 4 end-to-end' },
    ],
    stack: [
      '.NET 9',
      'Azure IoT Hub',
      'Event Hubs',
      'Service Bus',
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
    featured: true,
  },
  {
    id: 'workspace-agent',
    name: 'Workspace Agent',
    tagline: 'A dual-MCP enterprise assistant, living inside Google Workspace',
    summary:
      'An engine that turns a slash command in Google Chat into an agent run. Each workflow is a self-contained module that declares its command, its access policy and a factory returning its own agent — so adding a capability means dropping in a file, never touching the dispatcher. The engine itself stays deliberately thin: resolve the command, build the agent, run it, post back to the thread. Around that sit the parts an internal tool actually needs — per-workflow access rules, sessions that survive a multi-turn conversation, and background dispatch so nothing dies against Chat’s 30-second webhook timeout. And because these workflows read someone’s real inbox, context and actions run under two separate identities: the half that can read has no ability to write anywhere.',
    meta: [
      { key: 'Role', value: 'Solo — architecture and build' },
      { key: 'Period', value: '2026' },
      { key: 'Scale', value: '3 Cloud Run services' },
      { key: 'Design', value: 'Workflows are drop-in modules; the dispatcher stays thin' },
    ],
    stack: [
      'Google ADK',
      'MCP',
      'Vertex AI',
      'Gemini 2.5 Flash',
      'Google Chat',
      'FastAPI',
      'Cloud Run',
      'Python 3.12',
    ],
    links: [
      { label: 'Source', href: 'https://github.com/Bojackson123/Workspace-Agent' },
    ],
    diagram: 'dispatch',
    wideDiagram: 'security-boundary',
    featured: true,
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
