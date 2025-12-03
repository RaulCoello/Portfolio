// nav list menu
import img1 from "../../public/img/Home/LogoHospitalMunoz.png";
import img2 from "../../public/img/Home/LogoOIA.png";
import img3 from "../../public/img/Home/Logouteq.png";

const navListMenuItems = [
  {
    title: "Hospital Muñoz - Quevedo",
    description: "noviembre 2024 - octubre 2025",
    imgUrl: img1,
    id: "#HM",
    resumen:
      "Desarrollé un sistema de turnos web (Next.js, Node.js,PostgreSQL) que redujo en un 40% los tiempos de espera de los pacientes y mejoró la organización de citas. Implementé la digitalización de documentos clínicos, eliminando el uso de papel y logrando una reducción del 90% en procesos manuales. Brindé soporte técnico continuo, garantizando la operatividad del sistema con un 99% de disponibilidad.",
  },
  {
    title: "Oriental OIA - Quevedo",
    description: "junio 2023 - octubre 2024",
    imgUrl: img2,
    id: "#OIA",
    resumen:
      "Desarrollé aplicaciones de escritorio (C#) y aplicaciones web (React, Java, ASP.NET) que mejoraron la productividad del área administrativa y se automatizaron procesos. Participé en la migración de bases de datos en SQL Server, optimizando la velocidad de consultas y reduciendo los tiempos de procesamiento en un 35%. Implementé mejoras en el sistema de facturación electrónica, logrando una reducción del 40% en los tiempos de espera para clientes y asegurando el cumplimiento normativo. Actualicé aplicaciones existentes y proporcioné soporte técnico continuo, garantizando la estabilidad de las operaciones.",
  },
  {
    title: "Universidad Técnica Estatal de Quevedo",
    description: "marzo 2022 - agosto 2023",
    imgUrl: img3,
    id: "#UTEQ",
    resumen:
      "Desarrollo de sistemas para el área académica de la UTEQ, se utilizó arquitecturas distribuidas para ambos proyectos, de igual forma se empleó Nextjs como Frontend y Nodejs como backend y PostgreSQL para la base de datos.",
  },
];

export default navListMenuItems;
