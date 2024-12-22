import React from 'react'
import NAvBAr from '../Components/NAvBAr'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <NAvBAr></NAvBAr>
        <div className='min-h-[calc(100vh-379px)]'>
            <Outlet>

            </Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
