import Link from "next/link"
import React from "react"
import Image from "next/image"
import { BsBookmark } from "react-icons/bs"

import styles from "./styles.module.scss"

import UserSvg from "public/img/user.svg"

const Panel = () => {
  return (
    <ul className={styles.panel}>
      <li>
        <Link href={"/"}>
          {/* <Image src={HeartSvg} alt="Liked" />
           */}
          <BsBookmark size={25} color={"white"} />
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
