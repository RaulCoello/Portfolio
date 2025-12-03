import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import ListCertificados from "@/Data/HabilidadesData";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
export function Habilidades() {
  return (
    <div
      className=" mx-auto  bg-white rounded-2xl p-10  w-11/12 lg:w-full"
      id="Habilidades"
    >
      <Typography variant="h3" className="mb-2">
        Habilidades
      </Typography>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 bg-blue-gray-50 rounded-lg p-5">
        {ListCertificados.map(({ title }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 text-center items-center justify-center rounded-xl bg-white p-1"
            >
              <Typography color="gray" className="font-normal text-gray-800 ">
                {title}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
