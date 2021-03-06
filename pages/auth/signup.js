import { LockClosedIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import { useForm } from "react-hook-form";

export default function SignIn(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        try {

            console.log('Sign Up', user)
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Sign Up Error", errorCode, errorMessage)
        }
    }

    const inputClass = `appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm p-10 mb-2`

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-40 w-auto"
                            src="/logo.png"
                            alt="Lily Spa"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/auth/login">
                                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Login
                                </a>
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={inputClass}
                                    placeholder="Email Address"
                                    {...register("email")}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className={inputClass}
                                    placeholder="Password"
                                    {...register("password")}
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
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div> */}

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
