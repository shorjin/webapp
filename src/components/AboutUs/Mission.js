import React from 'react'
import MissionProp from './MissionProp'
import pic1 from '../images/aboutus/hw.jpg'

const Mission = () => {
  const data=[
    {title : "Our Mission",
     description : "We aim to bridge the gap between the current school curriculum and the immediate need for schools to prepare students for STEM opportunities"
  },
    {title : "Our Objective",
     description : "Under our core programs, we aim to foster STEM skills development for our learners. We also want them to gain a deeper understanding of the importance of STEM as a way to solve the world’s major problems as well as an interest in STEM electives, majors, and careers."
},
    {title : "Why Focus on STEM",
     description : "STEM is where the jobs of both today and tomorrow are, and American children in our communities need these opportunities. STEM Kids NYC helps students build skills so they’ll qualify for these future careers, making them employable and reducing their risk of becoming impoverished, going to jail, or being shut out of the future jobs market."
},
  ]
  return (
    <div>
        {/* non profit intro */}
    <section id="intro">
      <div className="max-w-6xl mx-auto text-center px-10 ">
        <h3 className='mb-8 text-4xl font-bold  md:text-5xl  text-gray-700'>A NON PROFIT FOR STEM EDUCATION</h3>
        <p className="max-w-3xl mx-auto leading-9 text-center mb-24 text-xl  text-gray-500">
        We provide a year-round, intensive suite of STEM education programs for pre-K to 12 scholars. Using our inquiry-based curriculum and through a talented pool of teachers, we expose scholars as young as three to a platform that inspires them to dream what they want and enable them to build or make it.
        </p>
      </div>
    </section>

    {/* mission intro */}
    <section id="mission">
      <div className="max-w-6xl mx-auto text-center px-10">
        <div className="relative flex flex-col md:flex-row md:space-x-28">
          {/* Image */}

          <div className="md:w-1/2 flex justify-center items-center">
            <div className='h-1/2 w-full '>
            <img
              src={pic1}
              alt="homework"
              className="object-cover w-full h-full"
            />
            </div>

          </div>

          {/* Items Container */}
          <div
            className="flex flex-col mt-16 mb-24 space-y-12 text-xl h-full md:w-1/2 md:mb-30 md:text-left md:pl-16 "
          >

          <MissionProp
          title={data[0].title}
          description={data[0].description}
          />
          <MissionProp
          title={data[1].title}
          description={data[1].description}
          />
          <MissionProp
          title={data[2].title}
          description={data[2].description}
          />

          </div>
        </div>
      </div>

    </section>



    </div>
  )
}

export default Mission
