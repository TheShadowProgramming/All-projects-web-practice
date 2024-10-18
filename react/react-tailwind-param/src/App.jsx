import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import LampDemo from "../@/components/ui/lamp.js";

function App() {
  return (
    <>
      <div className="bg-slate-950 md:overflow-hidden">
        <div className="relative">
          <Navbar className="sm:z-[999] sm:shadow-cyan-500/50 sm:shadow-2xl" />
          <LampDemo className="sm:top-0" />
        </div>
      </div>
    </>
  );
}

export default App;
