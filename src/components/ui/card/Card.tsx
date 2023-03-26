import Image from "next/image"
import React from "react"
import Link from "next/link"
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs"
import clsx from "clsx"

import styles from "./Card.module.scss"
import ProductSVG from "/public/img/card/product.png"
import { CardProps } from "./Card.props"
import { Product } from "@/types/Products"

const Card = ({ id, className, name, category, image }: CardProps) => {
  return (
    <Link href={`/product/${id}`} className={clsx(styles.card, className)}>
      <Image
        className={styles.img}
        src={image ? image : ProductSVG}
        width={212}
        height={184}
        alt="Product"
      />
      <button className={styles.btn}>
        <BsBookmark />
      </button>
      <div>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.category}>{category ? category : "Brand"}</span>
      </div>
    </Link>
  )
}

export default Card
