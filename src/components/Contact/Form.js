import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faUser, faEnvelope,faMessage,faClock } from '@fortawesome/free-solid-svg-icons';

const Form = () => {

  return (
    <section className="mx-5 pt-8 md:pt-28 pb-8 lg:pb-40">

        <div className="container grid grid-cols-12 gap-8">
            <h1 className="text-xl md:text-3xl lg:text-5xl uppercase font-medium col-span-12 lg:col-span-8 mb-8">Get In Touch</h1>
        </div>
      <div className="container grid grid-cols-12 gap-8 ">
        <div className="col-span-12 md:col-span-7">
          <form action="#">
{/* first name */}
            <div className="relative mb-8">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faUser} className="text-slate-500" />
              </span>
              <input type="text" className="w-full placeholder:text-text text-lg py-4 pl-10 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-2" placeholder="First Name" />
            </div>
{/* last name */}
            <div className="relative mb-8">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faUser} className="text-slate-500" />
              </span>
              <input type="text" className="w-full placeholder:text-text text-lg py-4 pl-10 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-2" placeholder="Last Name" />
            </div>


{/* email */}
            <div className="relative mb-8">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-slate-500" />
              </span>
              <input type="email" className="w-full placeholder:text-text text-lg py-4 pl-10 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-2" placeholder="Email" />
            </div>
{/* test area */}
            <div className="relative mb-8">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faMessage} className="text-slate-500" />
              </span>
              <textarea className="w-full placeholder:text-text text-lg py-4 pl-10 border-b-2 border-solid border-slate-500 font-medium outline-none focus:border-text mb-2" placeholder="Message" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full md:w-auto px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white">Send</button>
          </form>
        </div>



        {/* contact information */}
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <div className="mb-24">
            <p className="text-3xl mb-4 uppercase">Contact Information</p>
            <a href="tel:000-000-0000" className="block text-base font-medium mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-slate-500" />{' '}
              (000) 000-0000
            </a>
            <a href="mailto:john.doe@email.com" className="block text-base font-medium mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-slate-500" />{' '}
              john.doe@email.com
            </a>
            <a href="#" className="block text-base font-medium mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-slate-500" />{' '}
              ABC street, New York, 10001
            </a>
          </div>

          <div className="mb-24">
            <p className="text-3xl mb-4">OFFICE HOURS</p>
            <p className="block text-base font-medium mb-4">
            <FontAwesomeIcon icon={faClock} className="text-slate-500" />{' '}
             Mon – Fri : 8am – 6pm
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Form;