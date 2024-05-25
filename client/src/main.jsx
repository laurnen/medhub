import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import PatientList from "./components/PatientList";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import Dash from "./components/Dash";
import Appointments from "./components/Appointments";
import NewPatient from "./components/NewPatient";
import Patient from "./components/Patient";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <Welcome /> },
      { 
        path: "dash", 
        element: <Dashboard />,
        children: [
          { path: "", element: <Dash /> },
          { path: "patients", element: <PatientList card={false}/>},
          { path: "appointments", element: <Appointments card={false}/>},
          { path: "create", element: <NewPatient />},
          { path: "edit/:id", element: <Patient />,
          },
        ]
      },
    ],  
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);