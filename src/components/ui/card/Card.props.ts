import { Category, Product } from "@/types/Products"
import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLProps } from "react"

export interface CardProps extends Product {
  className?: string
}
