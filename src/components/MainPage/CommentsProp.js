import React from 'react'

const CommentsProp = (props) => {
  return (

      <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3"
          >

          <div className="flex space-x-4">
              <img
                src={props.pic}
                alt="profile of {props.name}"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">{props.name}</h5>
                <p className="text-xs font-light">{props.title}</p>


              </div>
            </div>
            <p className="text-sm leading-5 md:text-lg">
           {props.comment}
            </p>

          </div>

  )
}

export default CommentsProp
