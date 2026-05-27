interface SidebarItem {
  id: string;
  label: string;
  description: string;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "search",
    label: "Buscar música",
    description: "Encuentra canciones rápidamente",
  },
  {
    id: "ranking",
    label: "Más populares",
    description: "Consulta las canciones destacadas",
  },
  {
    id: "related",
    label: "Recomendaciones",
    description: "Descubre canciones similares",
  },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menú</h2>

      <nav className="sidebar__nav">
        {sidebarItems.map((item: SidebarItem) => (
          <a key={item.id} href={`#${item.id}`} className="sidebar__item">
            <strong>{item.label}</strong>
            <span>{item.description}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}