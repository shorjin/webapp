import React from 'react'
import bg1 from '../images/donation/bg1.jpg'

const Payment = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100">

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Donate
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-indigo-500"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Now
                  </h1>
                </div>
              </h1>
              <p className="mb-6 text-gray-500 sm:text-lg md:my-8">
              Our network of STEM learning opportunities is making a lasting impact by inspiring little ones and creating community for like-minded teens. We are growing our work to bridge the digital divide, employing more young adults and educators, and feeling more determined than ever about our mission! ​ ​Watch our video which is designed to shine a light on the "why" of the work we do and the need to keep doing it!
              </p>
              <div className="mt-10 flex items-center gap-5 md:gap-0 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="https://buy.stripe.com/test_14kbJp8Tlbkch2g8ww" target="_blank" rel="noopener noreferrer"
                  className="btn"
                >
                  Donate now
                </a>
                <a
                  href="https://www.youtube.com/watch?v=C48oHf1TOcg" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch video
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                className="w-[70%]"
                src={bg1}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Payment;

