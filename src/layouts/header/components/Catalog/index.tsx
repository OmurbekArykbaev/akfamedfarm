import Link from "next/link"
import React from "react"
import Image from "next/image"
import styles from "./catalog.module.scss"
import BurgerSVG from "/public/img/burger-btn.svg"

const CatalogBtn = () => {
  return (
    <Link href="/products" className={styles.btn}>
      <Image src={BurgerSVG} alt="Catalog" />
      <span>Каталог товаров</span>
    </Link>
  )
}

export default CatalogBtn
