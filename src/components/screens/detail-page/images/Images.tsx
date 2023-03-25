import Image from "next/image"
import React from "react"

import styles from "./Images.module.scss"

import MainSVG from "/public/img/card/product.png"
import ChildSVG from "/public/img/detail/child1.png"

const Images = () => {
  return (
    <div className={styles.images}>
      <Image className={styles.main} width={350} src={MainSVG} alt="Main" />
      <div className={styles.children}>
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
      </div>
    </div>
  )
}

export default Images
