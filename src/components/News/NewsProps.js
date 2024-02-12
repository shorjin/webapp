import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import datePic from '../images/news/date.png'
import LinkPic from "../images/mainpage/pics/icon-arrow.svg"


const NewsProps = (props) => {
    const formatDate = () => {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        return `${month}/${day}/${year}`;
      };

      const text = props.content;
      const textLimit = 50; // Number of words to display initially

      const [expanded, setExpanded] = useState(false);
      const toggleText = () => setExpanded(!expanded);

      const truncatedText = text.split(' ').slice(0, textLimit).join(' ');
      const remainingText = text.split(' ').slice(textLimit).join(' ');

  return (
    <section className="mb-6 text-center md:text-left">
      <div className="mb-6 flex flex-wrap">
        <div className="mb-6 w-full shrink-0 grow-0 basis-auto pr-3 md:mb-0 md:w-3/12">
          <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
            <img src={props.pic} className="w-full" alt={props.picIntro} />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
              </div>
            </a>
          </div>
        </div>

        <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
          <h5 className="mb-3 text-lg font-bold">{props.title}</h5>

          <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <img src={datePic} alt="calender" className="inline pb-2 pt-2" /> <small>Published <u>{formatDate()}</u> </small>
          </p>
          <p className="text-neutral-500 dark:text-neutral-300">
            {expanded ? text : truncatedText}
            {!expanded && remainingText && (
              <span>
                {'...'}
                <div className="block mt-4">

                  <div className="text-teal-400 hover:text-teal-500">
                    <Link to={`/news/${props.id}`}>Read More <img src={LinkPic} alt="arrow to news page" className="inline pb-2 pl-2" /></Link>
                  </div>


                </div>

              </span>
            )}
          </p>


        </div>
      </div>
    </section>
  );
};

export default NewsProps;
