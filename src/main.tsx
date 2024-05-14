import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoPage from "./todo/index.tsx";
import NotFound from "./components/status/404/404.tsx";
import MoviesPage from "./movies/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todos.io",
    element: <TodoPage />,
  },
  {
    path: "/movies.io",
    element: <MoviesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
