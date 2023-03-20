import { Card } from "@/components/ui"
import Container from "@/layouts/container/Container"
import React from "react"
import styles from "./Products.module.scss"
import ProductType from "./ProductType/ProductType"

import HeartSVG from "/public/img/heart.svg"
const Products = () => {
  return (
    <section className={styles.products}>
      <Container className={styles.wrapper}>
        <div className={styles.main}>
          <h1 className={styles.title}>Товары и обородувание</h1>
          <div className={styles.types}>
            <ProductType
              title="Lorem ipsum"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              img={HeartSVG}
            />
            <ProductType
              title="Lorem ipsum"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              img={HeartSVG}
            />
            <ProductType
              title="Lorem ipsum"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              img={HeartSVG}
            />
          </div>
        </div>
        <div className={styles.items}>
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </section>
  )
}

export default Products
