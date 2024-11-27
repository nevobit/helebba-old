import { RouteObject } from "react-router-dom";
import Contacts from "../screens/Home";
import Contact from "../screens/Contact";

export const contactsRoutes: RouteObject[] = [
  {
    path: 'contacts',
    element: <Contacts />
  },
  {
    path: 'contacts/:id',
    element: <Contact />
  },
]