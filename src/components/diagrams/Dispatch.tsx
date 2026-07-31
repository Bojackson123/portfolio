import { PathDiagram } from './PathDiagram'

const stages = [
  { label: 'Command', detail: 'slash or message' },
  { label: 'Verify', detail: 'JWT + access rules' },
  { label: 'Resolve', detail: 'workflow registry' },
  { label: 'Build', detail: 'agent factory' },
  { label: 'Run', detail: 'ADK session' },
  { label: 'Post', detail: 'back to thread' },
]

/** How a command in Chat becomes an agent run. */
export function Dispatch() {
  return (
    <PathDiagram
      title="Dispatch"
      stages={stages}
      note="Every workflow is a module declaring its command, its access policy and a factory that returns its own agent — an LlmAgent, a SequentialAgent pipeline, or a custom BaseAgent. The dispatcher never learns what any of them do."
    />
  )
}
