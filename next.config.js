/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecomicrowave.com",
        port: "",
        pathname: "/App/images/",
      },
    ],
  },
}
// sassOptions: {
//   includePaths: [path.join(__dirname, "styles")],
//   prependData: `@import "./Variables.scss";`,
// },
