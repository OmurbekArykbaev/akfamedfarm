import Image from "next/image"
import React, { useState } from "react"

import styles from "./ProductType.module.scss"
import { ProductType } from "./ProductType.props"
import { IoTriangleSharp } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks"
import { switchTypeProducts } from "../slice/productSlice"

const ProductType = ({ title, description, img, category }: ProductType) => {
  const state = useAppSelector((state) => state.switchProducts.category)
  const dispatch = useAppDispatch()

  return (
    <div
      onMouseEnter={() => dispatch(switchTypeProducts(category))}
      className={styles.item}
    >
      {img && <Image className={styles.img} src={img} alt="Image" />}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      {state === category && <IoTriangleSharp className={styles.triangle} />}
    </div>
  )
}

export default ProductType
