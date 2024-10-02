export const PublicRoutes = {
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  FORGOT: '/forgot',
  LOGIN: '/login',
};

export const PrivateRoutes = {
  PRIVATE: '/private',
  HOME: '/',
  CONTACTS: '/contacts',
  CONTACT: '/contact',
  PRODUCTS: '/products',
  PRODUCT: '/products/:id',
  ACCOUNTS: '/accounts',
  ACCOUNTS_NEW: '/accounts/new',
  INVENTORY_OPERATIONS: '/inventory/operations',
  REPORTING_INVENTORY: '/reporting/inventory/analytics',
  WAREHOUSES: '/inventory/warehouses',
  WAREHOUSE: '/inventory/warehouses/:id',
  INVOICES: '/sales/revenue',
  NEW_INVOICE: '/doc/invoice/new',
  NEW_ESTIMATE: '/doc/estimate/new',
  ESTIMATES: '/sales/estimates',
  TRIAL_EXPIRED: '/trial/expired',
  DOCUMENTS: '/settings/documents',
  CATALOG: '/catalog',
  CATALOG_USER: '/catalog/user',

  EXPENSES: '/expenses',
  NEW_EXPENSE:  '/doc/expenses/new',
  UPDATE_EXPENSE: '/expenses/update/:id',

  REFERRALS: '/referrals',
  NEW_REFERRALS: '/doc/referral/new',
  EDIT_REFERRALS: "/doc/referral/:id/:docType/edit",
  EDIT_INVOICE: "/doc/invoice/:id/:docType/edit",
  EDIT_QUOTE: "/doc/quote/:id/:docType/edit",

  QUOTES: '/sales/estimates',
  NEW_QUOTES: '/doc/estimates/new',
  SALES_ORDER: '/sales-order',
  NEW_SALES_ORDER: '/doc/sales-order/new',
};
