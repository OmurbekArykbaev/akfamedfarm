import React from "react"

import styles from "./Product.module.scss"
import { Container, Layout } from "@/layouts"
import { Details, Images, Title } from "@/components/screens"

const ProductDetail = () => {
  return (
    <Layout title="Товар Micro" description="описание">
      <section className={styles.detail}>
        <Container className={styles.wrapper}>
          <div className={styles.content}>
            <Images />
            <Title />
          </div>
          <Details />
        </Container>
      </section>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const products = await res.json()

//   const paths = products.map((product: any) => ({
//     params: { id: product.id.toString() },
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }: any) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   )
//   const product = await res.json()

//   return { props: { product } }
// }

export default ProductDetail
