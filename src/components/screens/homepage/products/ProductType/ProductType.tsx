import Image from "next/image"
import React, { useState } from "react"

import styles from "./ProductType.module.scss"
import { ProductType } from "./ProductType.props"
import { IoTriangleSharp } from "react-icons/io5"

const ProductType = ({ title, description, img }: ProductType) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <div
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className={styles.item}
    >
      <Image className={styles.img} src={img} alt="Image" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      {isShow && <IoTriangleSharp className={styles.triangle} />}
    </div>
  )
}

export default ProductType
