import React, { useState } from "react";
import "./work.css";

export const Work = () => {
  const initialState = {
    tateti: false,
    appList: false,
    sunnyside: false,
    perros: false,
    challengeALK: false,
  };
  const [inElement, setInElement] = useState(initialState);

  return (
    <section className="work-container">
      <article
        onMouseOver={() => setInElement({ ...inElement, appList: true })}
        onMouseOut={() => setInElement({ ...inElement, appList: false })}
      >
        <img
          src={require("../../assets/appList.png").default}
          width="100%"
          alt="appList"
        />
        <div className={inElement.appList ? "info-work active" : "info-work"}>
          <div>
            <h3>Lista de Tareas</h3>
            <p>HTML </p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>REACT - Reducer</p>
            <br />
            <small>
              App de Listado de tareas para aprender el uso de "Reducer"
            </small>
            <a href="" className="github">
              <img
                src={
                  require("../../assets/211904_social_github_icon.svg").default
                }
                alt="logo-git"
                width="35px"
              />
            </a>
            <a href="" className="google">
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
      </article>
      <article
        onMouseOver={() => setInElement({ ...inElement, sunnyside: true })}
        onMouseOut={() => setInElement({ ...inElement, sunnyside: false })}
      >
        <img
          src={require("../../assets/landing1.png").default}
          width="100%"
          alt="Landing"
        />
        <div className={inElement.sunnyside ? "info-work active" : "info-work"}>
          <div>
            {" "}
            <h3>Landing Page</h3>
            <p>HTML </p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <br />
            <small>Landing Page de Practica para FrontEnd-Mentor</small>
            <a href="" className="github">
              <img
                src={
                  require("../../assets/211904_social_github_icon.svg").default
                }
                alt="logo-git"
                width="35px"
              />
            </a>
            <a href="" className="google">
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
      </article>
      <article
        onMouseOver={() => setInElement({ ...inElement, tateti: true })}
        onMouseOut={() => setInElement({ ...inElement, tateti: false })}
      >
        <img
          src={require("../../assets/tateti1.png").default}
          width="100%"
          alt="tateti"
        />
        <div className={inElement.tateti ? "info-work active" : "info-work"}>
          <div>
            {" "}
            <h3>Juego de Tateti</h3>
            <p>HTML </p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <br />
            <small>Juego de Tateti, aprendiendo el manejo de eventos</small>
            <a href="" className="github">
              <img
                src={
                  require("../../assets/211904_social_github_icon.svg").default
                }
                alt="logo-git"
                width="35px"
              />
            </a>
            <a href="" className="google">
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
      </article>
      <article
        onMouseOver={() => setInElement({ ...inElement, challengeALK: true })}
        onMouseOut={() => setInElement({ ...inElement, challengeALK: false })}
      >
        <img
          src={require("../../assets/heros-Alkemy.png").default}
          width="100%"
          alt="heros"
        />
        <div
          className={inElement.challengeALK ? "info-work active" : "info-work"}
        >
          <div style={{ position: "relative" }}>
            <h3>Challenge Alkemy</h3>
            <p>HTML </p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>REACT : Redux</p>
            <br />
            <small>
              Challenge de ingreso para Alkemy. Uso de redux, autentificación,
              consumos de Api y rutas
            </small>
            <a href="" className="github">
              <img
                src={
                  require("../../assets/211904_social_github_icon.svg").default
                }
                alt="logo-git"
                width="35px"
              />
            </a>
            <a href="" className="google">
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
      </article>
      <article
        onMouseOver={() => setInElement({ ...inElement, perros: true })}
        onMouseOut={() => setInElement({ ...inElement, perros: false })}
      >
        <img
          src={require("../../assets/buscador-perros.png").default}
          width="100%"
          alt="Dogs-page"
        />
        <div className={inElement.perros ? "info-work active" : "info-work"}>
          <div>
            <h3>Busqueda de Razas</h3>
            <p>HTML </p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>REACT: useStates</p>
            <br />
            <small>Aprendiendo el manejo de "UseState"</small>
            <a href="" className="github">
              <img
                src={
                  require("../../assets/211904_social_github_icon.svg").default
                }
                alt="logo-git"
                width="35px"
              />
            </a>
            <a className="google" href="">
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
      </article>
      <article></article>
    </section>
  );
};
