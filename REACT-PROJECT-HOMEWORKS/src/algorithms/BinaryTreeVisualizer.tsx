import Tree from "react-d3-tree"
import type { TreeNode } from "./TreeNode"
import { binaryTreeToD3 } from "./binaryTreeToD3"

type BinaryTreeVisualizerProps = {
  root: TreeNode | null
}

const BinaryTreeVisualizer = ({ root }: BinaryTreeVisualizerProps) => {
  const treeData = binaryTreeToD3(root)

  if (!treeData) {
    return (
      <section className="binary-tree-card">
        <h2>Visualización del árbol</h2>
        <p>No hay nodos para mostrar.</p>
      </section>
    )
  }

  return (
    <section className="binary-tree-card">
      <h2>Visualización del árbol</h2>

      <div className="binary-tree-visualizer">
        <Tree
          data={treeData}
          orientation="vertical"
          translate={{ x: 300, y: 80 }}
          collapsible={false}
          pathFunc="step"
          rootNodeClassName="node-root"
          branchNodeClassName="node-branch"
          leafNodeClassName="node-leaf"
        />
      </div>
    </section>
  )
}

export default BinaryTreeVisualizer