import React from 'react'
import NavBar from '../commonPage/NavBar'
import logo from '../images/login/company_logo.png'
const VerifyEmail = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <NavBar />
        <div className="flex flex-col items-center px-6 py-8 my-16 mx-auto md:h-screen lg:py-0">
          <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/4 flex flex-col items-center bg-white rounded-lg">
            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mt-8">
              <img className="w-8 h-8 mr-2 " src={logo} alt="logo" />
              UnlimitedHER STEM
            </a>
            <div className="w-full rounded-lg sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  First, let's verify your email
                </h1>
                <p className='text-ml font-medium text-gray-700 dark:text-gray-400'>Check your email to verify your account and get started.</p>
                <button
                  type="submit"
                  className="font-alata w-full sm:w-1/2 justify-center rounded-lg border-2 border-black px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-black hover:text-white"
                >
                  Resend Email
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Need help? <a href="./contact" className="font-medium text-indigo-600 hover:underline ">Contact us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VerifyEmail


