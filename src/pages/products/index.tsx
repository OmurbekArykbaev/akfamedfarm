import React from "react"

import { Layout } from "@/layouts"
import { Banner, Items } from "@/components/screens"

const Products = () => {
  return (
    <Layout title="Товары" description="Сайт для Медфарм">
      <Banner />
      <Items />
    </Layout>
  )
}

export default Products
