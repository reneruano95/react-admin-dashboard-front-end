import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import "./styles/global.scss";

import Home from "./pages/home/Home";
import Estimates from "./pages/estimates/Estimates";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/estimates",
          element: <Estimates />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
