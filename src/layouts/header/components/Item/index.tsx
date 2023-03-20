import Link from "next/link"
import React from "react"
import Image from "next/image"
import styles from "./styles.module.scss"

import HeartSvg from "public/img/heart.svg"
import UserSvg from "public/img/user.svg"

const Panel = () => {
  return (
    <ul className={styles.panel}>
      <li>
        <Link href={"/"}>
          <Image src={HeartSvg} alt="Liked" />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <Image src={UserSvg} alt="User" />
        </Link>
      </li>
    </ul>
  )
}

export default Panel
