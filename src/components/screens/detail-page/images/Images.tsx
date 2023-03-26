import Image from "next/image"
import React, { FC } from "react"

import styles from "./Images.module.scss"
import { ImagesProps } from "./Images.props"

import MainSVG from "/public/img/card/product.png"
import ChildSVG from "/public/img/detail/child1.png"

const Images: FC<ImagesProps> = ({ src, alt }) => {
  return (
    <div className={styles.images}>
      <Image
        className={styles.main}
        width={350}
        height={303}
        src={src ? src : MainSVG}
        alt={alt ? alt : "Main Image"}
      />
      {/* <div className={styles.children}>
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
        <Image src={ChildSVG} width={90} height={90} alt="Child" />
      </div> */}
    </div>
  )
}

export default Images
