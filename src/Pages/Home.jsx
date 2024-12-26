import React from 'react'
import Slider from '../Components/HomeComponets/Slider'
import FindFavoriteProducts from '../Components/FindFavoriteProducts'
import TrendingProducts from '../Components/TrendingProducts'
import ContactUS from '../Components/ContactUS'


export default function Home() {
  return (
    <div>
      <Slider />
      <div className="">
      <FindFavoriteProducts />
      <TrendingProducts></TrendingProducts>
      <ContactUS></ContactUS>
      </div>
    </div>
  )
}
