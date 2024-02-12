import React from 'react'
import NewsProps from './NewsProps'
import news1 from '../images/news/NewsImage/news1.jpg'
import news2 from '../images/news/NewsImage/news2.jpg'
import news3 from '../images/news/NewsImage/news3.jpg'


const AllNews = () => {
    const data=[
        {
          picIntro:"cool pic",
          title:"We have news 1",
          content:"Pix11 journalist Monica Morales, host of this year’s Fall Fête, interviewed our CEO & President Melanie Hartzog, as well as Sitan Keita – a former participant in our programs. Sitan was formerly in foster care with The Foundling, and now works as a job coach in our Employment Services program. The interview highlights the support that Sitan received, and the array of our services for parents and children.The Summer Rising STEAM Fair today in Harlem is a powerful reminder of what we can achieve when STEAM resources, committed educators and motivated young minds come together,” said Saskia Traill, Ph.D., President, and CEO of ExpandED Schools. “ExpandED Schools is proud of the NYC STEM Education Network partnership with Community School District 4 and we’re thrilled the $25,000 grant will serve to broaden STEAM learning opportunities for students across 23 schools",
        },
        {

            picIntro:"cool pic2",
            title:"We have news 2",
            content:"Hello World 2",
          },
          {

            picIntro:"cool pic3",
            title:"We have news 3",
            content:"Hello World 3",
          },

      ]
  return (
    <div>
        <NewsProps
        pic={news1}
        picIntro={data[0].picIntro}
        title={data[0].title}
        content={data[0].content}
        />
        <NewsProps
        pic={news2}
        picIntro={data[1].picIntro}
        title={data[1].title}
        content={data[1].content}
        />
        <NewsProps
        pic={news3}
        picIntro={data[2].picIntro}
        title={data[2].title}
        content={data[2].content}
        />



    </div>
  )
}

export default AllNews
