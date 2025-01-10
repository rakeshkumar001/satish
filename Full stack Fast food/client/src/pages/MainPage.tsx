import React, { useEffect, useState } from 'react'
import { motion, stagger } from "framer-motion"
import HomepageSliderData from "../assets/Json/HomepageSlider.json"
import Slider from '../components/Slider';
import { SwiperSlide } from 'swiper/react';

const MainPage = () => {
    const [imgData, setImgData] = useState<{ _imgUrl: string }[]>([])
    useEffect(() => {
        let arr = HomepageSliderData.filter(item => item._imgUrl).map(item => ({ _imgUrl: item._imgUrl }));
        setImgData(arr)
    }, [HomepageSliderData])

    const handleBannerTitle = (text: string) => {
        return (<><b className='text-orange-500'>{text.split(":")[0] + " :"}</b>{text.split(":")[1]}</>)
    }
    return (
        <>
            {
                HomepageSliderData && (
                    <Slider sliderData={imgData}>
                        {
                            HomepageSliderData.map((val, index) => {
                                return (
                                    <SwiperSlide key={val._id} className='overflow-hidden'>
                                        <section className="container h-full mx-auto flex flex-col sm:flex-row-reverse sm:px-12 ">
                                            <div className="img-container relative w-3/5 h-full flex items-center justify-center  drop-shadow-xl">
                                                <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-transparent to-orange-500 -skew-x-[24deg] translate-x-64">
                                                </div>
                                                <motion.img
                                                    alt=""
                                                    className="absolute object-contain d-block w-full bg-contain drop-shadow-lg"
                                                    src={require("../assets/images/Slider" + `${val._id}` + ".png")}
                                                    initial={{ transform: "translateX(300px)", opacity: 0 }}
                                                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        damping: 5,
                                                        mass: 0.75,
                                                        stiffness: 100,
                                                    }}
                                                />
                                                <motion.p className='text-white font-bold text-6xl  absolute z-10 bottom-10 right-0 flex items-center'
                                                    initial={{ transform: "translateX(30px)", opacity: 0 }}
                                                    whileInView={{ transform: "translateX(0px)", opacity: 0.5 }}
                                                    transition={{
                                                        delay: 1,
                                                        type: "spring",
                                                        damping: 5,
                                                        mass: 0.75,
                                                        stiffness: 100
                                                    }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    {"0" + (index + 1)}
                                                    <span className='ml-5 border-t-[3px] w-32 block'></span>
                                                </motion.p>
                                            </div>

                                            <div className="mt-5 mr-4 text-center w-2/5 sm:text-left h-full flex items-center justify-center">
                                                <div>
                                                    <motion.h1
                                                        initial={{ transform: "translateY(10px)", opacity: 0 }}
                                                        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                                                        transition={{
                                                            delay: 0.5,
                                                            type: "spring",
                                                            damping: 5,
                                                            mass: 0.75,
                                                            stiffness: 100
                                                        }}
                                                        className="mb-4 text-3xl font-bold leading-tight dark:text-dark-50 md:text-4xl dark:text-white">
                                                        {handleBannerTitle(val._title)}
                                                    </motion.h1>
                                                    <motion.p
                                                        initial={{ transform: "translateY(10px)", opacity: 0 }}
                                                        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                                                        transition={{
                                                            delay: 1,
                                                            type: "spring",
                                                            damping: 5,
                                                            mass: 0.75,
                                                            stiffness: 100
                                                        }}
                                                        className="mb-16 leading-relaxed text-slate-700 dark:text-slate-400">
                                                        {val._description}
                                                    </motion.p>
                                                    <motion.button
                                                        initial={{ transform: "translateY(10px)", opacity: 0 }}
                                                        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                                                        transition={{
                                                            delay: 1.5,
                                                            type: "spring",
                                                            damping: 5,
                                                            mass: 0.75,
                                                            stiffness: 100
                                                        }}
                                                        className="rounded-full border-0 bg-orange-400 px-12 py-2 text-base text-white shadow-lg shadow-orange-300 transition hover:bg-orange-500 hover:shadow-orange-400 dark:shadow-orange-900">
                                                        Order now
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </section>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Slider>
                )
            }
            {/* SOCIAL ICONS */}
            <div className='text-white font-bold absolute z-10 bottom-5 left-0 flex items-center' >
                <span className='mr-5 border-t-[2px] w-16 block border-slate-400'></span>
                <div className="mediaIcons flex items-center gap-6">
                    <a className="text-gray-500 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href="/home" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4">
                        <path fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                        </path>
                    </svg>
                    </a>
                    <a className="text-gray-500 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="/home" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4">
                        <path fill="currentColor"
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                        </path>
                    </svg>
                    </a>
                    <a className="text-gray-500 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href="/home" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4">
                        <path fill="currentColor"
                            d="m279.14 288 14.22-92.66h-58.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                        </path>
                    </svg>
                    </a>
                    <a className="text-gray-500 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href="/home" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4">
                        <path fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                        </path>
                    </svg>
                    </a>
                    <a className="text-gray-500 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href="/home" target="_blank"><svg
                        className="h-4" xmlns="http://www.w3.org/2000/svg" >
                        <path fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                        </path>
                    </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default MainPage