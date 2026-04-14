import type { IMenuItem } from '../../interfaces/IMenuItem'

type ContentCard = {
  title: string
  value: string
  detail: string
}

type ContentSection = {
  title: string
  text: string
}

type ContentPage = {
  title: string
  intro: string
  heroText: string
  cards: ContentCard[]
  sections: ContentSection[]
  callout: string
  theme?: 'dashboard' | 'products' | 'users' | 'reports' | 'default'
}

function MenuContent({ item }: { item: IMenuItem | null }) {
  if (!item) {
    return (
      <section className="content-view theme-default">
        <div className="content-hero">
          <div>
            <h2>No hay contenido</h2>
            <p>No se encontró el ítem seleccionado.</p>
          </div>
        </div>
      </section>
    )
  }

  const contentMap: Record<string, ContentPage> = {
    RootPanel: {
      title: 'Bienvenido al panel principal',
      intro:
        'Esta es la vista inicial del sistema. Desde el menú lateral puedes moverte entre módulos informativos para ver cómo cambia cada sección.',
      heroText:
        'El objetivo aquí es que el sidebar se sienta como una navegación real, no como una simple lista técnica.',
      theme: 'default',
      cards: [
        {
          title: 'Secciones activas',
          value: '4 módulos',
          detail: 'Dashboard, Productos, Usuarios y Reportes'
        },
        {
          title: 'Submenús',
          value: '6 vistas',
          detail: 'Opciones secundarias conectadas al árbol n-ario'
        },
        {
          title: 'Navegación',
          value: 'Jerárquica',
          detail: 'Todo sale de la estructura padre-hijo del menú'
        }
      ],
      sections: [
        {
          title: '¿Qué representa esta vista?',
          text:
            'Representa el punto de entrada al sistema. En una aplicación real aquí podrías mostrar una bienvenida, estado general del negocio y accesos rápidos.'
        },
        {
          title: '¿Por qué se ve diferente?',
          text:
            'Porque ahora cada nodo del árbol carga contenido propio. Eso hace que el usuario perciba que está entrando a páginas distintas.'
        }
      ],
      callout:
        'Tip visual: haz clic en Productos, Usuarios o Reportes y notarás que el contenido del lado derecho cambia completamente.'
    },

    DashboardPanel: {
      title: 'Dashboard ejecutivo',
      intro:
        'Aquí se mostraría un resumen rápido del estado del sistema, con indicadores principales y una lectura general del negocio.',
      heroText:
        'Un dashboard sirve para que el usuario entienda en segundos qué está pasando sin entrar todavía a los detalles.',
      theme: 'dashboard',
      cards: [
        {
          title: 'Ventas del mes',
          value: '$18.4M',
          detail: 'Crecimiento estimado del 12% frente al mes anterior'
        },
        {
          title: 'Usuarios activos',
          value: '1,248',
          detail: 'Clientes y administradores con acceso reciente'
        },
        {
          title: 'Alertas',
          value: '3 pendientes',
          detail: 'Inventario bajo, pedidos demorados y actualización del reporte'
        }
      ],
      sections: [
        {
          title: 'Lectura rápida',
          text:
            'Esta página está pensada para toma de decisiones. Su valor principal es condensar información importante en un solo lugar.'
        },
        {
          title: 'Qué podría llevar después',
          text:
            'Gráficas, tendencias semanales, comparativos y accesos rápidos a módulos más detallados.'
        }
      ],
      callout:
        'En una app real, este sería probablemente el primer lugar que visita un administrador al iniciar sesión.'
    },

    ProductsPanel: {
      title: 'Gestión de productos',
      intro:
        'Esta sección agrupa todo lo relacionado con el catálogo, el registro y la consulta de productos dentro del sistema.',
      heroText:
        'Es un nodo padre dentro del árbol, así que funciona como contenedor de otras páginas más específicas.',
      theme: 'products',
      cards: [
        {
          title: 'Productos registrados',
          value: '86',
          detail: 'Incluye activos, pausados y en revisión'
        },
        {
          title: 'Nuevos esta semana',
          value: '9',
          detail: 'Creados por el equipo de catálogo'
        },
        {
          title: 'Pendientes de validar',
          value: '5',
          detail: 'Esperando revisión de información y precio'
        }
      ],
      sections: [
        {
          title: 'Enfoque de esta vista',
          text:
            'Más que mostrar un listado, esta página funciona como centro de organización para todas las acciones relacionadas con productos.'
        },
        {
          title: 'Relación con el árbol',
          text:
            'Desde aquí salen Crear producto y Lista de productos. Eso ayuda a demostrar la estructura jerárquica del menú.'
        }
      ],
      callout:
        'Piensa esta vista como una portada del módulo de productos, no como una tabla todavía.'
    },

    CreateProductPanel: {
      title: 'Crear nuevo producto',
      intro:
        'Esta vista simula una página enfocada en registrar un nuevo producto dentro del sistema.',
      heroText:
        'Aunque aquí no estamos creando un formulario funcional todavía, la página ya se comporta visualmente como un módulo específico.',
      theme: 'products',
      cards: [
        {
          title: 'Campos sugeridos',
          value: '6 básicos',
          detail: 'Nombre, categoría, precio, stock, estado y descripción'
        },
        {
          title: 'Tiempo estimado',
          value: '2 minutos',
          detail: 'Para un registro manual rápido'
        },
        {
          title: 'Estado esperado',
          value: 'Borrador',
          detail: 'Antes de ser publicado o validado'
        }
      ],
      sections: [
        {
          title: 'Qué debería hacer esta página',
          text:
            'Permitir capturar la información principal de un producto y prepararla para guardarse en la base de datos.'
        },
        {
          title: 'Por qué esta vista ayuda',
          text:
            'Porque ahora sí se siente como una página individual y no solo como un texto técnico repetido.'
        }
      ],
      callout:
        'Cuando quieras, el siguiente paso aquí podría ser convertir esta vista informativa en un formulario real.'
    },

    ProductListPanel: {
      title: 'Listado de productos',
      intro:
        'Esta vista representa una página enfocada en explorar el catálogo ya cargado en el sistema.',
      heroText:
        'El propósito visual es que parezca una página de consulta, con foco en orden, filtros y lectura rápida.',
      theme: 'products',
      cards: [
        {
          title: 'Productos visibles',
          value: '64',
          detail: 'Mostrados actualmente por estado activo'
        },
        {
          title: 'Categorías',
          value: '8',
          detail: 'Clasificadas para facilitar búsqueda y control'
        },
        {
          title: 'Última actualización',
          value: 'Hace 2 horas',
          detail: 'Sincronización reciente del catálogo'
        }
      ],
      sections: [
        {
          title: 'Qué vería un usuario aquí',
          text:
            'Una tabla, tarjetas o filtros para consultar productos disponibles, su estado y su información general.'
        },
        {
          title: 'Diferencia frente a Crear producto',
          text:
            'Crear producto está orientado a registrar información. Esta vista está orientada a revisar y explorar.'
        }
      ],
      callout:
        'Aunque aún no haya tabla funcional, visualmente ya se diferencia como una sección de consulta.'
    },

    UsersPanel: {
      title: 'Gestión de usuarios',
      intro:
        'Este módulo agrupa la administración de personas que usan el sistema, sus perfiles y sus niveles de acceso.',
      heroText:
        'También es un nodo padre dentro del árbol, por eso sirve como punto central para vistas más específicas.',
      theme: 'users',
      cards: [
        {
          title: 'Usuarios totales',
          value: '1,248',
          detail: 'Entre perfiles administrativos y clientes'
        },
        {
          title: 'Administradores',
          value: '14',
          detail: 'Con acceso a módulos internos'
        },
        {
          title: 'Clientes',
          value: '1,234',
          detail: 'Usuarios finales con acceso a consulta o compra'
        }
      ],
      sections: [
        {
          title: 'Utilidad de esta página',
          text:
            'Sirve como puerta de entrada al módulo de usuarios, mostrando una visión general antes de bajar a detalles.'
        },
        {
          title: 'Cómo mejora la navegación',
          text:
            'El usuario entiende que esta sección es más amplia y que sus submenús cumplen funciones concretas.'
        }
      ],
      callout:
        'Desde aquí el menú lateral se siente mucho más natural, como si navegaras por un panel administrativo real.'
    },

    AdminsPanel: {
      title: 'Administradores del sistema',
      intro:
        'Esta página representa una vista más interna, enfocada en quienes gestionan información, reportes y operaciones.',
      heroText:
        'Aquí normalmente se mostrarían roles, permisos, áreas responsables y acceso a módulos críticos.',
      theme: 'users',
      cards: [
        {
          title: 'Equipo activo',
          value: '14 admins',
          detail: 'Distribuidos entre operaciones, ventas y soporte'
        },
        {
          title: 'Permisos críticos',
          value: '5 grupos',
          detail: 'Usuarios, reportes, productos, seguridad y configuración'
        },
        {
          title: 'Último acceso',
          value: 'Hoy',
          detail: 'Actividad reciente de la mayoría del equipo'
        }
      ],
      sections: [
        {
          title: 'Qué haría una página así',
          text:
            'Permitir revisar quién tiene acceso a qué, quién administra el sistema y qué acciones están habilitadas.'
        },
        {
          title: 'Por qué se siente distinta',
          text:
            'Porque el enfoque ya no es general. Es una página especializada, con otro objetivo y otro tipo de información.'
        }
      ],
      callout:
        'En proyectos más grandes, aquí también aparecerían permisos por rol y trazabilidad de acciones.'
    },

    ClientsPanel: {
      title: 'Clientes',
      intro:
        'Esta sección está pensada para ver información del usuario final: su actividad, estado y relación con el sistema.',
      heroText:
        'A diferencia de administradores, aquí la lectura es más comercial y orientada al comportamiento del cliente.',
      theme: 'users',
      cards: [
        {
          title: 'Clientes activos',
          value: '1,102',
          detail: 'Con al menos una interacción reciente'
        },
        {
          title: 'Nuevos registros',
          value: '38',
          detail: 'Ingresos durante los últimos 7 días'
        },
        {
          title: 'Retención',
          value: '87%',
          detail: 'Usuarios que vuelven a interactuar'
        }
      ],
      sections: [
        {
          title: 'Enfoque de la página',
          text:
            'Mostrar un resumen del perfil de clientes, su actividad y el valor que representan dentro del sistema.'
        },
        {
          title: 'Diferencia frente a Administradores',
          text:
            'Clientes se enfoca en usuarios finales y comportamiento. Administradores se enfoca en gestión y permisos.'
        }
      ],
      callout:
        'Esto ayuda a que los submenús no se vean repetidos: cada uno tiene un rol claro.'
    },

    ReportsPanel: {
      title: 'Centro de reportes',
      intro:
        'Esta sección reúne la información analítica del sistema y sirve como punto de entrada a reportes más concretos.',
      heroText:
        'Es ideal para usuarios que necesitan revisar métricas, comportamiento y seguimiento de resultados.',
      theme: 'reports',
      cards: [
        {
          title: 'Reportes disponibles',
          value: '12',
          detail: 'Entre financieros, operativos y comerciales'
        },
        {
          title: 'Actualización',
          value: 'Diaria',
          detail: 'Sincronización automática programada'
        },
        {
          title: 'Uso semanal',
          value: '84 consultas',
          detail: 'Promedio del equipo durante la última semana'
        }
      ],
      sections: [
        {
          title: 'Qué representa',
          text:
            'Esta vista funciona como portada del módulo analítico. Desde aquí se debería poder entender qué reportes existen y para qué sirven.'
        },
        {
          title: 'Relación con el árbol',
          text:
            'Ventas e Inventario dependen de esta sección, por eso aparece como un nodo padre dentro del sidebar.'
        }
      ],
      callout:
        'Una buena página de reportes no siempre muestra gráficas primero; a veces organiza el acceso a la información.'
    },

    SalesPanel: {
      title: 'Reporte de ventas',
      intro:
        'Esta página simula una vista informativa de desempeño comercial, con enfoque en ingresos, tendencia y comportamiento de compra.',
      heroText:
        'Aquí el usuario debería identificar rápidamente cómo van las ventas y qué decisiones puede tomar a partir de esa lectura.',
      theme: 'reports',
      cards: [
        {
          title: 'Ingresos acumulados',
          value: '$18.4M',
          detail: 'Valor estimado del periodo actual'
        },
        {
          title: 'Ticket promedio',
          value: '$146.000',
          detail: 'Promedio por transacción completada'
        },
        {
          title: 'Variación',
          value: '+12%',
          detail: 'Comparado con el periodo anterior'
        }
      ],
      sections: [
        {
          title: 'Lectura recomendada',
          text:
            'Lo importante aquí no es solo cuánto se vendió, sino cómo va la tendencia y qué segmentos están empujando el crecimiento.'
        },
        {
          title: 'Cómo se sentiría en producción',
          text:
            'Podría incluir gráficos, filtros por fecha, top productos vendidos y comparativos mensuales.'
        }
      ],
      callout:
        'Ahora esta página ya se siente distinta a Inventario o Reportes, y eso era justo lo que necesitabas lograr.'
    },

    StockPanel: {
      title: 'Reporte de inventario',
      intro:
        'Esta vista representa una página centrada en disponibilidad de productos, niveles de stock y alertas de reposición.',
      heroText:
        'A diferencia de ventas, aquí el foco no es comercial sino operativo.',
      theme: 'reports',
      cards: [
        {
          title: 'Productos con stock bajo',
          value: '7',
          detail: 'Requieren atención prioritaria'
        },
        {
          title: 'Cobertura promedio',
          value: '18 días',
          detail: 'Tiempo estimado de inventario disponible'
        },
        {
          title: 'Reposiciones sugeridas',
          value: '5',
          detail: 'Basadas en consumo reciente'
        }
      ],
      sections: [
        {
          title: 'Qué analizaría el usuario',
          text:
            'Qué productos están por agotarse, cuáles necesitan reposición y qué impacto puede tener eso en operación o ventas.'
        },
        {
          title: 'Por qué se siente distinta',
          text:
            'Porque ahora el lenguaje, los indicadores y el propósito cambian por completo respecto a otras vistas.'
        }
      ],
      callout:
        'Con este enfoque, el cambio entre páginas ya se nota mucho más y deja de parecer solo un cambio de texto pequeño.'
    }
  }

  const currentContent: ContentPage =
    contentMap[item.component] ?? {
      title: item.title,
      intro:
        'Esta sección no tiene una plantilla específica todavía, pero ya está preparada para mostrarse como una página diferente.',
      heroText:
        'Puedes seguir personalizando esta vista con métricas, bloques informativos o contenido más realista.',
      theme: 'default',
      cards: [
        {
          title: 'Ruta activa',
          value: item.link,
          detail: 'Ruta asociada al nodo actual'
        },
        {
          title: 'Component',
          value: item.component,
          detail: 'Nombre lógico de la vista'
        },
        {
          title: 'Estado',
          value: 'Disponible',
          detail: 'Contenido dinámico listo para personalizar'
        }
      ],
      sections: [
        {
          title: 'Vista genérica',
          text:
            'Esta plantilla aparece cuando aún no has definido un contenido específico para el component actual.'
        },
        {
          title: 'Siguiente mejora',
          text:
            'Puedes crear una identidad visual propia para este nodo y hacer que se note aún más la diferencia.'
        }
      ],
      callout:
        'La estructura ya está lista para seguir creciendo sin perder la lógica del árbol.'
    }

  return (
    <section className={`content-view theme-${currentContent.theme ?? 'default'}`}>
      <div className="content-hero">
        <div className="content-hero-copy">
          <h2>{currentContent.title}</h2>
          <p className="content-intro">{currentContent.intro}</p>
          <p className="content-hero-text">{currentContent.heroText}</p>
        </div>

        <div className="content-route-box">
          <span>Ruta actual</span>
          <strong>{item.link}</strong>
          <small>{item.component}</small>
        </div>
      </div>

      <div className="content-info-grid">
        {currentContent.cards.map(card => (
          <article className="info-card" key={card.title}>
            <p className="info-card-title">{card.title}</p>
            <h3>{card.value}</h3>
            <span>{card.detail}</span>
          </article>
        ))}
      </div>

      <div className="content-sections-grid">
        {currentContent.sections.map(section => (
          <article className="section-card" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </article>
        ))}
      </div>

      <div className="callout-box">
        <h3>Nota de la sección</h3>
        <p>{currentContent.callout}</p>
      </div>
    </section>
  )
}

export { MenuContent }