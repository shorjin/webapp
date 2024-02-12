import React from 'react';
import CommentsProp from './CommentsProp';
import prof1 from '../images/mainpage/pics/profile1.png'
import prof2 from '../images/mainpage/pics/profile2.png'
import prof3 from '../images/mainpage/pics/profile3.png'
import QuoBg from '../images/mainpage/pics/bg-quotes.png'


const Comments = () => {
  const data=[
    {
      comment:"UnlimitedHer STEM significantly boosted my STEM scores",
      name:"Sam Smith",
      title:"Student",
    },
    {
      comment:"UnlimitedHer STEM has been instrumental in elevating my STEM scores, offering invaluable resources and guidance",
      name:"Sam Smith",
      title:"Student",
    },
    {
      comment:"UnlimitedHer STEM significantly boosted my STEM scores",
      name:"Sam Smith",
      title:"Student",
    },

  ]
  return (
    <section id="Comments" className="bg-gray-50">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-40">
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <img
            src={QuoBg}
            alt="background of quotes"
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />
        <CommentsProp
           comment={data[0].comment}
           pic={prof1}
           name={data[0].name}
           title={data[0].title}
          />
          <CommentsProp
           comment={data[1].comment}
           pic={prof2}
           name={data[1].name}
           title={data[1].title}
          />
          <CommentsProp
           comment={data[2].comment}
           pic={prof3}
           name={data[2].name}
           title={data[2].title}
          />

        </div>
      </div>
    </section>
  );
};

export default Comments;