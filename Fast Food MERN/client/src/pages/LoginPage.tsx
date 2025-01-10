import React, { useEffect, useRef, useState } from 'react';
import BackgroundImg from "../assets/images/backgroundd.jpg"
import Logo from "../assets/images/logo.png"
import Button from '../components/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [showSignIn, setShowSignIn] = useState(true);
    const emailId = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const handleSubmitLogin = (e: any) => {
        if (emailId.current && password.current) {
            console.log(emailId.current.value, password.current.value)
        }
        e.preventDefault()
        navigate('/home');
    }

    return (
        <section className='overflow-hidden'>
            <div className='h-screen w-screen fixed dark:brightness-75'><img src={BackgroundImg} alt="" /></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full absolute w-full">
                <div className='flex justify-center items-center'>

                </div>
                <div className='flex justify-center items-center '>
                    {
                        showSignIn ?
                            <div className='w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-20 border border-gray-500 max-w-sm h-fit'>
                                <form className="max-w-sm mx-auto p-10" onSubmit={(e) => handleSubmitLogin(e)}>
                                    <div className='flex justify-center items-center mb-5'>
                                        <img src={Logo} alt="" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                        <input ref={emailId} type="email" id="email" className="bg-black/20 outline-none text-gray-600 bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter your email id..." required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                                        <input ref={password} type="password" id="password" className="bg-black/20 outline-none bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="flex items-start mb-5">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="outline-none w-4 h-4 border  border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                        </div>
                                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-white dark:text-gray-300 ">Remember me</label>
                                    </div>
                                    <Button type="submit">Submit</Button>
                                </form>
                            </div>
                            :
                            <section className="bg-gray-50 dark:bg-gray-900">
                                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                                                Create and account
                                            </h1>
                                            <form className="space-y-4 md:space-y-6" action="#">
                                                <div>
                                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                                    <input type="email" name="email" id="email" className="bg-black/20  border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                                </div>
                                                <div>
                                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-black/20 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                </div>
                                                <div>
                                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white dark:text-white">Confirm password</label>
                                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-black/20 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-black/20 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    }

                </div>
            </div>
        </section>
    )
}

export default LoginPage