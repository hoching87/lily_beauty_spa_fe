import { LockClosedIcon, ExclamationIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'

export default function SignIn(props) {
  const { register, handleSubmit } = useForm()
  const [showAlert, setShowAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('None')

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const user = await axios.post('http://localhost:3030/auth/login')
      console.log('Logged In', user)
    } catch (error) {
      console.log('Logged In Error', error.response.data.error)
      setErrorMessage(error.response.data.error)
    }
  }

  const AlertTrigger = () => {
    setShowAlert(!showAlert)
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {showAlert ? (
          <div className="bg-red-300 border-rose-500 text-neutral-50 border-2 absolute top-20 rounded-md p-1 px-2 flex">
            <ExclamationIcon className="w-5 h-5 m-1"></ExclamationIcon>
            Error Message : {errorMessage}
          </div>
        ) : (
          <></>
        )}
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-40 w-auto"
              src="/logo.png"
              alt="Lily Spa"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log In
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Dont have an account?{' '}
              <Link href="/auth/signup">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Register
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                  {...register('email')}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  {...register('password')}
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Login
              </button>
            </div>
          </form>
          <button className="bg-amber-500" onClick={AlertTrigger}>
            Open Alert
          </button>
        </div>
      </div>
    </>
  )
}
