import React, { useEffect, useRef, useState } from "react";
import "./header.css";

export const Header = () => {
  const [state, setstate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      console.log(window.screen);
      if (e.target.scrollingElement.scrollTop >= ref.current.offsetHeight) {
        setstate(true);
      } else {
        setstate(false);
      }
    });
  }, []);
  return (
    <header className="header" ref={ref}>
      <nav className={state ? "navFixed" : null}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
