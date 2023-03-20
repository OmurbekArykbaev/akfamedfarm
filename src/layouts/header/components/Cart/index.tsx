import React from "react"
import styles from "./Cart.module.scss"

const Cart = () => {
  return (
    <div className={styles.cart}>
      <span>Товаров на сумму</span>
      <span>2 000 ₽</span>
    </div>
  )
}

export default Cart
