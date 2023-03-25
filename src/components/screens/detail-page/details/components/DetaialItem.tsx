import React from "react"

import styles from "./DetailItem.module.scss"

const DetaialItem = () => {
  return (
    <div className={styles.item}>
      <h4 className={styles.title}>Размер:</h4>
      <h4 className={styles.value}>1.2метр</h4>
    </div>
  )
}

export default DetaialItem
