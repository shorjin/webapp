import React from 'react';
import pic1 from '../images/JoinOurTeam/bg1.jpg';
import pic2 from '../images/JoinOurTeam/bg2.jpg';

function WelcomeSection() {
  return (
    <div className="bg-gray-50">
      <section className="bg-cover bg-center py-16 md:py-32" style={{ backgroundImage: `url(${pic1})` }}>
        <div className="container mx-auto text-left text-white">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
              <h1 className="text-4xl md:text-5xl font-medium mb-6">We are hiring</h1>
              <p className="text-lg md:text-xl mb-6 md:mb-12">
                The UnlimitedHER STEM is expanding and so is our team! Are you passionate about inspiring the next generation
                of STEM leaders? Looking to make a difference & find a job with purpose? If so, check out our recently added open positions!
              </p>
              <a href="#" className="hidden  md:inline-block border-2 tracking-widest font-alata border-white text-white py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-black hover:text-white uppercase">
                Current Employment Opportunities
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <img src={pic2} className="h-48 md:h-64 w-full object-cover rounded-xl" alt="Layout Image" />
            </div>

          </div>

    {/* mobile see all button */}
    <div className="flex justify-center mt-30  mb-10 md:hidden">
        <button className="border-2 tracking-widest font-alata border-white text-white py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-black hover:text-white uppercase w-full mt-10 md:hidden">Current Employment Opportunities</button>
      </div>
        </div>
      </section>
    </div>
  );
}

export default WelcomeSection;
