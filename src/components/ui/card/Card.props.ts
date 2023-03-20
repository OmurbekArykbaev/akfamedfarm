import {
  AnchorHTMLAttributes,
  LinkHTMLAttributes,
  DetailedHTMLProps,
} from "react"

export interface CardProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  link?: string
  title?: string
  category?: string
  img?: string
}
