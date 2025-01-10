import React from 'react'
import Banner1 from "../../assets/images/Banner1.png";
import Banner2 from "../../assets/images/Banner2.png";
import Banner3 from "../../assets/images/Banner3.png";
import Banner4 from "../../assets/images/Banner4.png";
import Banner5 from "../../assets/images/Banner5.png";

export default function BannerSlider() {
    return (
        <div>
            <div className="Banner relative z-0 bg-primary/20">
                <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96 bg-gray-light">
                        <div className="hidden relative duration-700 w-full ease-in-out" data-carousel-item="active">
                            <img src={Banner1} className="absolute z-0 block  -translate-x-1/2 top-1/2 left-1/2" alt="as" />
                        </div>
                        <div className="hidden relative duration-700 w-full ease-in-out" data-carousel-item>
                            <img src={Banner2} className="absolute z-0 block  -translate-x-1/2 top-1/2 left-1/2" alt="as" />
                        </div>
                        <div className="hidden relative duration-700 w-full ease-in-out" data-carousel-item>
                            <img src={Banner3} className="absolute z-0 block  -translate-x-1/2 top-1/2 left-1/2" alt="as" />
                        </div>
                        <div className="hidden relative duration-700 w-full ease-in-out" data-carousel-item>
                            <img src={Banner4} className="absolute z-0 block  -translate-x-1/2 top-1/2 left-1/2" alt="as" />
                        </div>
                        <div className="hidden relative duration-700 w-full ease-in-out" data-carousel-item>
                            <img src={Banner5} className="absolute z-0 block  -translate-x-1/2 top-1/2 left-1/2" alt="as" />
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full m-5" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full m-5" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full m-5" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full m-5" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full m-5" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full m-5 sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-primary sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full m-5 sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-primary sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
        </div>
    )
}
