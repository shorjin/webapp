import React from 'react'
import NavBar from '../commonPage/NavBar'
import HeroBanner from './HeroBanner'
import AllNews from './AllNews'

const News = () => {


  return (
    <div>
        <NavBar />
        <div className='container max-w-6xl mx-auto  px-6 text-gray-900 md:px-0'>
        <HeroBanner />
        <AllNews />
        


        </div>


    </div>
  )
}

export default News

