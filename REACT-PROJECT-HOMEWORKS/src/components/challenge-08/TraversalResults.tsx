type TraversalResultsProps = {
  preorder: number[]
  inorder: number[]
  postorder: number[]
}

const TraversalResults = ({
  preorder,
  inorder,
  postorder,
}: TraversalResultsProps) => {
  return (
    <section className="binary-tree-card">
      <h2>Recorridos del árbol</h2>

      <div className="binary-tree-box">
        <h3>Preorder</h3>
        <p>{preorder.join(" - ")}</p>
      </div>

      <div className="binary-tree-box">
        <h3>Inorder</h3>
        <p>{inorder.join(" - ")}</p>
      </div>

      <div className="binary-tree-box">
        <h3>Postorder</h3>
        <p>{postorder.join(" - ")}</p>
      </div>
    </section>
  )
}

export default TraversalResults