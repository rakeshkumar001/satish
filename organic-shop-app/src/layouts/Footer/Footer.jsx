import { faDribbble, faFacebook, faGit, faGitAlt, faGitlab, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationArrow, faMobileAlt, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BrandLogo from "../../assets/images/BrandLogo.png";


function Footer() {
    return (
        <div className='relative bg-slate-700 text-white'>
            <div className="opacity-[0.3]">
                <div className="vetables-background-effect "></div>
            </div>
            <footer className="p-4 relative z-10 sm:p-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 w-1/5">
                        <span href="#" className="flex items-center h-14">
                            <img src={BrandLogo} alt="" className="h-full" />
                        </span>
                    </div>
                    <div className=" w-2/3 mx-auto px-5">
                        <div className="mx-auto  text-white  rounded-lg p-3">
                            <div className='mr-12'>
                                <h2 className=" text-lg font-extrabold text-white dark:text-white">Sign up for our newsletter</h2>
                                <p className="mx-auto my-2 text-xs font-light   dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                            </div>
                            <form action="#">
                                <div className="items-center mx-auto mb-3 space-y-4  sm:flex sm:space-y-0">
                                    <div className="relative">
                                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium dark:text-gray-300">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5  dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input className="block py-2 pl-10 placeholder:text-xs text-sm bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-gray-600 py-2.5 px-5 text-xs font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                    </div>
                                </div>
                                <div className="mx-auto  text-xs text-left  newsletter-form-footer dark:text-gray-300">We care about the protection of your data. Please Read our Privacy Policy.</div>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-3 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">Menus</h2>
                            <ul className="dark:text-gray-400">
                                <li className="mb-3 text-xs">
                                    <a href="" className="hover:underline">Home</a>
                                </li>
                                <li className="mb-3 text-xs">
                                    <a href="" className="hover:underline">Products</a>
                                </li>
                                <li className="mb-3 text-xs">
                                    <a href="" className="hover:underline">About Us</a>
                                </li>
                                <li className="mb-3 text-xs">
                                    <a href="" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">Contact us</h2>
                            <ul className="dark:text-gray-400">
                                <li className="mb-3 text-xs flex items-center">
                                    <FontAwesomeIcon icon={faMobileAlt} className='mr-3' />
                                    <p>+ 88 180 0080 2898 </p>
                                </li>
                                <li className="mb-3 text-xs flex items-center">
                                    <FontAwesomeIcon icon={faLocationArrow} className='mr-3' />
                                    <p>Sidestate NSW 4132, Australia </p>
                                </li>
                                <li className="mb-3 text-xs flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
                                    <p> organic_info@gmail.com </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">Legal</h2>
                            <ul className="dark:text-gray-400">
                                <li className="mb-3 text-xs">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-3 text-xs">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm  sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Organic</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className=" hover:scale-125 dark:hover:scale-125"  data-toggle = "tooltip">
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className=" hover:scale-125 dark:hover:scale-125"  data-toggle = "tooltip">
                            <FontAwesomeIcon icon={faInstagram} />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className=" hover:scale-125 dark:hover:scale-125"  data-toggle = "tooltip">
                            <FontAwesomeIcon icon={faTwitter} />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className=" hover:scale-125 dark:hover:scale-125"  data-toggle = "tooltip">
                            <FontAwesomeIcon icon={faGitlab} />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className=" hover:scale-125 dark:hover:scale-125"  data-toggle = "tooltip">
                            <FontAwesomeIcon icon={faDribbble} />
                            <span className="sr-only">Dribbbel account</span>
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer