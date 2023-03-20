import React, { FC, PropsWithChildren } from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Meta from "../meta/Meta"
import { IMeta } from "../meta/Meta.interface"
import styles from "./Layout.module.scss"

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <Meta title={title} description={description}>
      <div className={styles.page}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </Meta>
  )
}

export default Layout
