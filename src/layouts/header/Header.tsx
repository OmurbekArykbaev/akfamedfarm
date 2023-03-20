import React from "react"
import Image from "next/image"
import Link from "next/link"

import Container from "@/layouts/container/Container"
import CatalogBtn from "./components/Catalog"
import Info from "./components/Info"
import Panel from "./components/Item"
import Search from "./components/Search"
import styles from "./style.module.scss"

import InstagramSVG from "/public/img/instagram.svg"
import VkSVG from "/public/img/vk.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Container className={styles.wrapper}>
          <Info />
          <Panel />
        </Container>
      </div>
      <div className={styles.navbar2}>
        <Container className={styles.wrapper}>
          <CatalogBtn />
          <ul className={styles.links}>
            <li>
              <Link href="/">О компании</Link>
            </li>
            <li>
              <Link href="/">Акции</Link>
            </li>
            <li>
              <Link href="/">Хиты сезона</Link>
            </li>
            <li>
              <Link href="/">Новинки</Link>
            </li>
          </ul>
          <div className={styles.social}>
            <a href="#" className={styles.link}>
              <Image src={InstagramSVG} alt="instagram" />
            </a>
            <a href="#" className={styles.link}>
              <Image src={VkSVG} alt="Vkontakte" />
            </a>
          </div>
          <Search />
        </Container>
      </div>
    </header>
  )
}

export default Header
