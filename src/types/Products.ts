export interface Product {
  id: number
  name: string
  category: Category
  brand?: string
  description: string
  image: string
}

export type Category = "microwave" | "laser" | "high-frequency"
