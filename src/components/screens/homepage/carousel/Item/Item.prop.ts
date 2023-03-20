import { StaticImageData } from "next/image"

export interface ItemProps {
  src: string | StaticImageData
  alt: string
}
