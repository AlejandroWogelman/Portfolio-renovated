import { Card } from "./Card";
import "./work.css";

const data = [
  {
    name: "Teclado Logi K380",
    img: require("../../assets/teclado.png").default,
    git: "https://github.com/AlejandroWogelman/logitech-K380",
    link: "https://alejandrowogelman.github.io/logitech-K380/",
    skills: ["HTML", "SASS", "JS"],
    text: "Maquetado de Teclado modelo Logitech k380",
    principal: ["SASS"],
  },
  {
    name: "Mercado Libre",
    img: require("../../assets/meliScreen.png").default,
    skills: ["REACT", "VITE", "CSS"],
    text: "Página de Detalle de Mercado Libre y simulación de algunas funciones.",
    principal: ["TYPESCRIPT"],
    git: "https://github.com/AlejandroWogelman/mercadoLibre-copy",
    link: "https://mercado-libre-copy.netlify.app/",
  },
  {
    name: "TA-TE-TI",
    img: require("../../assets/tateti1.png").default,
    skills: ["HTML", "CSS", "JS"],
    text: "Juego de Tateti, aprendiendo el manejo de eventos",
    principal: ["DOM"],
    git: "https://github.com/AlejandroWogelman/tateti",
    link: "https://tateti2021.netlify.app/",
  },
  {
    name: "Mascotas Perdidas",
    img: require("../../assets/AnimalSearch.png").default,
    skills: ["HTML", "CSS", "REACT"],
    text: "Aplicación para el marcado de mascotas extraviadas sobre un mapa interactivo.",
    principal: ["LEAFLET", "REDUX", "FIREBASE", "GEOCODING"],
    git: "https://github.com/AlejandroWogelman/Animal--search",
    link: "https://animal-search.vercel.app/",
  },
  /* {
    name: "Razas de Perros",
    img: require("../../assets/buscador-perros.png").default,
    skills: ["HTML", "CSS", "REACT"],
    text: "Aprendiendo el manejo de 'UseState'",
    principal: ["UseState"],
    git: "https://github.com/AlejandroWogelman/Buscador-de-fotos-de-Perros",
    link: "https://razas-perros.netlify.app/",
  }, */
  {
    name: "Alkemy Challenge",
    img: require("../../assets/heros-Alkemy.png").default,
    skills: ["HTML", "CSS", "JS", "REACT"],
    principal: ["REDUX", "ROUTER", "FORMIK", "API"],
    text: "Challenge de ingreso. Uso de Api y Redux",
    git: "https://github.com/AlejandroWogelman/Heros-TEAM-allkemy",
    link: "https://super-equipo.netlify.app/",
  },
];

export const Work = () => {
  return (
    <div className="work2_container">
      {data.map((el) => (
        <Card {...el} key={el.img} />
      ))}
    </div>
  );
};
