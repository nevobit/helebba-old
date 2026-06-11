import { RouteObject } from 'react-router-dom';
import { ErrorBoundary } from '../screens';
import GuardRoute from '@/guards';
import { Login } from '@/features/Authentication';
import { Signup } from '@/features/Authentication/screens';
import { accountsRoutes } from '@/features/Accounts/routes';
import { homeRoutes } from '@/features/Home/routes';
import Layout from '@/components/Layout/LayoutComponent';
import { PrivateRoutes } from './constants';
import { CatalogInventary, ControlPanel, Products, Warehouses } from '@/screens/Private/Inventory';
import Product from '@/screens/Private/Inventory/Products/Product';
import Contacts from '@/screens/Private/Contacts';
import Contact from '@/screens/Private/Contacts/Contact';
import Invoices from '@/screens/Private/Sells/Invoice';
import CreateInvoice from '@/screens/Private/Sells/Invoice/Create';
import CreateQuote from '@/screens/Private/Sells/Quote/Create';
import Quotes from '@/screens/Private/Sells/Quote';
import Funnel from '@/screens/Private/Sells/Funnel';
import CRM from '@/screens/Private/Crm';
import Expenses from '@/screens/Private/Expenses';
import CreateExpenses from '@/screens/Private/Expenses/Create';
import Marketplace from '@/screens/Private/Partners/Marketplace';
import { InventoryAnalytics } from '@/screens/Private/Reporting';
import Catalog from '@/screens/Private/Catalog';
import Referrals from '@/screens/Private/Sells/Referrals';
import Pos from '@/screens/Private/Sells/Pos';
import Store from '@/screens/Private/Sells/Pos/Store';
import Employees from '@/screens/Private/Team/Employees';
import Employee from '@/screens/Private/Team/Employees/Employee';
import CreateReferral from '@/screens/Private/Sells/Referrals/Create';
import TrialExpired from '@/screens/Private/TrialExpired';
import SalesOrder from '@/screens/Private/Inventory/Orders';
import CreateSalesOrder from '@/screens/Private/Inventory/Orders/Create';
import Categories from '@/screens/Private/Inventory/Categories';
import EmailMarketing from '@/screens/Private/Marketing/EmailMarketing/EmailMarketing';
import Email from '@/screens/Private/Marketing/EmailMarketing';
import Warehouse from '@/screens/Private/Inventory/Warehouses/Warehouse';
import CodeVerification from '@/features/Authentication/screens/Code';
import { crmRoutes } from '@/features/CRM/routes';
import { contactsRoutes } from '@/features/Contacts/routes';
import { salesRoutes } from '@/features/Sales/routes';
import { inventoryRoutes } from '@/features/Inventory/routes';
import { myZoneRoutes } from '@/features/MyZone/routes';
import Demo from '@/features/Authentication/screens/Demo';
import EditInvoice from '@/features/Sales/Invoice/screens/Edit';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/demo',
    element: <Demo />
  },
  {
    path: '/',
    element: <GuardRoute privateValidation />,
    errorElement: <ErrorBoundary />,
    children: [
      ...accountsRoutes,
      {
            path: PrivateRoutes.CODE,
          element: <CodeVerification />
      },
      {
        element: <Layout />,
        children: [
          ...myZoneRoutes,
          ...contactsRoutes,
          ...salesRoutes,
          ...crmRoutes,
          ...inventoryRoutes,
        {
            path: PrivateRoutes.INVOICES,
          element: <Invoices />
          },
        {
            path: PrivateRoutes.NEW_INVOICE,
            element: <CreateInvoice />,
          },
          {
            path: PrivateRoutes.EDIT_INVOICE,
            element: <EditInvoice />,
          },
          {
            path: PrivateRoutes.EDIT_QUOTE,
            element: <CreateQuote />,
          },
          {
            path: PrivateRoutes.QUOTES,
            element: <Quotes />,
          },
          {
            path: PrivateRoutes.NEW_QUOTES,
            element: <CreateQuote />,
          },
          {
            path: '/crm/funnels/:id',
            element: <Funnel />,
          },
          {
            path: '/crm/funnels',
            element: <CRM />,
          },

         {
            path: PrivateRoutes.EXPENSES,
            element: <Expenses />,
          },

         {
            path: PrivateRoutes.NEW_EXPENSE,
            element: <CreateExpenses />,
          },


         {
            path: PrivateRoutes.CATALOG_USER,
            element: <CatalogInventary />,
          },


         {
            path: PrivateRoutes.INVENTORY_OPERATIONS,
            element: <ControlPanel />,
          },

         {
            path: '/partners/marketplace',
            element: <Marketplace />,
          },

         {
            path: '/partners/marketplace/:id',
            element: <Marketplace />,
          },
{
            path: PrivateRoutes.REPORTING_INVENTORY,
            element: <InventoryAnalytics />,
          },
         {
            path: PrivateRoutes.CATALOG,
            element: <Catalog />,
          },
          {
            path: PrivateRoutes.REFERRALS,
            element: <Referrals />,
          },
          {
            path: 'pos',
            element: <Pos />,
          },
          {
            path: 'pos/store/:id',
            element: <Store />,
          },
          {
            path: 'team',
            element: <Employees />,
          },
          {
            path: 'team/employees/:id',
            element: <Employee />,
          },
          {
            path: PrivateRoutes.NEW_REFERRALS,
            element: <CreateReferral />,
          },
          {
            path: PrivateRoutes.EDIT_REFERRALS,
            element: <CreateReferral />,
          },
          {
            path: PrivateRoutes.TRIAL_EXPIRED,
            element: <TrialExpired />,
          },
          {
            path: PrivateRoutes.SALES_ORDER,
            element: <SalesOrder />,
          },
          {
            path: PrivateRoutes.NEW_SALES_ORDER,
            element: <CreateSalesOrder />,
          },
          {
            path: '/categories',
            element: <Categories />,
          },
          {
            path: '/email-marketing',
            element: <EmailMarketing />,
          },
          {
            path: '/email-marketing/new',
            element: <Email />,
          },
          {
            path: PrivateRoutes.CONTACTS,
            element: <Contacts />,
          },
          {
            path: PrivateRoutes.CONTACT,
            element: <Contact />,
          },
          {
            path: PrivateRoutes.PRODUCTS,
            element: <Products />,
          },
          {
            path: PrivateRoutes.PRODUCT,
            element: <Product />,
          },
          {
            path: PrivateRoutes.WAREHOUSES,
            element: <Warehouses />,
          },
          {
            path: PrivateRoutes.WAREHOUSE,
            element: <Warehouse />,
          },
          ...homeRoutes
        ]
      },
    
    ]
  },
];
