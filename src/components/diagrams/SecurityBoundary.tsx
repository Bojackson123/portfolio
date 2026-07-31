const sides = [
  {
    lane: 'Read',
    server: 'Context MCP',
    identity: 'Impersonates the user (domain-wide delegation)',
    scope: 'Read only',
    target: 'Gmail · Drive · Docs · Chat',
    targetNote: 'the user’s own data',
  },
  {
    lane: 'Write',
    server: 'Action MCP',
    identity: 'Its own service account',
    scope: 'One Shared Drive',
    target: 'Shared Drive',
    targetNote: 'agent output',
  },
]

/**
 * The security boundary. Here brass is the wall rather than the path — the
 * point of the project is the thing that does *not* connect.
 */
export function SecurityBoundary() {
  return (
    <figure className="rounded-card border border-rule bg-graphite/40 p-5 sm:p-7">
      <figcaption className="eyebrow mb-6">Security boundary</figcaption>

      <div className="rounded-card border border-rule bg-elevated/60 px-4 py-3 text-center">
        <span className="font-mono text-[0.8125rem] text-paper">Agent</span>
        <span className="mt-0.5 block font-mono text-[0.6875rem] text-mute">
          Google ADK · Gemini 2.5 Flash
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {sides.map((side, i) => (
          <div
            key={side.lane}
            className={
              i === 1
                ? 'border-t-2 border-brass pt-5 sm:border-t-0 sm:border-l-2 sm:pt-0 sm:pl-6'
                : 'pb-5 sm:pr-6 sm:pb-0'
            }
          >
            <p className="pt-5 text-center font-mono text-[0.6875rem] tracking-widest text-brass uppercase">
              {side.lane}
            </p>

            <div className="mt-4 rounded-card border border-rule bg-ink px-4 py-3">
              <span className="block font-mono text-[0.8125rem] text-paper">
                {side.server}
              </span>
              <span className="mt-1 block font-mono text-[0.6875rem] leading-relaxed text-mute">
                {side.identity}
              </span>
              <span className="mt-2 inline-block rounded-sm border border-brass/40 px-1.5 py-0.5 font-mono text-[0.625rem] tracking-wide text-brass uppercase">
                {side.scope}
              </span>
            </div>

            <div className="mt-3 rounded-card border border-rule border-dashed px-4 py-3">
              <span className="block font-mono text-[0.8125rem] text-paper">
                {side.target}
              </span>
              <span className="mt-0.5 block font-mono text-[0.6875rem] text-mute">
                {side.targetNote}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-rule pt-4 font-mono text-[0.6875rem] leading-relaxed text-mute">
        Nothing crosses the line. The identity that can read the user’s data cannot
        write anywhere, and the identity that can write has never seen it.
      </p>
    </figure>
  )
}
