import React, { FC } from "react"

import styles from "./Product.module.scss"
import { Container, Layout } from "@/layouts"
import { Details, Images, Title } from "@/components/screens"
import { Product } from "@/types/Products"
import { GetStaticProps, InferGetStaticPropsType } from "next"

const ProductDetail: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <Layout title="Товар Micro" description="описание">
      <section className={styles.detail}>
        <Container className={styles.wrapper}>
          <div className={styles.content}>
            <Images src={data.image} alt={data.name} />
            <Title title={data.name} description={data.description} />
          </div>
          <Details />
        </Container>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://mocki.io/v1/79fa3c3f-0d58-4be9-8bed-3a0a33ebc4be"
  )
  const products = await res.json()

  const paths = products.map((product: Product) => ({
    params: { id: String(product.id) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ data: Product }> = async (
  context
) => {
  const res = await fetch(
    "https://mocki.io/v1/79fa3c3f-0d58-4be9-8bed-3a0a33ebc4be"
  )
  const products: Product[] = await res.json()
  const data = products.find((i) => i.id.toString() === context.params?.id)

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        // statusCode: 301
      },
    }
  }

  return { props: { data } }
}

export default ProductDetail
