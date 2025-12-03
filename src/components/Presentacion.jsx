import {
  Avatar,
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export function Presentacion() {
  return (
    <div className=" mx-auto  bg-white rounded-2xl p-10  w-11/12 lg:w-full">
      <div className="flex lg:flex-row flex-col gap-3">
        <div className="mx-auto items-center justify-center">
          <Image
            src={"../img/Home/face-3.jpg"}
            alt="Vercel Logo"
            className="mx-auto rounded-full border-4 border-gray-500"
            width={250}
            height={250}
            priority
          />
        </div>
        <div className="flex-1  mx-auto items-center justify-center p-2">
          <Typography variant="h3">Raul Coello</Typography>

          <Typography variant="lead" className="text-lg text-gray-600">
            Ingeniero de Software con experiencia en desarrollo full- stack
            (React, Next.js, Node.js, C#, SQL Server, PostgreSQL) y
            participación en proyectos de los sectores salud, alimentos,
            inventarios, ventas, transporte y retail. Interesado en
            Ciberseguridad, con experiencia en auditorías éticas, análisis de
            datos e inteligencia artificial aplicada. Comprometido con aportar
            innovación tecnológica y valor en entornos colaborativos. Otra
            habilidad en la que descato es el diseño gráfico, si deseas ver mis
            trabajos visita mi{" "}
            <span>
              <a
                href="https://sites.google.com/view/raulportafolio/trabajo"
                className="text-cyan-800"
              >
                Portafolio de diseño grafico
              </a>
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
