import React from 'react';
import pic1 from '../images/mainpage/pics/coop.jpg'
import LinkPic from '../images/mainpage/pics/icon-arrow.svg'

const OurWork = () => {
  return (
    <section id="OurWork">
      {/* Productive Container */}
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-10 md:flex-row md:space-x-16">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={pic1}
            alt="Cooperation"
            className="mb-10"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              What We do
            </h4>
            <p className="text-md md:text-lg">
              paragraph 1 about what we do
            </p>

            <p className="text-md md:text-lg">
              paragraph 2 about what we do.
            </p>
          </div>

          {/* Link */}
          <div className="block mt-4">
            <a href="#" className="border-b border-accentCyan text-teal-400  hover:text-teal-500">
              Know More About Us
              <img src={LinkPic} alt="arrow to about us page" className="inline pb-2 pl-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;