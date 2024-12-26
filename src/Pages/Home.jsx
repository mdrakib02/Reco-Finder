import React from 'react'
import Slider from '../Components/HomeComponets/Slider'
import FindFavoriteProducts from '../Components/FindFavoriteProducts'
import TrendingProducts from '../Components/TrendingProducts'


export default function Home() {
  return (
    <div>
      <Slider />
      <div className="">
      <FindFavoriteProducts />
      <TrendingProducts></TrendingProducts>
      </div>
    </div>
  )
}
