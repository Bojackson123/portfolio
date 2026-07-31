import { PathDiagram } from './PathDiagram'

const stages = [
  { label: 'Sensor', detail: 'current + status' },
  { label: 'LTE', detail: 'cellular uplink' },
  { label: 'IoT Hub', detail: 'auth + routing' },
  { label: 'Ingest', detail: 'dedupe + persist' },
  { label: 'API', detail: 'alarms + commands' },
  { label: 'Dashboard', detail: 'operators' },
]

/**
 * What it takes for a reading from a pump in the ground to reach a person.
 */
export function SignalPath() {
  return <PathDiagram title="Signal path" stages={stages} />
}
