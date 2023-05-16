import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PropertyInfo from "../components/PropertyInfo";
import Blog from "../pages/Blog";
import Form from "../pages/Form";
import Property from "../pages/Property";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/imoveis",
    element: <Property />
  },
  {
    path: "/imoveis/:id",
    element: <PropertyInfo />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/contato",
    element:<Form />
  },
])
