import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Steam from "./components/pages/Steam";
import Playstation from "./components/pages/Playstation";
import Xbox from "./components/pages/Xbox";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import AllProducts from "./components/pages/AllProducts";
import { useState } from "react";

const Router = () => {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage cart={cart} setCart={setCart} />,
    },
    {
      path: "Steam",
      element: <Steam cart={cart} setCart={setCart} />,
    },
    {
      path: "Playstation",
      element: <Playstation cart={cart} setCart={setCart} />,
    },
    {
      path: "Xbox",
      element: <Xbox cart={cart} setCart={setCart} />,
    },
    {
      path: "Conta",
      element: <Login cart={cart} setCart={setCart} />,
    },
    {
      path: "Carrinho",
      element: <Cart cart={cart} setCart={setCart} />,
    },
    {
      path: "Catálogo",
      element: <AllProducts cart={cart} setCart={setCart} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
