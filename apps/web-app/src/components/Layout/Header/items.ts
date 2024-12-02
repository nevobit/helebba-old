import { PrivateRoutes } from "@/constant-definitions";

export default [
  {
    name: 'Mi zona',
    path: '/employees/me',
  },
  {
    name: 'Contactos',
    path: '/contacts',
  },
  {
    name: 'Ventas',
    path: '/sales/revenue',
    subPaths: [
      {
        name: 'Facturas',
        path: PrivateRoutes.INVOICES,
      },
      {
        name: 'Cotizaciones',
        path: PrivateRoutes.QUOTES,
      },
      {
        name: "Servicios",
        path: "/services"
      },
      {
        name: "Embudo de Ventas",
        path: "/crm/funnels"
      },
      {
        name: 'Punto de venta',
        path: '/pos',
      },
    ],
  },
  {
    name: 'Gastos',
    path: '/expenses',
    subPaths: [
      {
        name: 'Gastos',
        path: '/expenses',
      },
      {
        name: 'Escáner',
        path: '/inbox',
      },
      {
        name: 'Nominas',
        path: '/payrolls',
      },
    ],
  },
  {
    name: 'CRM',
    path: '/crm/bookings',
    subPaths: [
      {
        name: 'Embudo de ventas',
        path: '/upsell/deals',
      },
      {
        name: 'Actividades',
        path: '/crm/activities',
      },
      {
        name: 'Calendario',
        path: '/calendar',
      },
      {
        name: 'Reservas',
        path: '/crm/bookings',
      },
      {
        name: 'Reuniones',
        path: '/calendar/booking',
      },
    ],
  },
  {
    name: 'RRHH',
    path: '/team/employees',
    subPaths: [
      {
        name: 'Empleados',
        path: '/team/employees',
      },
      {
        name: 'Ausencias',
        path: '/team/leaves',
      },
      {
        name: 'Control horario',
        path: '/team/timetracking',
      },
      {
        name: 'Contratos',
        path: '/contracts',
      }
    ]
  },
  {
    name: 'Inventario',
    path: PrivateRoutes.INVENTORY_OPERATIONS,
    subPaths: [
      {
        name: 'Panel de control',
        path: PrivateRoutes.INVENTORY_OPERATIONS,
      },
      {
        name: 'Categorias',
        path: '/categories',
      },
      {
        name: 'Productos',
        path: '/products',
      },
      {
        name: 'Catálogos',
        path: PrivateRoutes.WAREHOUSES,
      },
      {
        name: 'Almacenes',
        path: PrivateRoutes.WAREHOUSES,
      },
      {
        name: 'Pedidos',
        path: PrivateRoutes.SALES_ORDER,
      },
      {
        name: 'Remisiones',
        path: PrivateRoutes.REFERRALS,
      },
    ],
  },
  {
    name: 'Proyectos',
    path: '/projects/tasks',
    subPaths: [
      {
        name: 'Mis tareas',
        path: "/projects/tasks",
      },
      {
        name: 'Proyectos',
        path: "/projects",
      },
      {
        name: 'Tareas',
        path: "/tasks",
      },
    ],
  },
  {
    name: 'Marketing',
    path: "/email-marketing",
    subPaths: [
      {
        name: 'Email Marketing',
        path: "/email-marketing",
      },
    ],
  },
  // {
  //  name: 'Bancos',
  //  path: '/banks'
  // },
  // {
  //  name: 'Contabilidad',
  //  path: '/accountability'
  // },
  // {
  //  name: 'Analitica',
  //  path: '/analitics'
  // }
];
