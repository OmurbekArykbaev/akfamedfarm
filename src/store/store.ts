import { configureStore } from "@reduxjs/toolkit"
import switchProducts from "../components/screens/homepage/products/slice/productSlice"

export const store = configureStore({
  reducer: { switchProducts },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
