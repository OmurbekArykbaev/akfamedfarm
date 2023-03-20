import Image from "next/image"
import React from "react"

import styles from "./Search.module.scss"
import SearchSVG from "/public/img/search.svg"

const Search = () => {
  return (
    <form className={styles.form}>
      <div className={styles.search}>
        <Image src={SearchSVG} alt="Search" />
        <input type="text" placeholder="Поиск по каталогу" />
      </div>
    </form>
  )
}

export default Search
