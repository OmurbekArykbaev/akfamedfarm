// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@/const/data"
import type { NextApiRequest, NextApiResponse } from "next"
import { Product } from "@/types/Products"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(data)
}
