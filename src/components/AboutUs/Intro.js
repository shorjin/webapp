import React from 'react'
import pic1 from '../images/aboutus/about.jpg'

const Intro = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl my-10">
    <div className="sm:w-1/2 p-10">
      <div className="image object-center text-center">
        <img src={pic1} alt="About Us" className='rounded-lg' />
      </div>
    </div>
    <div className="sm:w-1/2 p-5">
      <div className="text">
        <span className="text-gray-500 border-b-2 border-teal-400 uppercase">About us</span>
        <h2 className="mb-8 text-4xl font-bold  md:text-5xl  text-gray-700 my-10">
          About <span className="text-teal-400">UnlimitedHER STEM</span>
        </h2>
        <p className="max-w-3xl mx-auto leading-9 text-center mb-24 text-xl  text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi doloremque, fugiat illum
          magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore voluptatum.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Intro
