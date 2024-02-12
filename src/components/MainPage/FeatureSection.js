import React from 'react';
import StemImage from '../images/mainpage/pics/stem.jpg';
import './FeatureSection.css'
function FeatureSection() {
  return (
    <section id="feature">
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <img src={StemImage} alt="Stem" />

        <div id='text'className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
          Grow Your Vision
          </h2>

          <p className="max-w-md text-center md:text-left mb-10">
          Founded in 2023, UnlimitedHer STEM has been a pioneer in STEM education.
          Our unwavering commitment to delivering top-notch STEM programs has shaped the aspirations
          of countless young minds.
          </p>
        </div>

        
      </div>
    </section>
  );
}

export default FeatureSection;
