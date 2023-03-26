import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

import Container from "@/layouts/container/Container"
import CatalogBtn from "./components/Catalog"
import Info from "./components/Info"
import Panel from "./components/Item"
import Search from "./components/Search"
import styles from "./style.module.scss"

import InstagramSVG from "/public/img/instagram.svg"

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
              <Link href="/about">О компании</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/akfamedfarm/"
              className={styles.link}
            >
              <Image src={InstagramSVG} alt="instagram" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=996502515115&text&type=phone_number&app_absent=0"
              className={styles.link}
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
          <Search />
        </Container>
      </div>
    </header>
  )
}

export default Header
