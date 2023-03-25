import { Card } from "@/components/ui"
import { useAppSelector } from "@/hooks/reduxHooks"
import Container from "@/layouts/container/Container"
import { data } from "@/data"
import React, { FC } from "react"
import styles from "./Products.module.scss"
import { ProductProps } from "./Products.props"
import ProductType from "./ProductType/ProductType"

import HeartSVG from "/public/img/heart.svg"

const Products: FC<ProductProps> = () => {
  const category = useAppSelector((state) => state.switchProducts.category)
  return (
    <section className={styles.products}>
      <Container className={styles.wrapper}>
        <div className={styles.main}>
          <h1 className={styles.title}>Товары и обородувание</h1>
          <div className={styles.types}>
            <ProductType
              title="Microwave"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              img={HeartSVG}
              category="micro"
            />
            <ProductType
              title="ASP"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              img={HeartSVG}
              category="asp"
            />
            <ProductType
              title="PSA"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              img={HeartSVG}
              category="psa"
            />
          </div>
        </div>
        <div className={styles.items}>
          {data
            .filter((i) => i.category === category)
            .map((i) => (
              <Card key={i.id} title={i.name} category={i.category} />
            ))}
        </div>
      </Container>
    </section>
  )
}

export default Products
