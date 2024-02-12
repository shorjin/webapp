import React from 'react'
import num1 from '../images/JoinOurTeam/1.png'
import num2 from '../images/JoinOurTeam/2.png'
import num3 from '../images/JoinOurTeam/3.png'
import volunteer from '../images/JoinOurTeam/volunteer.jpg'
import Position from './Position'
const Volunteer = () => {
    const data=[
        {
            position: "Program Coordinator",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        },
        {
            position: "Teaching Assistants",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        },
        {
            position: "Marketing & Communications Associate",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        },

    ]

  return (

      <section className="bg-white dark:bg-gray-900 ">
            <div className="container px-6 py-10 mx-auto ">
                <div className="md:flex md:items-center ">
                    <div className="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Volunteer with us</h1>
                            <div className="mt-2">
                                <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>
                        <p className='mt-3 text-gray-700'>UnlimitedHER STEM is growing! We are currently seeking to fill the following internship or volunteer positions:</p>

                        {/* open position 1 */}

                        <Position
                        num={num1}
                        position={data[0].position}
                        description={data[0].description}
                        />
                        {/* open position 2 */}
                        <Position
                        num={num2}
                        position={data[1].position}
                        description={data[1].description}
                        />
                        {/* open position 3 */}
                        <Position
                        num={num3}
                        position={data[2].position}
                        description={data[2].description}
                        />

                    <p className='mt-3 text-gray-700'>If you are interested in contributing your mastery to our cause, please <a href="https://www.volunteermatch.org/" target="_blank" rel="noopener noreferrer" className='text-indigo-600'>Click Here </a>
                     or e-mail your resume with VolunteerMatch in the subject line to: Executive Director, Sam smith at
                    <a href="mailto:123@unlimitedherstem.org" className='text-indigo-600'> 123@unlimitedherstem.org</a>. We look forward to hearing from you!
                    </p>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center ">
                        <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={volunteer} alt="volunteer"/>
                    </div>

                </div>




            </div>
        </section>



  )
}

export default Volunteer
