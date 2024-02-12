import React from 'react'
import NavBar from '../commonPage/NavBar'
import Intro from './Intro'
import Mission from './Mission'
import Team from './Team'
const About = () => {
  return (
    <div>
      <NavBar />

       <div className="container max-w-6xl mx-auto my-32 px-6 md:px-0 ">

       <Intro />
       <Mission />
       <Team />



        </div>
    </div>
  )
}

export default About
