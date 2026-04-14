import { useLocation } from 'react-router-dom'
import { MenuContent } from '../components/menu-tree/MenuContent'
import { SidebarMenu } from '../components/menu-tree/SideBarMenu'
import Header from '../components/shared/Header'
import Button from '../components/shared/Button'
import { useMenuTree } from '../context/MenuTreeContext'

function MenuTree() {
  const location = useLocation()

  const {
    tree,
    loading,
    error,
    resetMenu,
    getItemByLink
  } = useMenuTree()

  const currentItem = getItemByLink(location.pathname)

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
            <div className="toolbar toolbar-clean">
              <div>
                <h1 className="page-title">Panel de navegación</h1>
                <p className="page-subtitle">
                  Explora cada sección del menú y observa cómo cambia el contenido
                  como si fueran páginas reales dentro del sistema.
                </p>
              </div>

              <Button onClick={resetMenu} className="secondary-button">
                Restablecer menú
              </Button>
            </div>

            {error && <p className="error-message">{error}</p>}

            <MenuContent item={currentItem} />
          </section>
        </div>
      </main>
    </>
  )
}

export { MenuTree }