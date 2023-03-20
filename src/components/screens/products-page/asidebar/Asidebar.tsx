import React from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "./Asidebar.module.scss"
import ArrowSVG from "public/img/catalog/arrow-left.svg"

const Asidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.title}>
        <h1>Товары и оборудование</h1>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link className={styles.link} href="/">
            <span>Microwave</span> <Image src={ArrowSVG} alt="arrow" />
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/">
            <span>High-frequency</span> <Image src={ArrowSVG} alt="arrow" />
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/">
            <span>Laser</span> <Image src={ArrowSVG} alt="arrow" />
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Asidebar
