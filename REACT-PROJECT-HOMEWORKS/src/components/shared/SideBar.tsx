import { NavLink } from "react-router-dom";

interface SidebarItem {
  path: string;
  label: string;
  description: string;
}

const sidebarItems: SidebarItem[] = [
  {
    path: "/buscar",
    label: "Buscar música",
    description: "Encuentra canciones rápidamente",
  },
  {
    path: "/ranking",
    label: "Más populares",
    description: "Consulta las canciones destacadas",
  },
  {
    path: "/recomendaciones",
    label: "Recomendaciones",
    description: "Descubre canciones similares",
  },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menú</h2>

      <nav className="sidebar__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"
          }
        >
          <strong>Inicio</strong>
          <span>Resumen general</span>
        </NavLink>

        {sidebarItems.map((item: SidebarItem) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar__item sidebar__item--active"
                : "sidebar__item"
            }
          >
            <strong>{item.label}</strong>
            <span>{item.description}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}