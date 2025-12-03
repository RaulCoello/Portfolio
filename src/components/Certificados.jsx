import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import ListCertificados from "@/Data/CertificacionesData";
import { DocumentIcon } from "@heroicons/react/24/solid";

import { useState } from "react";
import { ViewPDF } from "@/components/ViewPDF";

export function Certificados() {
  //permitir que cuando se de click en un boton de los certificados se pueda ver el pdf en un iframe
  const [pdf, setPDf] = useState("");

  return (
    <div
      className=" mx-auto  bg-white rounded-2xl p-10  w-11/12 lg:w-full"
      id="Certificaciones"
    >
      <Typography variant="h3" className="mb-2">
        Certificaciones
      </Typography>
      <ViewPDF
        close={() => setPDf("")}
        open={pdf ? true : false}
        pdfUrl={pdf}
      />
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
        {ListCertificados.map(
          ({ title, Auspicio, imgUrl, pdf, url, shadow }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 text-center items-center justify-center"
              >
                <div>
                  <a href={url}>
                    <Image
                      src={imgUrl}
                      alt={title}
                      className={`mx-auto bg-white rounded-none hover:shadow-2xl hover:${shadow}`}
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
                <Typography color="gray" className="font-bold text-gray-800 ">
                  {title}
                </Typography>
                <Button
                  className="flex items-center gap-1"
                  onClick={() => setPDf(pdf)}
                >
                  <DocumentIcon className="h-[18px] w-[18px] text-white" /> PDF
                </Button>
                {/*
                <Typography
                  color="gray"
                  className="font-normal text-gray-600 text-sm"
                >
                  {Auspicio}
                </Typography>
                */}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
