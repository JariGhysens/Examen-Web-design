import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailPage from "./pages/DetailPage.jsx";
import RootLayout from "./navigation/RootLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";

// Definieer hier de handleLogin-functie


const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "movies/:id",
        element: <DetailPage />,
      },
      {
        path: "/OrderPage",
        element: <OrderPage />,
      },
      {
        path: "/login",
        element: <LoginPage  />,
      },
      {
        path: "/profile",
        element: <ProfilePage  />,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
