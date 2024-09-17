// RootLayout.jsx
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "../components/NavBar.css";
import Footer from "../components/Footer";
import "../App.css";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
