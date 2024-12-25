import React from 'react'
import Slider from '../Components/HomeComponets/Slider'
import QueriesComponent from '../Components/QueriesComponent'
import Search from '../Components/Search'


export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <Search></Search>
      <QueriesComponent></QueriesComponent>
    </div>
  )
}
