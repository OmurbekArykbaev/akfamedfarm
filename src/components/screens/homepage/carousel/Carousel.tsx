import React from "react"

import { Carousel } from "react-responsive-carousel"

import Item from "./Item/Item"
import { data } from "./const/data"

const CustomCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop={true}
      interval={2000}
      transitionTime={2000}
    >
      {data.map((item) => (
        <Item key={item.id} src={item.image} alt={item.alt} />
      ))}
    </Carousel>
  )
}

export default CustomCarousel
