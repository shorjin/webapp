import React from 'react'
import ProgramProps from './ProgramProps'
import math from '../images/programs/math.jpg'
import chemical from '../images/programs/chemical.jpg'


const ProgramsIntro = () => {
  const data=[
    { program:"Online Course",
      intro:"Online Course intro",
      alt:"Online Course",
      title : "Our Mission",
      description : "We aim to bridge the gap between the current school curriculum and the immediate need for schools to prepare students for STEM opportunities",
      schedule:"9:00 am -10:00am "
  },
  { program:"Recorded Course",
    intro:"Recorded Course intro",
    alt:"Recorded Course",
    title : "Our Mission",
    description : "We aim to bridge the gap between the current school curriculum and the immediate need for schools to prepare students for STEM opportunities",
    schedule:"9:00 am -10:00am "
},
{ program:"Online Q&A",
  intro:"Online Q&A intro",
  alt:"Online Q&A",
  title : "Our Mission",
  description : "We aim to bridge the gap between the current school curriculum and the immediate need for schools to prepare students for STEM opportunities",
  schedule:"9:00 am -10:00am "
},

  ]
  return (


    <div>
       <ProgramProps
       program={data[0].program}
       pic={math}
       intro={data[0].intro}
       alt={data[0].alt}
       title={data[0].title}
       description={data[0].description}
       schedule={data[0].schedule}
          />
      <ProgramProps
       program={data[1].program}
       pic={chemical}
       intro={data[1].intro}
       alt={data[1].alt}
       title={data[1].title}
       description={data[1].description}
       schedule={data[1].schedule}
          />

       <ProgramProps
       program={data[2].program}
       pic={chemical}
       intro={data[2].intro}
       alt={data[2].alt}
       title={data[2].title}
       description={data[2].description}
       schedule={data[2].schedule}
          />

    </div>
  )
}

export default ProgramsIntro
