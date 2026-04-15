import type { FileNodeData } from "../../algorithms/FileNode"

interface FileTreeViewProps {
  node: FileNodeData
}

function TreeItem({ node }: FileTreeViewProps) {
  return (
    <li className="tree-node">
      <div className={`tree-item ${node.value.type}`}>
        <span className="tree-icon">
          {node.value.type === "folder" ? "📁" : "📄"}
        </span>

        <div className="tree-info">
          <p>{node.value.name}</p>
          <small>Creado por: {node.value.createdBy}</small>
        </div>
      </div>

      {node.children.length > 0 && (
        <ul className="tree-children">
          {node.children.map(child => (
            <TreeItem key={child.value.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function FileTreeView({ node }: FileTreeViewProps) {
  return (
    <section className="panel-card">
      <h2>Estructura</h2>

      <ul className="tree-root">
        <TreeItem node={node} />
      </ul>
    </section>
  )
}