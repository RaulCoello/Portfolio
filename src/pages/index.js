import { Inter } from "next/font/google";
import { ComplexNavbar } from "@/components/navbar";
import { Presentacion } from "@/components/Presentacion";
import { ExperienciaL } from "@/components/ExperienciaL";
import { ProyectosD } from "@/components/ProyectosD";
import { Certificados } from "@/components/Certificados";
import { Habilidades } from "@/components/Habilidades";
import { Contacto } from "@/components/Contacto";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Raul Coello | Portfolio</title>
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <ComplexNavbar />
      <div
        className={`flex flex-col gap-5 lg:w-full mx-auto max-w-screen-xl  lg:rounded-xl  mt-4 ${inter.className}`}
      >
        <Presentacion />
        <ExperienciaL />
        <ProyectosD />
        <Certificados />
        <Habilidades />
        <Contacto />
      </div>
    </>
  );
}
