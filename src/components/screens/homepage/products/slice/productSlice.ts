import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Category } from "@/types/Products"

const initialState: initialState = {
  isActive: false,
  category: "laser",
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
