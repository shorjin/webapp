import React from 'react'
import logo from '../images/login/company_logo.png'


const ForgotForm = () => {
  return (

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src={logo} alt="UnlimitedHER STEM" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot your password?</h2>
      <p className='mt-3 text-center text-sm text-gray-500'>Enter your email and we'll send you a link to reset your password.</p>
    </div>

    <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

        </div>



        <div>
          <button
            type="submit"
            className="font-alata flex w-full justify-center rounded-lg border-2 border-black px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-black  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Reset your password
          </button>
        </div>
      </form>
      <p className="mt-10 text-right text-sm text-gray-500">

          <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Back to login</a>
        </p>

    </div>
  </div>
  )
}

export default ForgotForm
