import React from 'react'


const CardExample=function(props){
  return(


    <div className='group relative overflow-hidden md:w-1/3'>
      <img src={props.picture} alt={props.alt} className="hidden w-full duration-200 md:block group-hover:scale-110"  />
      {/* mobile image */}
      <img src={props.mobilePic} alt={props.alt} className="w-full  md:hidden "/>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
        <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">{props.title} </h5>
      </div>


    </div>
  )}


export default CardExample
