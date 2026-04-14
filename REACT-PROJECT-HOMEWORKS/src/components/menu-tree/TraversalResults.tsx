function TraversalResults({
  dfsTitles,
  bfsTitles,
  hierarchyLines
}: {
  dfsTitles: string[]
  bfsTitles: string[]
  hierarchyLines: string[]
}) {
  return (
    <section className="results-grid">
      <article className="result-card">
        <h3>DFS</h3>
        <p>{dfsTitles.join(' → ')}</p>
      </article>

      <article className="result-card">
        <h3>BFS</h3>
        <p>{bfsTitles.join(' → ')}</p>
      </article>

      <article className="result-card">
        <h3>Jerarquía</h3>
        <pre>{hierarchyLines.join('\n')}</pre>
      </article>
    </section>
  )
}

export { TraversalResults }