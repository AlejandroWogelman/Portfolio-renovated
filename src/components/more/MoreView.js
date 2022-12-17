import React from "react";
import { Card } from "../work/Card";
import { data } from "./data";
import "./more.css";

export const MoreView = () => {
  const handleClick = () => {
    const more_arrow = document.getElementById("more_arrow");
    const more_projects = document.getElementById("more_projects");

    more_projects.classList.toggle("expand");
    more_arrow.classList.toggle("arrow--bottom");

    console.log(more_arrow);
  };

  return (
    <div className="more">
      <h2 className="more__title">More</h2>
      <button
        id="more_arrow"
        className="more__button"
        type="button"
        onClick={handleClick}
      >
        <img src={require("../../assets/arrow.svg").default} alt="arrow" />
      </button>
      <div className="more__grid" id="more_projects">
        {data.map((el) => (
          <Card {...el} key={el.img} />
        ))}
      </div>
    </div>
  );
};
