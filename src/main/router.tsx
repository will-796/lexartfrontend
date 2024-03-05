import { Login, loginAction, RootLayout } from "@presentation/pages";

import { loader as rootLoader } from "@presentation/pages/RootLayout/root.loader";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
  },
]);
