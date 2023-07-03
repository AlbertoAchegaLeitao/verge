import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { HeroTextProvider } from "./components/navbar/HeroContext";

const App = () => {
  return (
    <HeroTextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </HeroTextProvider>
  );
};

export default App;
