import type { IMenuItem } from '../../interfaces/IMenuItem'

const defaultMenuItems: IMenuItem[] = [
  {
    id: 'root',
    title: 'Menú principal',
    link: '/menu-tree',
    component: 'RootPanel',
    parentId: null,
    order: 0
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    link: '/menu-tree/dashboard',
    component: 'DashboardPanel',
    parentId: 'root',
    order: 1
  },
  {
    id: 'products',
    title: 'Productos',
    link: '/menu-tree/products',
    component: 'ProductsPanel',
    parentId: 'root',
    order: 2
  },
  {
    id: 'products-create',
    title: 'Crear producto',
    link: '/menu-tree/products/create',
    component: 'CreateProductPanel',
    parentId: 'products',
    order: 1
  },
  {
    id: 'products-list',
    title: 'Lista de productos',
    link: '/menu-tree/products/list',
    component: 'ProductListPanel',
    parentId: 'products',
    order: 2
  },
  {
    id: 'users',
    title: 'Usuarios',
    link: '/menu-tree/users',
    component: 'UsersPanel',
    parentId: 'root',
    order: 3
  },
  {
    id: 'users-admins',
    title: 'Administradores',
    link: '/menu-tree/users/admins',
    component: 'AdminsPanel',
    parentId: 'users',
    order: 1
  },
  {
    id: 'users-clients',
    title: 'Clientes',
    link: '/menu-tree/users/clients',
    component: 'ClientsPanel',
    parentId: 'users',
    order: 2
  },
  {
    id: 'reports',
    title: 'Reportes',
    link: '/menu-tree/reports',
    component: 'ReportsPanel',
    parentId: 'root',
    order: 4
  },
  {
    id: 'reports-sales',
    title: 'Ventas',
    link: '/menu-tree/reports/sales',
    component: 'SalesPanel',
    parentId: 'reports',
    order: 1
  },
  {
    id: 'reports-stock',
    title: 'Inventario',
    link: '/menu-tree/reports/stock',
    component: 'StockPanel',
    parentId: 'reports',
    order: 2
  }
]

export { defaultMenuItems }