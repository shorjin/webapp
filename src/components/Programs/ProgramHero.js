import React from 'react'
import pic1 from  '../images/programs/bg1.jpg'

const ProgramHero = () => {
  return (
    <section >
    <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row ">
      <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
        <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
          Our Programs
        </h1>
        <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
          Programs introduction
        </p>
        <div className="mx-auto lg:mx-0">
          <a
            href="./all-programs"
            className="btn"
          >
            Know More
          </a>
        </div>
      </div>

      <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
        <img src={pic1} alt="" />
      </div>
    </div>
  </section>
  )
}

export default ProgramHero
