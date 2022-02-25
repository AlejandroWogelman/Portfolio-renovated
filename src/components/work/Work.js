import React, { useState } from "react";
import { Button } from "./Button";
import "./work.css";

export const Work = () => {
  const initialState = {
    tateti: false,
    appList: false,
    sunnyside: false,
    perros: false,
    challengeALK: false,
    animalSearch: false,
  };
  const [inElement, setInElement] = useState(initialState);

  return (
    <section className="work-container">
      <article>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={require("../../assets/AnimalSearch.png").default}
            width="100%"
            alt="map"
          />
          <div
            className={
              inElement.animalSearch ? "info-work active" : "info-work"
            }
          >
            <div>
              <p>HTML</p>
              <p>CSS</p>

              <p>
                REACT
                <br />
                <br />
                <span>Leaflet</span> - <span>Redux</span> -{" "}
                <span>Firebase</span>
                <br />
                <span>Geocoding / Api</span>
              </p>
              <br />
              <small>
                Aplicación para el marcado de mascotas extraviadas sobre un mapa
                interactivo.
              </small>
              <a
                href="https://github.com/AlejandroWogelman/Animal--search"
                target="_blank"
                className="github"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/211904_social_github_icon.svg")
                      .default
                  }
                  alt="logo-git"
                  width="35px"
                />
              </a>
              <a
                href="https://animal-search.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="google"
              >
                <img
                  src={
                    require("../../assets/2993685_brand_brands_google_logo_logos_icon.svg")
                      .default
                  }
                  width="30px"
                  alt="logo-google"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="btns-card-containter">
          <h3>Buscador de Mascotas perdidas</h3>
          {inElement.animalSearch !== true ? (
            <Button
              setInElement={setInElement}
              name={"animalSearch"}
              arrow={"up"}
            />
          ) : (
            <Button
              setInElement={setInElement}
              name={"animalSearch"}
              arrow={"down"}
            />
          )}
        </div>
      </article>

      <article>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={require("../../assets/appList.png").default}
            width="100%"
            alt="appList"
          />
          <div className={inElement.appList ? "info-work active" : "info-work"}>
            <div>
              <p>HTML </p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>
                REACT
                <br />
                <br />
                <span>Reducer </span>{" "}
              </p>
              <br />
              <small>
                App de Listado de tareas para aprender el uso de "Reducer"
              </small>
              <a
                href="https://github.com/AlejandroWogelman/appList-with-REACT-REDUCER"
                target="_blank"
                className="github"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/211904_social_github_icon.svg")
                      .default
                  }
                  alt="logo-git"
                  width="35px"
                />
              </a>
              <a
                href="https://app-list-2021.netlify.app/"
                target="_blank"
                className="google"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/2993685_brand_brands_google_logo_logos_icon.svg")
                      .default
                  }
                  width="30px"
                  alt="logo-google"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="btns-card-containter">
          <h3>Lista de Tareas</h3>
          {inElement.appList !== true ? (
            <Button setInElement={setInElement} name={"appList"} arrow={"up"} />
          ) : (
            <Button
              setInElement={setInElement}
              name={"appList"}
              arrow={"down"}
            />
          )}
        </div>
      </article>
      <article>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={require("../../assets/landing1.png").default}
            width="100%"
            alt="Landing"
          />
          <div
            className={inElement.sunnyside ? "info-work active" : "info-work"}
          >
            <div>
              {" "}
              <p>HTML </p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <br />
              <small>Landing Page de Practica para FrontEnd-Mentor</small>
              <a
                href="https://github.com/AlejandroWogelman/landing-page"
                target="_blank"
                className="github"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/211904_social_github_icon.svg")
                      .default
                  }
                  alt="logo-git"
                  width="35px"
                />
              </a>
              <a
                href="https://landing-page-challeng.netlify.app/"
                target="_blank"
                className="google"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/2993685_brand_brands_google_logo_logos_icon.svg")
                      .default
                  }
                  width="30px"
                  alt="logo-google"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="btns-card-containter">
          <h3>Landing Page</h3>
          {inElement.sunnyside !== true ? (
            <Button
              setInElement={setInElement}
              name={"sunnyside"}
              arrow={"up"}
            />
          ) : (
            <Button
              setInElement={setInElement}
              name={"sunnyside"}
              arrow={"down"}
            />
          )}
        </div>
      </article>
      <article>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={require("../../assets/tateti1.png").default}
            width="100%"
            alt="tateti"
          />
          <div className={inElement.tateti ? "info-work active" : "info-work"}>
            <div>
              {" "}
              <p>HTML </p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <br />
              <p>
                <span>DOM</span>
              </p>
              <br />
              <small>Juego de Tateti, aprendiendo el manejo de eventos</small>
              <a
                href="https://github.com/AlejandroWogelman/tateti"
                target="_blank"
                className="github"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/211904_social_github_icon.svg")
                      .default
                  }
                  alt="logo-git"
                  width="35px"
                />
              </a>
              <a
                href="https://tateti2021.netlify.app/"
                target="_blank"
                className="google"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/2993685_brand_brands_google_logo_logos_icon.svg")
                      .default
                  }
                  width="30px"
                  alt="logo-google"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="btns-card-containter">
          <h3>Juego de Tateti</h3>
          {inElement.tateti !== true ? (
            <Button setInElement={setInElement} name={"tateti"} arrow={"up"} />
          ) : (
            <Button
              setInElement={setInElement}
              name={"tateti"}
              arrow={"down"}
            />
          )}
        </div>
      </article>
      <article>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={require("../../assets/heros-Alkemy.png").default}
            width="100%"
            alt="heros"
          />
          <div
            className={
              inElement.challengeALK ? "info-work active" : "info-work"
            }
          >
            <div style={{ position: "relative" }}>
              <p>HTML </p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>
                REACT <br />
                <br /> <span>Redux</span> - <span>React Router</span> -{" "}
                <span>Formik</span> - <span>Api</span>
              </p>
              <br />
              <small>
                Challenge de ingreso para Alkemy. Uso de redux, autentificación,
                consumos de Api y rutas
              </small>
              <a
                href="https://github.com/AlejandroWogelman/Heros-TEAM-allkemy"
                target="_blank"
                className="github"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/211904_social_github_icon.svg")
                      .default
                  }
                  alt="logo-git"
                  width="35px"
                />
              </a>
              <a
                href="https://super-equipo.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="google"
              >
                <img
                  src={
                    require("../../assets/2993685_brand_brands_google_logo_logos_icon.svg")
                      .default
                  }
                  width="30px"
                  alt="logo-google"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="btns-card-containter">
          <h3>Challenge Alkemy</h3>
          {inElement.challengeALK !== true ? (
            <Button
              setInElement={setInElement}
              name={"challengeALK"}
              arrow={"up"}
            />
          ) : (
            <Button
              setInElement={setInElement}
              name={"challengeALK"}
              arrow={"down"}
            />
          )}
        </div>
      </article>
      <article>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={require("../../assets/buscador-perros.png").default}
            width="100%"
            alt="Dogs-page"
          />
          <div className={inElement.perros ? "info-work active" : "info-work"}>
            <div>
              <p>HTML </p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>
                REACT
                <br />
                <br />
                <span>useState</span>
              </p>
              <br />
              <small>Aprendiendo el manejo de "UseState"</small>
              <a
                href="https://github.com/AlejandroWogelman/Buscador-de-fotos-de-Perros"
                target="_blank"
                className="github"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../../assets/211904_social_github_icon.svg")
                      .default
                  }
                  alt="logo-git"
                  width="35px"
                />
              </a>
              <a
                className="google"
                target="_blank"
                rel="noreferrer"
                href="https://razas-perros.netlify.app/"
              >
                <img
                  src={
                    require("../../assets/2993685_brand_brands_google_logo_logos_icon.svg")
                      .default
                  }
                  width="30px"
                  alt="logo-google"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="btns-card-containter">
          <h3>Busqueda de Razas</h3>
          {inElement.perros !== true ? (
            <Button setInElement={setInElement} name={"perros"} arrow={"up"} />
          ) : (
            <Button
              setInElement={setInElement}
              name={"perros"}
              arrow={"down"}
            />
          )}
        </div>
      </article>
    </section>
  );
};
