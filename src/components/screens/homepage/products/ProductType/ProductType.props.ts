import { Category } from "@/types/Products"
import { StaticImageData } from "next/image"

export interface ProductType {
  title: string
  description: string
  img?: string | StaticImageData
  category: Category
}
