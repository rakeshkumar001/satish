import React from 'react'
import BannerImage1 from "../../../assets/images/Banner/Banner1.png";
import BannerImage2 from "../../../assets/images/Banner/banner2.png"
import BannerImage3 from "../../../assets/images/Banner/banner3.png"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerData from "../../../data/Banner";

function BannerSlider() {
    const BannerBgImg = [BannerImage1, BannerImage2, BannerImage3]
    return (
        <div>
            <div id="default-carousel" className="relative" data-carousel="static">
                <div className="relative h-56 overflow-hidden md:h-[90vh] ">
                    {
                        BannerData.map((val, i) => {
                            return (
                                <div className={"hidden duration-700 ease-in-out flex justify-evenly " + val.bgColorCode} data-carousel-item key={i}>
                                    <div className="vetables-background-effect"></div>
                                    <div className='flex justify-end items-center'>
                                        <div className="w-5/6">
                                            <h2 className='text-6xl font-bold text-white'>{val.title}</h2>
                                            <p className='text-2xl font-bold my-5 text-white'>{val.tagLine}</p>
                                            <p className='text-xl text-white'>{val.descp}</p>
                                            <button className='mt-12 border-2 cursor-pointer p-2 rounded-3xl text-white hover:bg-primary hover:text-white'>Shop Now</button>
                                        </div>
                                    </div>
                                    <img src={BannerBgImg[i]} className="block my-auto mx-auto h-3/4" alt="..." />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <FontAwesomeIcon icon={faAngleLeft} className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <FontAwesomeIcon icon={faAngleRight} className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default BannerSlider