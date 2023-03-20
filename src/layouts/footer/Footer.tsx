import LogoSvg from "/public/img/logo-akfa.png"
import HeartSvg from "public/img/heart.svg"
import UserSvg from "public/img/user.svg"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Container } from "../"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.wrapper}>
        <ul className={styles.items}>
          <li>Малярные товары</li>
          <li>Электрооборудование</li>
          <li>Спецодежда</li>
          <li>Для дома и дачи</li>
          <li>Сезонное</li>
          <li>Инструмент</li>
        </ul>
        <ul className={styles.items}>
          <li>О компании</li>
          <li>Контакты</li>
          <li>Новинки</li>
          <li>Хиты сезона</li>
          <li>Распродажи</li>
        </ul>
        <div className={styles.contact}>
          <Image src={LogoSvg} alt="Logo" />
          <h3>
            +7 495 120-32-14 <br />
            +7 495 120-32-15
          </h3>
          <div className={styles.social}>
            <Link className={styles.link} href={"/"}>
              <Image src={HeartSvg} alt="Liked" />
            </Link>

            <Link href={"/"}>
              <Image src={UserSvg} alt="User" />
            </Link>
          </div>
          <p>
            Соглашение пользователя <br />
            «Copyright © Название 2023»
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
