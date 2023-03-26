/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: ":3000",
        pathname: "/img/products/",
      },
    ],
  },
}
// sassOptions: {
//   includePaths: [path.join(__dirname, "styles")],
//   prependData: `@import "./Variables.scss";`,
// },
