import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

import gitIcon from "../../public/img/Home/github.png";
import LinkIcon from "../../public/img/Home/linkedin.png";

export function Contacto() {
  return (
    <div
      className=" mx-auto  bg-white rounded-2xl p-10  w-11/12 lg:w-full"
      id="Contacto"
    >
      <Typography variant="h3" className="mb-2">
        Contacto
      </Typography>

      <div className="w-1/3 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10  rounded-lg p-5 items-center text-center justify-center">
        <div className="transition-all duration-300 ease-in-out hover:scale-110">
          <a href="https://www.linkedin.com/in/raul-steven-coello-castillo-387124208">
            <Image
              src={LinkIcon}
              alt="Linkedin"
              className={`mx-auto bg-white rounded-none  `}
              width={300}
              height={300}
            />
          </a>
        </div>

        <div className="transition-all duration-300 ease-in-out hover:scale-110">
          <a href="https://github.com/RaulCoello">
            <Image
              src={gitIcon}
              alt="GitHub"
              className={`mx-auto bg-white rounded-none  `}
              width={300}
              height={300}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
