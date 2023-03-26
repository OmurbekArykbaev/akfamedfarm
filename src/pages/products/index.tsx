import React, { FC } from "react"

import { Layout } from "@/layouts"
import { Banner, Items } from "@/components/screens"
import { Product } from "@/types/Products"
import { GetStaticProps, InferGetStaticPropsType } from "next"

const Products: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  return (
    <Layout title="Товары" description="Сайт для Медфарм">
      <Banner />
      <Items items={products} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{
  products: Product[]
}> = async () => {
  const res = await fetch(
    "https://mocki.io/v1/79fa3c3f-0d58-4be9-8bed-3a0a33ebc4be"
  )
  const products: Product[] = await res.json()

  if (!products) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        // statusCode: 301
      },
    }
  }

  return { props: { products } }
}

export default Products
