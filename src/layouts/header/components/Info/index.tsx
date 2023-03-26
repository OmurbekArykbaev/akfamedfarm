import Image from "next/image"
import React from "react"
import styles from "./styles.module.scss"

import LogoSvg from "/public/img/logo-akfa.png"
import Link from "next/link"

const Info = () => {
  return (
    <div className={styles.info}>
      <Link href="/" className={styles.logo}>
        <Image src={LogoSvg} alt="Logo" />
      </Link>
      <span className={styles.time}>Время работы: 09.00-18.00</span>
      <div className={styles.phone}>
        <span>+996 502-515-115</span>
        <a href="#">Заказать звонок</a>
      </div>
    </div>
  )
}

export default Info
