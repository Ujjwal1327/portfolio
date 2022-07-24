import React from "react";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Into/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/Works/Works";

import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}
