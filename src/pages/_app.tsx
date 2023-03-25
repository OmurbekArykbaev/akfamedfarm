import { Provider } from "react-redux"
import type { AppProps } from "next/app"

import "@/styles/Globals.scss"
import "@/styles/Variables.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { store } from "@/store/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
