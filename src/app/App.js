import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headermain from "../header";
import "./App.css";
import { AppProvider } from "../AppContext";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";

export default function App() {
  return (
    <AppProvider>
      <div>
        <Headermain />
        <Home />
        <Portfolio />
        <About />
        <ContactUs />
      </div>
    </AppProvider>
  );
}
