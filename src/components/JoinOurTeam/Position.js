import React from 'react'

const Position = (props) => {
  return (
    <div>
            <div className="md:flex md:items-start md:-mx-4">
                            <img src={props.num} alt="background of quotes"/>
                            <div className="mt-4 md:mx-4 md:mt-0">
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{props.position}</h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                {props.description}
                                </p>
                            </div>
                        </div>

    </div>
  )
}

export default Position
