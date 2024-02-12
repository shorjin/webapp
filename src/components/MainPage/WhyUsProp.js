import React from 'react'

const WhyUsProp = (props) => {
  return (
    <div>
           <div className="flex flex-col items-center space-y-5">
                    <img src={props.icon} alt={props.alt} className="mb-6" />
                    <h5>{props.title}</h5>
                    <p className="max-w-md text-gray-500">
                    {props.content}
                    </p>
                </div>
    </div>
  )
}

export default WhyUsProp
