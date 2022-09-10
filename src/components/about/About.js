import React from "react";
import { viewModal } from "../Modal";
import "./about.css";

export const About = () => {
  return (
    <>
      <section className="about-container" id="about">
        <article>
          <h2>about me</h2>
          <p className="mt">
            Hola! Soy Alejandro Wogelman. Desde hace un tiempo me encuentro
            aprendiendo y aplicando cada nuevo concepto.
            <br />
            <br />
            Actualmente me encuentro en la busqueda para poder integrar un
            equipo de trabajo que me permita seguir aprendiendo, mejorando y
            aplicando.
          </p>
          <br /> <p>Para mejorar hay que HACER!</p>
          <br />
          <hr />
          <div className="about-img-hob">
            <div>
              <ul>
                <li>
                  Gym:
                  <img
                    src={
                      require("../../assets/Fitness_Monochromatic.svg").default
                    }
                    alt="gym"
                    width="80px"
                  />
                </li>
                <li>
                  Futbol:
                  <img
                    src={require("../../assets/Soccer_Isometric.svg").default}
                    alt="soccer"
                    width="80px"
                  />
                </li>

                <li>
                  Cursos:
                  <img
                    src={
                      require("../../assets/Javascript_Isometric.svg").default
                    }
                    alt="cursos"
                    width="80px"
                  />
                </li>
                <li>
                  Anime:
                  <img
                    src={
                      require("../../assets/ball_dragon_game_movie_icon_183186.svg")
                        .default
                    }
                    alt="anime"
                    width="50px"
                  />
                </li>
              </ul>
            </div>
            <div className="img-about-container">
              <img
                className="about-img"
                src={require("../../assets/perfilImageShort.jpg").default}
                alt="perfil"
                width="180px"
                height="180px"
              />
              <button className="btn-cv" onClick={viewModal}>
                CV
              </button>
            </div>
          </div>
        </article>
      </section>
      <article className="skills-container">
        <div>
          <h3>Skills</h3>
          <p style={{ margin: "0px", fontSize: "1.5rem" }}>Experiencia en</p>
        </div>
        <div className="skills-content">
          <p>HTML</p>
          <p>REACT</p>
          <p>CSS</p>
          <p>TYPESCRIPT</p>
          <p>JAVASCRIPT</p>
        </div>
      </article>
      <article className="metodologias-container">
        <div>
          <h3>Metodología</h3>
          <p style={{ margin: "0px", fontSize: "1.5rem" }}>SCRUM</p>
        </div>
        <div className="metodologias-content">
          <p>BITBUCKET</p>
          <p>JIRA</p>
          <p>CLOCKIFY</p>
        </div>
      </article>
    </>
  );
};
