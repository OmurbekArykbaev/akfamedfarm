import { Card } from "@/components/ui"
import { useAppSelector } from "@/hooks/reduxHooks"
import Container from "@/layouts/container/Container"
import { data } from "@/const/data"
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
              category="microwave"
            />
            <ProductType
              title="High-frequency"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              category="high-frequency"
            />
            <ProductType
              title="Laser"
              description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum"
              category="laser"
            />
          </div>
        </div>
        <div className={styles.items}>
          {data
            .filter((i) => i.category === category)
            .map((i) => (
              <Card
                id={i.id}
                description={i.description}
                key={i.id}
                name={i.name}
                image={i.image}
                category={i.category}
              />
            ))}
        </div>
      </Container>
    </section>
  )
}

export default Products
