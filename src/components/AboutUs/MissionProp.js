import React from 'react'

const MissionProp = (props) => {
  return (
    <div>
        <h5 className=' mb-2 text-2xl font-bold  text-gray-700'>{props.title}</h5>
              <p className="max-w-md text-gray-500">
                {props.description}
              </p>
    </div>
  )
}

export default MissionProp
