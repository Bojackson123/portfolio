export type Entry = {
  year: string
  period: string
  title: string
  org: string
  location?: string
  points: string[]
}

export const experience: Entry[] = [
  {
    year: '2026',
    period: 'May 2026 — present',
    title: 'AI Solutions Analyst',
    org: 'Sanmina',
    location: 'Huntsville, AL',
    points: [
      'Design custom AI workflows across the Google Workspace ecosystem in Python and Apps Script, replacing manual processes in manufacturing departments.',
      'Integrate Gemini and Vertex AI into existing business systems, taking administrative bottlenecks from prototype to full implementation.',
      'Act as the primary AI subject-matter expert for cross-functional teams, and hold the testing and documentation standard for what ships.',
    ],
  },
  {
    year: '2025',
    period: 'Apr 2025 — May 2026',
    title: 'Full-Stack Software Engineer / Application Analyst II',
    org: 'QatarEnergy LNG',
    location: 'Doha, Qatar',
    points: [
      'Co-led end-to-end delivery of two concurrent $2M projects in a regulated environment — 20+ on-time deployments and three production go-lives.',
      'Cut application response times from ten seconds to one, and set the reusable React and TypeScript UI standards for a six-developer team.',
      'Architected a Playwright QA framework, and built AI proof-of-concepts with LangChain, n8n and Azure AI Foundry that informed senior leadership on AI adoption.',
    ],
  },
  {
    year: '2024',
    period: 'Dec 2021 — Jul 2024',
    title: 'BSc Computer Science',
    org: 'University of Sussex',
    location: 'United Kingdom',
    points: [
      'Upper Second-Class Honours (2:1), 3.5 GPA.',
      'Dissertation — “Time Flies”, at the intersection of artificial intelligence and neuroscience.',
    ],
  },
  {
    year: '2021',
    period: 'Jan 2021 — May 2021',
    title: 'IT Specialist, Internship',
    org: 'Hamad Medical Corporation',
    location: 'Doha, Qatar',
    points: [
      'Supported hospital IT infrastructure, CCTV networks, database systems and medical equipment connectivity using Python and role-based access control.',
    ],
  },
]

export type Recognition = {
  name: string
  award: string
  event: string
  /** Rendered only when set — never assert a role on a team project. */
  role?: string
  detail: string
  /**
   * Rendered as a mosaic: the first image is the square tile on the left, the
   * rest stack down the right. Order matters.
   */
  images: { src: string; alt: string; width: number; height: number }[]
}

export const recognition: Recognition[] = [
  {
    name: 'OryxMed',
    award: 'Third place, Launchpad track · 30,000 QAR',
    event: 'Health Tech Hackathon 2025 · Qatar University, Doha',
    detail:
      'Hospitals, clinics, labs and imaging centres each hold a fragment of a patient’s record, in their own format. OryxMed pulls them into one real-time view — normalising to FHIR and automating the mapping, validation, deduplication and quality checks that usually make integration work stall — and runs alongside existing systems rather than replacing them. The placement came with a slot presenting the work on stage at World Summit AI Qatar.',
    images: [
      {
        src: '/recognition/oryxmed-1.webp',
        alt: 'The OryxMed team on stage at World Summit AI Qatar, holding the 30,000 QAR cheque for third place in the Health Tech Hackathon Launchpad track',
        width: 1000,
        height: 958,
      },
      {
        src: '/recognition/oryxmed-2.webp',
        alt: 'Rashid Al-Marri presenting OryxMed on stage at World Summit AI Qatar',
        width: 900,
        height: 506,
      },
      {
        src: '/recognition/oryxmed-3.webp',
        alt: 'Health Tech Hackathon participants gathered on stage at World Summit AI Qatar',
        width: 900,
        height: 506,
      },
    ],
  },
]

export type Certification = {
  name: string
  issuer: string
  period: string
  detail: string
}

export const certifications: Certification[] = [
  {
    name: 'Artificial Intelligence and Machine Learning',
    issuer: 'Caltech CTME',
    period: 'Sep — Oct 2025',
    detail:
      '240-hour in-person program across deep learning, NLP, generative AI and RAG. Led a 7-member capstone team building a time-series forecasting dashboard for seasonal staffing; recognised as a top-performing submission.',
  },
  {
    name: 'ITIL 4 Foundation',
    issuer: 'PeopleCert',
    period: 'Dec 2025 — Jan 2026',
    detail:
      'IT service management, continuous improvement and the delivery of high-quality technical services.',
  },
]
