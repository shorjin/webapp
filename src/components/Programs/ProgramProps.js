import React from 'react'


const ProgramProps = (props) => {

  return (
    <div className='container max-w-8xl mx-auto my-32 px-6 text-gray-900 md:px-0 '>
       <section id="intro">
      <div className="max-w-6xl mx-auto text-center px-10 ">
        <h3 className='mb-8 text-4xl font-bold  md:text-5xl  text-gray-700'>{props.program}</h3>
        <p className="max-w-3xl mx-auto leading-9 text-center mb-24 text-xl  text-gray-500">
        {props.intro}
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
              src={props.pic}
              alt={props.alt}
              className="object-cover w-full h-full"
            />
            </div>

          </div>

          {/* Items Container */}
          <div
            className="flex flex-col mt-16 mb-24 space-y-12 text-xl h-full md:w-1/2 md:mb-30 md:text-left md:pl-16 "
          >
              <h5 className=' mb-2 text-2xl font-bold  text-gray-700'>{props.title}</h5>
              <p className="max-w-md text-gray-500">
                {props.description}
              </p>
              <h5 className=' mb-2 text-2xl font-bold  text-gray-700'>Course Schedule</h5>
              <p className="max-w-md text-gray-500">
                {props.schedule}
              </p>
              <a href="/programs">
              <button className=" btn text-sm">Know More</button>
              </a>
          </div>
        </div>
      </div>

    </section>




    </div>
  )
}

export default ProgramProps
