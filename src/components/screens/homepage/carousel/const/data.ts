import image from "/public/img/carousel/14.jpg"
import image2 from "/public/img/banner/44.jpg"
import image3 from "/public/img/carousel/12.jpg"
import { StaticImageData } from "next/image"

export const data: IData[] = [
  {
    id: 1,
    image: image,
    alt: "photo1",
  },
  {
    id: 2,
    image: image2,
    alt: "photo2",
  },
  {
    id: 3,
    image: image3,
    alt: "photo3",
  },
]

interface IData {
  id: number
  image: string | StaticImageData
  alt: string
}
