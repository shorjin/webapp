import React from 'react';
import pic1 from '../images/donation/pic1.jpg'
import VideoComponent from '../Video/VideoComponent';
const DonationPage = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="text-center text-xl font-bold text-indigo-500 md:text-left">Children Need Your Support</p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Other Ways to Financially Support UnlimitedHER STEM</h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-6">
                We are working to bring education to the most vulnerable children in the USA. With your help, they can receive STEM education in school in order to meet the needs of a new century.
                The work that we do requires your support. You can donate and be a part of making childhood happier. You can donate to the below-mentioned account:</p>

                <div className='text-gray-600'>
                    <p>UnlimitedHER STEM</p>
                    <p>Acc No. : 2000000000031</p>
                    <p>Bank of USA</p>
                </div>
                <p className=" text-gray-500 sm:text-lg md:my-6">
              <span className='font-bold '>Corporate Partnerships:</span> UnlimitedHER STEM welcomes collaboration from industry partners on programming, employee volunteering, and funding. Please contact <a href="mailto:john.doe@email.com" className="font-medium text-indigo-600 hover:underline ">john.doe@email.com</a> for more information.
            </p>

            </div>
{/* pic */}
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img src={pic1}  alt="together background" className="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">Support Us</h2>
              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">UnlimitedHER STEM makes it easy for anyone to help a teacher in need, moving us closer to a nation where students in every community have the tools and experiences they need for a great education. </p>
            </div>

          </div>
          <VideoComponent
                title="Our Recent Accomplishment"
                videoSrc="https://www.youtube.com/embed/5GWhwUN9iaY"
        />

        </div>

      </div>

    </div>
  );
};

export default DonationPage;
