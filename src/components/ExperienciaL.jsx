import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import navListMenuItems from "@/Data/ExperienciaLoboralData";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
export function ExperienciaL() {
  return (
    <div
      className=" mx-auto  bg-white rounded-2xl p-10  w-11/12 lg:w-full"
      id="ExperienciaL"
    >
      <Typography variant="h3" className="mb-2">
        Experiencia Laboral
      </Typography>
      <Timeline>
        {/* AQUI RECORRER Y CREAR UN TIMELINE ITEM */}
        {navListMenuItems.map(
          ({ title, description, imgUrl, id, resumen }, index) => {
            return (
              <TimelineItem key={index} id={id}>
                <TimelineConnector
                  className={
                    navListMenuItems.length != index + 1 ? "" : "hidden"
                  }
                />
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-white">
                    <Image
                      src={imgUrl}
                      alt={title}
                      className="mx-auto bg-white rounded-none"
                      width={50}
                      height={50}
                    />
                  </TimelineIcon>
                  <div className="flex flex-col">
                    <Typography variant="h5" color="blue-gray">
                      {title}
                    </Typography>
                    <Typography
                      color="gray"
                      className="font-normal text-gray-600"
                    >
                      {description}
                    </Typography>
                  </div>
                </TimelineHeader>

                <TimelineBody className="pb-8">
                  <Typography
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    {resumen}
                  </Typography>
                  {/*
                  <div className="flex flex-col">
                    <a href="" className="self-end">
                      <Button className="flex items-center gap-1 p-2">
                        <ArrowRightEndOnRectangleIcon className="h-[18px] w-[18px] text-white" />{" "}
                        Ver más ...
                      </Button>
                    </a>
                  </div>
                  */}
                </TimelineBody>
              </TimelineItem>
            );
          }
        )}
      </Timeline>
    </div>
  );
}
