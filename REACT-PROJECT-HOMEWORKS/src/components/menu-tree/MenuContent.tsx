import type { IMenuItem } from '../../interfaces/IMenuItem'

function MenuContent({ item }: { item: IMenuItem | null }) {
  if (!item) {
    return (
      <section className="content-card">
        <h2>No hay contenido</h2>
        <p>No se encontró el ítem seleccionado.</p>
      </section>
    )
  }

  const contentMap: Record<string, { subtitle: string; description: string }> = {
    RootPanel: {
      subtitle: 'Raíz del árbol',
      description:
        'Este es el nodo raíz. Desde aquí salen las ramas principales del sidebar.'
    },
    DashboardPanel: {
      subtitle: 'Sección principal',
      description:
        'Este panel representa una opción principal del menú n-ario.'
    },
    ProductsPanel: {
      subtitle: 'Nodo padre',
      description:
        'Productos es un nodo padre porque contiene submenús como Crear producto y Lista de productos.'
    },
    CreateProductPanel: {
      subtitle: 'Nodo hijo',
      description:
        'Este es un submenú hijo de Productos. En el árbol se encuentra un nivel más abajo.'
    },
    ProductListPanel: {
      subtitle: 'Nodo hijo',
      description:
        'Otro submenú de Productos. Sirve para demostrar que un nodo puede tener varios hijos.'
    },
    UsersPanel: {
      subtitle: 'Nodo padre',
      description:
        'Usuarios también es un nodo padre porque tiene hijos como Administradores y Clientes.'
    },
    AdminsPanel: {
      subtitle: 'Nodo hijo',
      description:
        'Submenú hijo dentro de Usuarios.'
    },
    ClientsPanel: {
      subtitle: 'Nodo hijo',
      description:
        'Otro submenú hijo dentro de Usuarios.'
    },
    ReportsPanel: {
      subtitle: 'Nodo padre',
      description:
        'Reportes agrupa varias ramas secundarias como Ventas e Inventario.'
    },
    SalesPanel: {
      subtitle: 'Nodo hijo',
      description:
        'Este nodo representa una rama de reportes.'
    },
    StockPanel: {
      subtitle: 'Nodo hijo',
      description:
        'Este nodo representa otra rama de reportes.'
    }
  }

  const currentContent =
    contentMap[item.component] ?? {
      subtitle: 'Contenido dinámico',
      description:
        'Este contenido fue encontrado por el valor component del nodo actual.'
    }

  return (
    <section className="content-card">
      <p className="badge">{currentContent.subtitle}</p>
      <h2>{item.title}</h2>
      <p>
        <strong>Ruta:</strong> {item.link}
      </p>
      <p>
        <strong>Component:</strong> {item.component}
      </p>
      <p>{currentContent.description}</p>
    </section>
  )
}

export { MenuContent }