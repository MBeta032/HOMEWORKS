import BinaryTreeControl from "../components/challenge-08/BinaryTreeControl"
import BinaryTreeVisualizer from "../algorithms/BinaryTreeVisualizer"
import TraversalResults from "../components/challenge-08/TraversalResults"
import { BinaryTreeProvider } from "../context/BinaryTreeContext"
import { useBinaryTree } from "../hooks/useBinaryTree"

const BinaryTreeContent = () => {
  const {
    values,
    preorder,
    inorder,
    postorder,
    addValue,
    containsValue,
    resetTree,
    tree,
  } = useBinaryTree()

  return (
    <main className="binary-tree-page">
      <section className="binary-tree-hero">
        <h1>Challenge 08 — Binary Trees</h1>
        <p>
          Inserta números, revisa los recorridos y visualiza la estructura del
          árbol binario.
        </p>
      </section>

      <section className="binary-tree-grid">
        <BinaryTreeControl
          values={values}
          onAddValue={addValue}
          onSearchValue={containsValue}
          onResetTree={resetTree}
        />

        <TraversalResults
          preorder={preorder}
          inorder={inorder}
          postorder={postorder}
        />
      </section>

      <BinaryTreeVisualizer root={tree.getRoot()} />
    </main>
  )
}

const BinaryTree = () => {
  return (
    <BinaryTreeProvider>
      <BinaryTreeContent />
    </BinaryTreeProvider>
  )
}

export default BinaryTree