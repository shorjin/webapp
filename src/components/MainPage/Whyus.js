import React from 'react';
import WhyUsProp from './WhyUsProp';
import icon1 from '../images/mainpage/pics/learning.png'
import icon2 from '../images/mainpage/pics/content.png'
import icon3 from '../images/mainpage/pics/tool.png'

const WhyUs = () => {
    const data=[
        {
            alt:'personalized learning',
            title:'Personalized learning',
            content:"Easily search your snippets by content, category, web address",

        },
        {
            alt:'Trusted Content',
            title:'Trusted Content',
            content:"Easily search your snippets by content, category, web address",

        },
        {
            alt:'Tools to Empower Teachers',
            title:'Tools to Empower Teachers',
            content:"Easily search your snippets by content, category, web address",

        },
    ]
  return (
        <div className=" max-w-6xl mx-auto text-center px-10 my-20 mt-40">
            <h3 className='text-4xl text-center md:text-center md:text-5xl'>Why UnlimitedHER STEM Works</h3>
            <p className="max-w-3xl mx-auto leading-9 text-center text-gray-500 mb-16 mt-10 text-xl">
            We've got the tools to boost your productivity
            </p>

            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                <WhyUsProp
                icon={icon1}
                alt={data[0].alt}
                title={data[0].title}
                content={data[0].content} />
                <WhyUsProp
                icon={icon2}
                alt={data[1].alt}
                title={data[1].title}
                content={data[1].content} />
                <WhyUsProp
                icon={icon3}
                alt={data[2].alt}
                title={data[2].title}
                content={data[2].content} />

            </div>
      </div>

  );
};

export default WhyUs;