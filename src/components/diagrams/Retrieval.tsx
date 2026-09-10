import { PathDiagram } from './PathDiagram'

const stages = [
  { label: 'Catalog', detail: 'OSCAL · 1,014 controls' },
  { label: 'Embed', detail: 'bge-base · 768-d' },
  { label: 'Store', detail: 'Postgres + pgvector' },
  { label: 'Retrieve', detail: 'top-k · under 80 ms' },
  { label: 'Answer', detail: 'LLM, live or replay' },
  { label: 'Cite', detail: 'claim → control ID' },
]

/** How a question over NIST SP 800-53 becomes an answer that can prove itself. */
export function Retrieval() {
  return (
    <PathDiagram
      title="Retrieval"
      stages={stages}
      note="Recorded answer fixtures let the whole pipeline replay deterministically with no API key. The embedding model was chosen by measurement — four candidates on CPU against a 42-question golden set — not by default."
    />
  )
}
