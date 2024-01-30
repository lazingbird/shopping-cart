import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Steam from "./components/pages/Steam";
import Playstation from "./components/pages/Playstation";

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
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
