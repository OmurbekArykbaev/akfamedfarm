import Image from "next/image"
import React from "react"
import Link from "next/link"
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs"
import clsx from "clsx"

import styles from "./Card.module.scss"
import ProductSVG from "/public/img/card/product.png"
import { CardProps } from "./Card.props"

const Card = ({ id, className, title, category, ...props }: CardProps) => {
  return (
    <Link href={`/product/${id}`} className={clsx(styles.card, className)}>
      <Image className={styles.img} src={ProductSVG} alt="Product" />
      <button className={styles.btn}>
        <BsBookmark />
      </button>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.category}>{category}</span>
      </div>
    </Link>
  )
}

export default Card
