import { Container } from "@/layouts"
import React, { FC } from "react"
import Asidebar from "../asidebar/Asidebar"

import styles from "./Item.module.scss"

import GridSVG from "/public/img/catalog/grid.svg"
import RowSVG from "/public/img/catalog/row.svg"

import Image from "next/image"
import { Card } from "@/components/ui"

import { Product } from "@/types/Products"

const Items = ({ items }: { items: Product[] }) => {
  return (
    <section className={styles.items}>
      <Container className={styles.wrapper}>
        <Asidebar />
        <div className={styles.main}>
          <div className={styles.filter}>
            <div className={styles.view}>
              <span>Вид:</span>
              <button>
                <Image src={GridSVG} alt="Grid" />
              </button>

              <button>
                <Image src={RowSVG} alt="Grid" />
              </button>
            </div>
          </div>
          <div className={styles.products}>
            {items.map((i: any) => (
              <Card key={i.id} {...i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Items
