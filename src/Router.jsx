import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Steam from "./components/pages/Steam";
import Catalog from "./components/pages/Catalog";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "Steam",
      element: <Steam />,
    },
    {
      path: "Todos Produtos",
      element: <Catalog />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
