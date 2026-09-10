import { PathDiagram } from './PathDiagram'

const stages = [
  { label: 'Aircraft', detail: 'sim · kinematics' },
  { label: 'MAVLink v2', detail: 'hand-written codec' },
  { label: 'UDP', detail: 'own process' },
  { label: 'Ingest', detail: '12-vehicle ring buffer' },
  { label: 'SSE', detail: 'live stream' },
  { label: 'Console', detail: 'stale 3 s · lost 15 s' },
]

/** What a heartbeat from a simulated aircraft goes through before an operator sees it. */
export function Telemetry() {
  return (
    <PathDiagram
      title="Telemetry"
      stages={stages}
      note="The console never interpolates. A marker that has not heard from its aircraft in three seconds goes hollow amber with an age counter; at fifteen it becomes a dashed ring with no heading."
    />
  )
}
