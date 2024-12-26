import React from 'react'
import Slider from '../Components/HomeComponets/Slider'
import FindFavoriteProducts from '../Components/FindFavoriteProducts'
import TrendingProducts from '../Components/TrendingProducts'


export default function Home() {
  return (
    <div>
      <Slider />
      <div className="">
        <div className="my-6 md:my-8 lg:my-12 w-full max-w-4xl mx-auto p-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Find Your Favourite Products</h1>
        </div>
      <FindFavoriteProducts />
      <TrendingProducts></TrendingProducts>
      </div>
    </div>
  )
}
