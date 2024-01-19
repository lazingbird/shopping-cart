import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Steam from "./components/pages/Steam";

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
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
