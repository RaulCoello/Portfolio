/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", //  obligatorio para GitHub Pages
  images: {
    unoptimized: true, // necesario porque next/image requiere un server
  },
  basePath: "/Portfolio", // ruta del repo en GitHub
  assetPrefix: "/Portfolio/",
};

module.exports = nextConfig;
