import { PrivateRoutes } from "@/constant-definitions";

export default [
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
        name: "Embudo de Ventas",
        path: "/crm/funnels"
      },
      // {
      //   name: 'Actividades',
      //  path: '/contacts',
      // },
      // {
      //   name: 'Servicios',
      //  path: '/contacts',
      // },
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
      // {
      //   name: 'Nominas',
      //  path: '/payshet',
      // },
      // {
      //   name: 'Bandeja de entrada',
      //  path: '/enterban',
      // }
    ],
  },
  // {
  //  name: 'Equipo',
  //  path: '/team',
  //  subPaths:[
  //   {
  //     name: 'Mi zona',
  //    path: '/myzone',
  //   },
  //   {
  //     name: 'Empelados',
  //    path: '/employees',
  //   },
  //   {
  //     name: 'Ausencias',
  //    path: '/ausencs',
  //   },
  //   {
  //     name: 'Control horario',
  //    path: '/controhor',
  //   }
  // ]
  // },
  {
    name: 'Inventario',
    path: PrivateRoutes.INVENTORY_OPERATIONS,
    subPaths: [
      {
        name: 'Panel de control',
        path: PrivateRoutes.INVENTORY_OPERATIONS,
      },
      {
        name: 'Almacenes',
        path: PrivateRoutes.WAREHOUSES,
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
    name: 'Empleados',
    path: '/team',
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
  //  name: 'Proyectos',
  //  path: '/projects'
  // },
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
