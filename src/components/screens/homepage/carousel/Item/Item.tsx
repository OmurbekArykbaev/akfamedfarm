import Image from "next/image"
import React from "react"

import styles from "./Item.module.scss"
import { ItemProps } from "./Item.prop"

const Item = ({ src, alt }: ItemProps) => {
  return (
    <div className={styles.item}>
      <Image className={styles.img} src={src} alt={alt} />
    </div>
  )
}

export default Item
