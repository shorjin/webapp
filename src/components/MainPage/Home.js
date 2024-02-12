import React from 'react';
import Nav from '../commonPage/Nav'
import FeatureSection from './FeatureSection'
import Program from './Program';
import CardExample from './Card';
import WhyUs from './Whyus';
import OurWork from './Ourwork';
import Comments from './Comments';

import pic1 from '../images/mainpage/pics/desktop/math256w450h.jpg'
import pic2 from '../images/mainpage/pics/desktop/2.jpg'
import pic3 from '../images/mainpage/pics/desktop/3.jpg'
import mb1 from '../images/mainpage/pics/mobile/math654w240h.jpg'
import mb2 from '../images/mainpage/pics/mobile/2.jpg'
import mb3 from '../images/mainpage/pics/mobile/3.jpg'




function Home() {
  return (
    <div>

      <Nav />
      <FeatureSection />
      <section id="programs">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <Program />
        <div className="flex flex-col justify-between  w-full space-y-6 text-2xl text-white  md:flex-row md:space-y-0 md:space-x-8">
          <CardExample
          picture={pic1}
          mobilePic={mb1}
          alt="Online Course introduction"
          title="Online Course"
          />
          <CardExample
          picture={pic2}
          mobilePic={mb2}
          alt="Recorded Course"
          title="Recorded Course"
          />

        <CardExample
          picture={pic3}
          mobilePic={mb3}
          alt="Online Q&A"
          title="Online Q&A"
          />
      </div>

    {/* mobile see all button */}
      <div className="flex justify-center mt-30  mb-10 md:hidden">
        <button className="btn w-full mt-10 md:hidden">See All</button>
      </div>
      {/* why us section */}
        <WhyUs />
      {/* What we do */}
        <OurWork />


      </div>
      </section>
      {/* comments */}

          <Comments />








    </div>
  );
}

export default Home;