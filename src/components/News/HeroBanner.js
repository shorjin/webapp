import React from 'react';
import news from "../images/news/newspic.jpg"

const HeroBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${news})`,
    backgroundSize: 'cover',

  };

  return (
    <div>

        <div
          className="py-24 "
          style={backgroundImageStyle}
        >
          <h1 className="text-center  text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
            In the News <br />
          </h1>
        </div>

      <h1 className='my-10 text-2xl font-bold tracking-tight  md:text-3xl xl:text-4xl'>Our latest News</h1>

    </div>
  );
};

export default HeroBanner;
