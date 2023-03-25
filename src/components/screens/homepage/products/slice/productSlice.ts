import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type Category = "micro" | "asp" | "psa"

const initialState: initialState = {
  isActive: false,
  category: "asp",
}

interface initialState {
  isActive: boolean
  category: Category
}

export const switchProducts = createSlice({
  name: "switch-products",

  initialState,
  reducers: {
    switchTypeProducts: (state, action: PayloadAction<Category>) => {
      state.category = action.payload
    },
  },
})

export const { switchTypeProducts } = switchProducts.actions

export default switchProducts.reducer
