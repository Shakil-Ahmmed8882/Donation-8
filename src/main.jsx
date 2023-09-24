import React from "react";
import ReactDOM from "react-dom/client";
import "../public/assets/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Layout/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
