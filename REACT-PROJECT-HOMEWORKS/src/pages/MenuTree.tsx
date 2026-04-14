import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MenuContent } from "../components/menu-tree/MenuContent"
import { SidebarMenu } from "../components/menu-tree/SideBarMenu"
import { TraversalResults } from "../components/menu-tree/TraversalResults"
import Header from "../components/shared/Header"
import Button from "../components/shared/Button"
import { useMenuTree } from "../context/MenuTreeContext"

function MenuTree() {
  const location = useLocation()

  const {
    tree,
    dfsValues,
    bfsValues,
    hierarchyLines,
    loading,
    error,
    resetMenu,
    getItemByLink
  } = useMenuTree()

  const currentItem = getItemByLink(location.pathname)

  useEffect(() => {
    console.log("DFS:", dfsValues.map(item => item.title))
    console.log("BFS:", bfsValues.map(item => item.title))
    console.log("Jerarquía:")
    console.log(hierarchyLines.join("\n"))
  }, [dfsValues, bfsValues, hierarchyLines])

  if (loading) {
    return (
      <>
        <Header />
        <p className="status-message">Cargando menú desde Firebase...</p>
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="menu-tree-page">
        <div className="menu-tree-layout">
          <SidebarMenu tree={tree} />

          <section className="menu-tree-main">
            <div className="toolbar">
              <div>
                <p className="badge">Árbol n-ario</p>
                <h1>Sidebar generado desde Firebase</h1>
              </div>

              <Button onClick={resetMenu} className="secondary-button">
                Restablecer menú
              </Button>
            </div>

            {error && <p className="error-message">{error}</p>}

            <MenuContent item={currentItem} />

            <TraversalResults
              dfsTitles={dfsValues.map(item => item.title)}
              bfsTitles={bfsValues.map(item => item.title)}
              hierarchyLines={hierarchyLines}
            />
          </section>
        </div>
      </main>
    </>
  )
}

export { MenuTree }