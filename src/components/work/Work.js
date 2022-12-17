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
    name: "Blogr Landing",
    img: require("../../assets/blogr.jpg").default,
    skills: ["HTML", "CSS", "JS"],
    text: "Landing Page respondive para FrontendMentor",
    principal: ["SASS"],
    git: "https://github.com/AlejandroWogelman/Page-landing-Blogr",
    link: "https://alejandrowogelman.github.io/Page-landing-Blogr/",
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
  {
    name: "E-commerce",
    img: require("../../assets/tecnoStore.png").default,
    skills: ["HTML", "CSS", "REACT"],
    text: "Proyecto trabajando en equipo para NO Country. Back-ends y Front-ends",
    principal: ["REDUX", "React-router", "Api"],
    git: "https://github.com/No-Country/c6-22",
    link: "https://new-tecnostore.netlify.app/",
  },
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
