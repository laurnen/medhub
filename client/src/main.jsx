import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/Login";
import Welcome from "./components/Welcome";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecordList />,
      },
    ],
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Welcome />,
      },
    ],
  },
  // {
  //   path: "/create",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/create",
  //       element: <Record />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);