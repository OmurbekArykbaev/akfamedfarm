import React, { useState } from "react"
import DetaialItem from "./components/DetaialItem"

import styles from "./Details.module.scss"

type ToggleType = "description" | "detail"

const Details = () => {
  const [toggle, setToggle] = useState<ToggleType>("detail")

  const switchDescrHandler = () => {
    setToggle("description")
  }
  const switchDetailHandler = () => {
    setToggle("detail")
  }

  return (
    <div className={styles.details}>
      <ul className={styles.panel}>
        <li>
          <button
            onClick={switchDescrHandler}
            className={toggle === "description" ? styles.active : ""}
          >
            Описание
          </button>
        </li>
        <li>
          <button
            onClick={switchDetailHandler}
            className={toggle === "detail" ? styles.active : ""}
          >
            Характеристики
          </button>
        </li>
      </ul>

      <div className={styles.content}>
        {toggle === "detail" ? (
          <div className={styles.detailContent}>
            <DetaialItem />
            <DetaialItem />
            <DetaialItem />
          </div>
        ) : (
          <div className={styles.descrContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              beatae nulla placeat illum numquam sunt, distinctio dolorem
              voluptatem repellendus laboriosam eum! Repudiandae eligendi quam
              aperiam non obcaecati nisi harum natus asperiores ipsa quidem, ad
              corporis velit sed reprehenderit ea excepturi.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Details
