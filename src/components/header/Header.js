import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <div className="first-box">
          <div className="two-box">
            <h2>Hola!</h2>
            <h1>
              Soy Alejandro, <br />
              <span>Frontend developer</span>
            </h1>
          </div>
        </div>
        <img
          src={require("../../assets/code2.png").default}
          alt="coding"
          width="100%"
          height="100%"
        />
      </div>
    </header>
  );
};
