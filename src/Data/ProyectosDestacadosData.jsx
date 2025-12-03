// lista de proyectos destacados
import img1 from "../../public/img/Home/Logouteq.png";
import img2 from "../../public/img/Home/FeYa.png";
import img3 from "../../public/img/Home/ex.png";
import img4 from "../../public/img/Home/TechCorpArtIMG.png";

const navListMenuItemsProyectos = [
  {
    title: "Encuestas app",
    description: "Universidad Técnica Estatal de Quevedo",
    imgUrl: img1,
    url: "https://app.uteq.edu.ec/",
    id: "#Encuestaapp",
    resumen:
      "Proyecto desarrollado para la Universidad Técnica Estatal de Quevedo, en el cuál se empleó una arquitectura distribuida, Nextjs como frontend, NodeJS como backend y PostgreSQL para la base de datos. Se trata de una aplicación Web que permite realizar encuestas de todo tipo de manera masiva en tiempo real.",
  },
  {
    title: "Comunikids",
    description: "Fe y Alegría - Santo Domingo",
    imgUrl: img2,
    url: "https://fyc.uteq.edu.ec/comunikids/Acerca",
    id: "#Comunikids",
    resumen:
      "Este es un frontend web que complementa el desarrollo de un sistema realizado en un equipo de trabajo para la aplicación ComuniKids para la institución Fe y Alegría.",
  },
  {
    title: "Comisariato Polita",
    description: "Buena Fé",
    imgUrl: img3,
    url: "",
    id: "#Polita",
    resumen:
      "Landing Page para el comisariato Polita ubicado en Buena Fe - Los Ríos - Quevedo",
  },
  {
    title: "Turismo Canoa",
    description: "Canoa",
    imgUrl: img3,
    url: "https://raulcoello.github.io/TurismoCanoa/",
    id: "#Canoa",
    resumen:
      "Landing Page para la evualución de viabilidad de una plataforma turistica para Canoa - Ecuador",
  },
  {
    title: "TechCorp",
    description: "Buena Fé",
    imgUrl: img4,
    url: "http://www.techcorpbs.com/",
    id: "#TechCorp",
    resumen:
      "Agencia de soluciones informáticas en donde participo en el desarrollo de sistemas para empresas",
  },
  {
    title: "Sistema POS TechCorp",
    description: "Buena Fé",
    imgUrl: img4,
    url: "http://www.techcorpbs.com/",
    id: "#TechCorp",
    resumen:
      "Sistema POS con facturación electrónica para comisariatos, farmacias, clinicas, etc.",
  },
];

export default navListMenuItemsProyectos;
