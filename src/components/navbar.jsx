import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  Bars2Icon,
  ChatBubbleLeftIcon,
  AcademicCapIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import Lottie from "lottie-react";
import anim from "../../public/anim/experience.json";
import anim2 from "../../public/anim/proyects.json";

// data
import navListMenuItems from "@/Data/ExperienciaLoboralData";
import navListMenuItemsProyectos from "@/Data/ProyectosDestacadosData";

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ title, description, imgUrl, id }) => (
      <a href={id} key={title}>
        <MenuItem>
          <div className="flex flex-row" href={id}>
            <div className="items-center justify-center self-center p-2">
              <Image
                src={imgUrl}
                alt="Vercel Logo"
                className="mx-auto"
                width={24}
                height={24}
                priority
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                {title}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {description}
              </Typography>
            </div>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#ExperienciaL"
            variant="small"
            className="font-normal"
          >
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Experiencia Laboral{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="white"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            {/*<RocketLaunchIcon strokeWidth={1} className="h-28 w-28" /> */}
            <div className="mx-auto bg-white">
              <Lottie animationData={anim} className="w-auto mx-auto" />
            </div>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Experiencia Laboral{" "}
      </MenuItem>
      {/*ml-6 flex w-full flex-col gap-1 lg:hidden */}
      <ul className="ml-6  w-full flex-col gap-1 hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

// para el menu de los proyectos
function NavListMenuProyectos() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItemsProyectos.map(
    ({ title, description, imgUrl, id }) => (
      <a href={id} key={title}>
        <MenuItem>
          <div className="flex flex-row">
            <div className="items-center justify-center self-center p-2">
              <Image
                src={imgUrl}
                alt="Vercel Logo"
                className="mx-auto"
                width={24}
                height={24}
                priority
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                {title}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {description}
              </Typography>
            </div>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Proyectos Destacados{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="white"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            {/*<RocketLaunchIcon strokeWidth={1} className="h-28 w-28" /> */}
            <div className="mx-auto bg-white">
              <Lottie animationData={anim2} className="w-auto mx-auto" />
            </div>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Proyectos Destacados{" "}
      </MenuItem>
      {/*ml-6 flex w-full flex-col gap-1 lg:hidden */}
      <ul className="ml-6  w-full flex-col gap-1 hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Certificaciones",
    icon: AcademicCapIcon,
    id: "#Certificaciones",
  },
  {
    label: "Habilidades",
    icon: BoltIcon,
    id: "#Habilidades",
  },
  {
    label: "Contacto",
    icon: ChatBubbleLeftIcon,
    id: "#Contacto",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {/* LISTA DE EXPERIENCIA LABORAL */}
      <NavListMenu />
      {/* HACER UNA LISTA SIMILAR PERO PARA LOS PROYECTOS  <NavListMenu />*/}
      <NavListMenuProyectos />
      {/* ITEMS DEL MENU */}
      {navListItems.map(({ label, icon, id }, key) => (
        <Typography
          key={label}
          as="a"
          href={id}
          variant="small"
          color="gray"
          className="font-medium text-gray-100"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full bg-black hover:text-black text-gray-100 ">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="w-11/12 lg:w-full mx-auto max-w-screen-xl p-2 lg:rounded-xl lg:pl-6 mt-4">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
          Portfolio
        </Typography>
        {/* LISTA DE ITEMS */}
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
