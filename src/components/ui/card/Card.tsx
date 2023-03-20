import Image from "next/image"
import React from "react"
import Link from "next/link"
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs"
import clsx from "clsx"

import styles from "./Card.module.scss"
import ProductSVG from "/public/img/card/product.png"
import { CardProps } from "./Card.props"

const Card = ({
  children,
  img,
  title,
  link,
  category,
  className,
  ...props
}: CardProps) => {
  return (
    <Link href="/" className={clsx(styles.card, className)}>
      <Image className={styles.img} src={ProductSVG} alt="Product" />
      <button className={styles.btn}>
        <BsBookmark />
      </button>
      <div>
        <h3 className={styles.title}>Модульный монитор пациента elite V5</h3>
        <span className={styles.category}>Microwave</span>
      </div>
    </Link>
  )
}

export default Card
