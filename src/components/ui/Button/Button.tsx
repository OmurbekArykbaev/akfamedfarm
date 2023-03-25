import clsx from "clsx"
import React, { FC, PropsWithChildren } from "react"

import styles from "./Button.module.scss"

import { ButtonProps } from "./Button.props"

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={clsx(styles.custom, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
