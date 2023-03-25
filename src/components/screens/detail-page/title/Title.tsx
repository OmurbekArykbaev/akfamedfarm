import Image from "next/image"
import React from "react"

import { Button } from "@/components/ui"

import styles from "./Title.module.scss"

import HeartBlackSVG from "/public/img/heart-black.svg"

const Title = () => {
  return (
    <div className={styles.details}>
      <h1 className={styles.title}>Модульный монитор пациента elite V5</h1>
      <p className={styles.description}>
        Опциональные параметры: ЭКГ по 12-отведениям, Nellcor OxiMaxTM SpO2,
        OMRON® НИАД, 8 каналов ИД, внутричерепное давление, сердечный выброс,
        импедансная кардиография, EDAN G2 CO2, Respironics CO2, Masimo PHASEIN
        AG/O2, биспектральный индекс (BIS)
      </p>

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
