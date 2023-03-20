import { Container } from "@/layouts"
import React from "react"
import Asidebar from "../asidebar/Asidebar"

import styles from "./Item.module.scss"

import GridSVG from "/public/img/catalog/grid.svg"
import RowSVG from "/public/img/catalog/row.svg"

import Image from "next/image"
import { Card } from "@/components/ui"

const Items = () => {
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
            <Card className={styles.card} />
            <Card className={styles.card} />
            <Card className={styles.card} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Items
