import React, { FC } from "react"

import { Button } from "@/components/ui"

import styles from "./Title.module.scss"

import HeartBlackSVG from "/public/img/heart-black.svg"
import { TitleProps } from "./Title.props"

const Title: FC<TitleProps> = ({ title, description }) => {
  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>

      <div className={styles.btns}>
        <Button>
          <span>Сохранить</span>
          {/* <Image src={HeartBlackSVG} alt="Liked" /> */}
        </Button>
      </div>
    </div>
  )
}

export default Title
