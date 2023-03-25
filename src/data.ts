import { Category } from "@/components/screens/homepage/products/slice/productSlice"

export const data: Idata[] = [
  { id: 0, name: "Монитор модульный", category: "micro" },
  { id: 1, name: "Аппарат модульный", category: "asp" },
  { id: 3, name: "Прибор модульный", category: "psa" },
  { id: 4, name: "123", category: "micro" },
  { id: 5, name: "Аппрата 10", category: "asp" },
  { id: 6, name: "Аппарат 11", category: "psa" },
  { id: 7, name: "Аппарат 12", category: "micro" },
  { id: 8, name: "Аппарат 13", category: "asp" },
  { id: 9, name: "аппарат 14", category: "psa" },
]

interface Idata {
  id: number
  name: string
  category: Category
}
