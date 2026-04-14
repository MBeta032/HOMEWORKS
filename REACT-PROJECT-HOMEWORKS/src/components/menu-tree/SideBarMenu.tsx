import { NavLink } from 'react-router-dom'
import { MenuTree, MenuTreeNode } from '../../algorithms/MenuTree'

function SidebarMenu({ tree }: { tree: MenuTree }) {
  if (!tree.root) {
    return (
      <aside className="sidebar">
        <p>No hay árbol para mostrar</p>
      </aside>
    )
  }

  return (
    <aside className="sidebar">
      <NavLink to={tree.root.item.link} className="sidebar-root-link">
        {tree.root.item.title}
      </NavLink>

      <ul className="sidebar-list">
        {tree.root.children.map(child => (
          <SidebarBranch key={child.item.id} node={child} />
        ))}
      </ul>
    </aside>
  )
}

function SidebarBranch({ node }: { node: MenuTreeNode }) {
  return (
    <li className="sidebar-item">
      <NavLink
        to={node.item.link}
        className={({ isActive }) =>
          isActive ? 'sidebar-link active' : 'sidebar-link'
        }
      >
        {node.item.title}
      </NavLink>

      {node.children.length > 0 && (
        <ul className="sidebar-children">
          {node.children.map(child => (
            <SidebarBranch key={child.item.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

export { SidebarMenu }