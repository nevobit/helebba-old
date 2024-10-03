import { PrivateRoutes } from '@/constant-definitions';
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '@/utilities/routes-with-not-found';
import Home from './Home';
import Contacts from './Contacts';
import Contact from './Contacts/Contact';
import {
  Warehouses,
  ControlPanel,
  Products,
  CatalogInventary,
} from './Inventory';
import { CatalogViewTable, CatalogViewTags } from './Inventory/Catalog/screens';
import Product from './Inventory/Products/Product';
import Warehouse from './Inventory/Warehouses/Warehouse';
import Referrals from './Sells/Referrals';
import CreateReferral from './Sells/Referrals/Create';
import Quote from './Sells/Quote';
import { InventoryAnalytics } from './Reporting';
import Catalog from './Catalog';
import TrialExpired from './TrialExpired';
import Funnel from './Sells/Funnel';
import CRM from './Crm';
import Pos from './Sells/Pos';
import Expenses from './Expenses';
import CreateExpenses from './Expenses/Create';
import Invoices from './Sells/Invoice';
import CreateInvoice from './Sells/Invoice/Create';
import SalesOrder from './Inventory/Orders';
import CreateSalesOrder from './Inventory/Orders/Create';
import CreateQuote from './Sells/Quote/Create';
import Store from './Sells/Pos/Store';
import Employees from './Team/Employees';
import Employee from './Team/Employees/Employee';
import EmailMarketing from './Marketing/EmailMarketing/EmailMarketing';
import Email from './Marketing/EmailMarketing';
import Marketplace from './Partners/Marketplace';
import Categories from './Inventory/Categories';
import Layout from '@/components/Layout/LayoutComponent';

const Private = () => {
  return (
    <Layout>
      <RoutesWithNotFound>
        <Route path={PrivateRoutes.HOME} element={<Home />} />
        <Route path={PrivateRoutes.CONTACTS} element={<Contacts />} />
        <Route path={`${PrivateRoutes.CONTACT}/:id`} element={<Contact />} />

        {/* SELLS */}
        <Route path={PrivateRoutes.INVOICES} element={<Invoices />} />
        <Route path={PrivateRoutes.NEW_INVOICE} element={<CreateInvoice />} />
        <Route path={PrivateRoutes.EDIT_INVOICE} element={<CreateInvoice />} />
        <Route path={PrivateRoutes.EDIT_QUOTE} element={<CreateQuote />} />


        
        <Route path={PrivateRoutes.QUOTES} element={<Quote />} />
        <Route path={PrivateRoutes.NEW_QUOTES} element={<CreateQuote />} />
        <Route path="/crm/funnels/:id" element={<Funnel />} />
        <Route path="/crm/funnels" element={<CRM />} />

        <Route path={PrivateRoutes.EXPENSES} element={<Expenses />} />
        <Route path={PrivateRoutes.NEW_EXPENSE} element={<CreateExpenses />} />

        {/* INVETORY */}
        <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />
        <Route path={PrivateRoutes.CATALOG_USER} element={<CatalogInventary />}>
          <Route
            path={`${PrivateRoutes.CATALOG_USER}/user`}
            element={<CatalogViewTags />}
          />
          <Route
            path={`${PrivateRoutes.CATALOG_USER}/viewtags`}
            element={<CatalogViewTable />}
          />
        </Route>

        {/* INVETORY */}
        <Route
          path={PrivateRoutes.INVENTORY_OPERATIONS}
          element={<ControlPanel />}
        />
        <Route path={PrivateRoutes.WAREHOUSES} element={<Warehouses />} />
        <Route path={PrivateRoutes.WAREHOUSE} element={<Warehouse />} />
        <Route path="/partners/marketplace" element={<Marketplace />} />
        <Route path="/partners/marketplace/:id" element={<Marketplace />} />



       

        <Route
          path={PrivateRoutes.REPORTING_INVENTORY}
          element={<InventoryAnalytics />}
        />
        <Route path={PrivateRoutes.CATALOG} element={<Catalog />} />

        <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />
        <Route path={PrivateRoutes.PRODUCT} element={<Product />} />

        <Route path={PrivateRoutes.REFERRALS} element={<Referrals />} />
        <Route path="pos" element={<Pos />} />
        <Route path="pos/store/:id" element={<Store />} />

        <Route path="team" element={<Employees />} />
        <Route path="team/employees/:id" element={<Employee />} />


        <Route
          path={PrivateRoutes.NEW_REFERRALS}
          element={<CreateReferral />}
        />
        <Route
          path={PrivateRoutes.EDIT_REFERRALS}
          element={<CreateReferral />}
        />

        <Route path={PrivateRoutes.TRIAL_EXPIRED} element={<TrialExpired />} />

        {/* <Route path="/settings/paymentmethods" element={<Configuration />} /> */}

        {/* <Route path="/settings/paymentmethods" element={<Configuration />} /> */}

        <Route path={PrivateRoutes.SALES_ORDER} element={<SalesOrder />} />

        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/email-marketing/new" element={<Email />} />
        <Route path="/categories" element={<Categories />} />


        <Route
          path={PrivateRoutes.NEW_SALES_ORDER}
          element={<CreateSalesOrder />}
        />
      </RoutesWithNotFound>
    </Layout>
  );
};

export default Private;
