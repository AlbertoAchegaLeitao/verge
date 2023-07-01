import React from "react";
import { Outlet } from "react-router";

import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
