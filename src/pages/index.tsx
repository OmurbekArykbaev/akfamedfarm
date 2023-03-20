import { Inter } from "next/font/google"

import { CustomCarousel, Products } from "@/components/screens"
import { Layout } from "@/layouts"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Layout title="Главная" description="Сайт для Медфарм">
        <CustomCarousel />
        <Products />
      </Layout>
    </>
  )
}
