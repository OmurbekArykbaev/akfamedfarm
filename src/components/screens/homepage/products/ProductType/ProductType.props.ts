import { StaticImageData } from "next/image"
import { Category } from "../slice/productSlice"

export interface ProductType {
  title: string
  description: string
  img: string | StaticImageData
  category: Category
}
