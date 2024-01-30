import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Steam from "./components/pages/Steam";
import Playstation from "./components/pages/Playstation";
import Xbox from "./components/pages/Xbox";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";

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
      path: "Playstation",
      element: <Playstation />,
    },
    {
      path: "Xbox",
      element: <Xbox />,
    },
    {
      path: "Conta",
      element: <Login />,
    },
    {
      path: "Carrinho",
      element: <Cart />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
