import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";
import EditInvoice from "../screens/Edit";

export const invoiceRoutes: RouteObject[] = [
    {
        path: '/sales/revenue',
        element: <Home />
    },
    {
        path: '/doc/invoice/:id/:docType/edit',
        element: <EditInvoice />
    },
]
