/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a-yazdorov.ru"],
  },
}

module.exports = nextConfig
// sassOptions: {
//   includePaths: [path.join(__dirname, "styles")],
//   prependData: `@import "./Variables.scss";`,
// },
