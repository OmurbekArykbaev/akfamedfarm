import React from "react"

import { Layout } from "@/layouts"
import { Banner, Items } from "@/components/screens"

const Products = ({ products }: { products: any }) => {
  return (
    <Layout title="Товары" description="Сайт для Медфарм">
      <Banner />
      <Items items={products} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}

export default Products
