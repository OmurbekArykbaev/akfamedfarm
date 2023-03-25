import { Category } from "@/components/screens/homepage/products/slice/productSlice"
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"

export interface CardProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  link?: string
  title?: string
  category?: Category
  img?: string
}
