import React from "react";
import "./Menu.scss";
import { Dialpad, Forum, More, Album, Home } from "@material-ui/icons";

// import DialpadIcon from "@mui/icons-material/Dialpad";
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul onClick={() => setMenuOpen(!menuOpen)}>
        <li>
          <a href="#Intro">Home</a>
          <span>
            <Home />
          </span>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
          <span>
            <Album />
          </span>
        </li>
        <li>
          <a href="#Works">Works</a>
          <span>
            <More />
          </span>
        </li>
        <li>
          <a href="#Testimonial">Testimonial</a>
          <span>
            <Forum />
          </span>
        </li>
        <li>
          <a href="#Contact">Contact</a>
          <span>
            <Dialpad />
          </span>
        </li>
      </ul>
    </div>
  );
}
