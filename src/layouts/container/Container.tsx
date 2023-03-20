import React from "react"

import { ContainerProps } from "./Container.props"
import styles from "./Container.module.scss"
import clsx from "clsx"

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={clsx(className, styles.container)} {...props}>
      {children}
    </div>
  )
}

export default Container
