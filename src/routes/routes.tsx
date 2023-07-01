import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Menu from "../pages/menu/Menu";
import Login from "../pages/login/Login";
import Reservation from "../pages/reservation/reservation";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
