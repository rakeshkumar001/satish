import React, { useState } from 'react';
import BannerSlider from '../../components/organisms/BannerSlider/BannerSlider';
import { faAppleAlt, faBasketShopping, faCarrot, faChartSimple, faCreditCard, faEye,  faHeadphones, faHeart, faSeedling, faTractor, faUserShield, faVialCircleCheck, faWheatAwn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from '../../components/molecules/slider/slider';
import SectionTitle from '../../components/molecules/SectionTitle/SectionTitle';
import Apricot from "../../assets/images/apricot.png";
import Strawberry from "../../assets/images/strawberry.png";
import Cherry from "../../assets/images/cherry.png";
import Pineapple from "../../assets/images/pineapple.png";
import Leave from "../../assets/images/leaves2.png";
import Leave2 from "../../assets/images/leaf-light2.webp";
import { faFaceSmileWink, faHandshake } from '@fortawesome/free-regular-svg-icons';


function HomePage() {
  const [productType, setProductType] = useState("fruits")
  const selectProductType = (type) => {
    setProductType(type)
  }
  return (
    <div className='HomePage  bg-gray-50 dark:bg-gray-900 overflow-hidden '>
      <BannerSlider />
      {/* 3 FEATURE */}
      <div className="three_feature relative h-24 flex justify-center items-center mt-5">
        <div className="bg-secondary my-5 w-full h-1 ">
          <div className="feature_content relative w-4/6 top-[-40px] text-gray-400 shadow-other-card-shadow m-auto  flex bg-orange-50  dark:bg-slate-800 justify-evenly border-2 rounded-full border-secondary">
            <div className="text-center py-2 w-44 flex items-center ">
              <FontAwesomeIcon icon={faWheatAwn} className="text-2xl mr-2 text-primary" />
              <div>
                <p className="text-[10px] my-2 font-semibold">Fresh Everytime</p>
                <p className="text-[10px] 1/3 m-auto ">straight from the farm to your doorstep</p>
              </div>
            </div>
            <div className="text-center py-2 w-44 flex items-center">
              <FontAwesomeIcon icon={faCreditCard} className="text-2xl mr-2 text-primary" />
              <div>
                <p className="text-[10px] my-2 font-semibold">Secure payment</p>
                <p className="text-[10px] 1/3 m-auto ">Online secure payment with quick and easy checkout</p>
              </div>
            </div>
            <div className="text-center py-2 w-44 flex items-center">
              <FontAwesomeIcon icon={faHeadphones} className="text-2xl mr-2 text-primary" />
              <div>
                <p className="text-[10px] my-2 font-semibold">24x7 Support</p>
                <p className="text-[10px] 1/3 m-auto ">Anytime, anywhere full time custom support 24 x 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR PRODUCTS */}
      <div className="our_product my-16 mx-20 relative">
        <SectionTitle title={"Our Products"} descp={"Varities to choose from...."} />
        <div className="categories-btn absolute flex  justify-center items-center top-10 w-full z-10 mt-12" >
          <button onClick={() => selectProductType("fruits")} className={`${productType === "fruits" ? "active" : ""}   bg-white  shadow-other-card-shadow dark:bg-slate-800 mx-4 border border-gray-300 hover:border-white cursor-pointer p-2 rounded-3xl text-gray-400 hover:bg-primary hover:text-white`} >
            <FontAwesomeIcon icon={faAppleAlt} className="text-gray-300 mr-2 cursor-pointer text-current ml-1" />
            organic<span className='font-semibold'> FRUITS</span>
          </button>
          <button onClick={() => selectProductType("vegetables")} className={`${productType === "vegetables" ? "active" : ""}  bg-white shadow-other-card-shadow dark:bg-slate-800 mx-4 h-10 border border-gray-300 hover:border-white cursor-pointer p-2 rounded-3xl text-gray-400 hover:bg-primary hover:text-white`}>
            <FontAwesomeIcon icon={faCarrot} className="text-gray-300 mr-2 cursor-pointer text-current ml-1" />
            organic<span className='font-semibold'> VEGETABLES</span>
          </button>
        </div>
        <Slider countPerView={4} typeOfSlider={productType} />
      </div>

      {/* WHY US */}
      <div className="feature_section relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path fill="#ff736a" fillOpacity="1" d="M0,0L80,5.3C160,11,320,21,480,42.7C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div className=" absolute top-0 right-3">
          <img src={Strawberry} alt=""  />
        </div>
        <div className="bg-[#ff736a] relative px-24">
          <div className="bg_text absolute" >
            <p className='font-bold text-[200px] font-Fredoka text-center text-white/10'>Features</p>
          </div>
          <div className="features_content w-full h-full text-white">
            <div className='flex items-center  mb-14 justify-center'>
              <FontAwesomeIcon icon={faSeedling} className="text-white mr-3 text-4xl" />
              <p className="title font-bold text-4xl ">Best Features</p>
            </div>
            <div className="features_explanation flex items-center justify-evenly">
              <div className='text-center w-1/3'>
                <FontAwesomeIcon icon={faTractor} className="text-white mr-3 text-6xl mb-4  " />
                <p className="fresh_from_farm font-semibold uppercase text-xl">fresh from farm</p>
                <p className=" mt-4 w-5/6 m-auto">Our products are delivered straight to us by the farmer themselves right after they are harvested</p>
              </div>
              <div className='text-center w-1/3'>
                <FontAwesomeIcon icon={faUserShield} className="text-white mr-3 text-6xl mb-4 " />
                <p className="organic_natural font-semibold uppercase text-xl">100% organic</p>
                <p className=" mt-4 w-5/6 m-auto">Products coming from farms following GAP (Good Agricultural Practises).</p>
              </div>
              <div className='text-center w-1/3'>
                <FontAwesomeIcon icon={faSeedling} className="text-white mr-3 text-6xl mb-4 " />
                <p className="premium_quality font-semibold uppercase text-xl">premium quality</p>
                <p className=" mt-4 w-5/6 m-auto">Produce sourced from farms that have valid organic certification as per Jaivik Bharat Standards</p>
              </div>
            </div>
          </div>
        </div>
        <div className="  absolute left-0 bottom-[-20]">
          <img src={Apricot} alt=""  />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path fill="#ff736a" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      {/* Deals of the day */}
      <div className="Deal_of_the_day relative my-12">
        <div className="bg-secondary w-full h-[0.5px]  mb-20 flex justify-center items-center">
          <div className=" relative top-[-40px] text-gray-400 shadow-other-card-shadow m-auto  flex bg-orange-50  dark:bg-slate-800 justify-evenly w-2/5 border-2 rounded-full border-secondary">
            <div className="countdown_Section flex justify-evenly h-fit w-full pt-5 pb-2">
              <div className="relative text-gray-400  bg-white dark:bg-slate-700 shadow-border-shadow rounded-lg h-12 w-14 flex justify-center items-center text-xl  font-Fredoka font-extrabold days"><span className='absolute bg-orange-50 dark:bg-slate-800 dark:text-white top-[-10px] font-sans font-normal text-xs'>Days</span>01</div>
              <div className="relative text-gray-400  bg-white dark:bg-slate-700 shadow-border-shadow rounded-lg h-12 w-14 flex justify-center items-center text-xl  font-Fredoka font-extrabold hrs"><span className='absolute bg-orange-50 dark:bg-slate-800 dark:text-white top-[-10px] font-sans font-normal text-xs'>Hours</span>23</div>
              <div className="relative text-gray-400  bg-white dark:bg-slate-700 shadow-border-shadow rounded-lg h-12 w-14 flex justify-center items-center text-xl  font-Fredoka font-extrabold mins"><span className='absolute bg-orange-50 dark:bg-slate-800 dark:text-white top-[-10px] font-sans font-normal text-xs'>Minutes</span>18</div>
              <div className="relative text-gray-400  bg-white dark:bg-slate-700 shadow-border-shadow rounded-lg h-12 w-14 flex justify-center items-center text-xl  font-Fredoka font-extrabold secs"><span className='absolute bg-orange-50 dark:bg-slate-800 dark:text-white top-[-10px] font-sans font-normal text-xs'>Seconds</span>34</div>
            </div>
          </div>
        </div>
        <SectionTitle title={"Deals Of The Day"} descp={""} />
        <div className="deal_content flex justify-evenly  ">
          <div className="w-[40%] relative">
            <div className="rounded-xl shadow-card-shadow mx-8  overflow-hidden h-fit flex  relative bg-white dark:bg-slate-800 dark:text-white">
              <div className="action_btn">
                <div className="flex justify-center items-center text-xl text-gray-200 shadow-border-shadow dark:shadow-dark-border-shadow p-6 cursor-pointer hover:text-secondary px-4   ">
                  <FontAwesomeIcon icon={faHeart} className='' />
                </div>
                <div className="flex justify-center items-center text-xl text-gray-200 shadow-border-shadow dark:shadow-dark-border-shadow p-6 cursor-pointer hover:text-secondary px-4  ">
                  <FontAwesomeIcon icon={faBasketShopping} className='' />
                </div>
                <div className="flex justify-center items-center text-xl text-gray-200 shadow-border-shadow dark:shadow-dark-border-shadow p-6 cursor-pointer hover:text-secondary px-4  ">
                  <FontAwesomeIcon icon={faEye} className='' />
                </div>
              </div>
              <div className="text_content p-5 flex items-center w-2/3 ">
                <div>
                  <span className='border-2  w-fit border-gray-800 text-[8px] bg-rose-500 text-white rounded-full p-1 flex justify-center items-center'>
                    20% Off
                  </span>
                  <p className="text-2xl font-Oswald font-light">fresh <span className='font-bold'>Cherry</span></p>
                  <p className="text-xs my-2">A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit).</p>
                  <div className="flex items-center mt-2 w-full justify-start my-2">
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold mr-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                  </div>
                  <p className="text-primary text-sm font-extrabold">50/- <span className='ml-3 text-slate-300 font-normal line-through'>65/-</span></p>
                </div>
              </div>
            </div>
            <img src={Cherry} alt="" className='absolute bottom-[-20px] w-44  right-[-50px]' />
          </div>
          <div className="w-[40%] relative">
            <div className="rounded-xl shadow-card-shadow mx-8  overflow-hidden h-fit flex  relative bg-white dark:bg-slate-800 dark:text-white">
              <div className="action_btn">
                <div className="flex justify-center items-center text-xl text-gray-200 shadow-border-shadow dark:shadow-dark-border-shadow p-6 cursor-pointer hover:text-secondary px-4   ">
                  <FontAwesomeIcon icon={faHeart} className='' />
                </div>
                <div className="flex justify-center items-center text-xl text-gray-200 shadow-border-shadow dark:shadow-dark-border-shadow p-6 cursor-pointer hover:text-secondary px-4  ">
                  <FontAwesomeIcon icon={faBasketShopping} className='' />
                </div>
                <div className="flex justify-center items-center text-xl text-gray-200 shadow-border-shadow dark:shadow-dark-border-shadow p-6 cursor-pointer hover:text-secondary px-4  ">
                  <FontAwesomeIcon icon={faEye} className='' />
                </div>
              </div>
              <div className="text_content p-5 flex items-center w-2/3 ">
                <div>
                  <span className='border-2 w-fit border-gray-800 text-[8px] bg-rose-500 text-white rounded-full p-1 flex justify-center items-center'>
                    20% Off
                  </span>
                  <p className="text-2xl font-Oswald font-light">fresh <span className='font-bold'>Pineapple</span></p>
                  <p className="text-xs my-1">The pineapple (Ananas) is a tropical plant with an edible fruit in the family Bromeliaceae. </p>
                  <div className="flex items-center mt-2 w-full justify-start my-2">
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold mr-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                  </div>
                  <p className="text-primary text-sm font-extrabold">50/- <span className='ml-3 text-slate-300 font-normal line-through'>65/-</span></p>
                </div>
              </div>
            </div>
            <img src={Pineapple} alt="" className='absolute bottom-[-20px] w-44 right-[-50px]' />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="feature_section relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffb524" fillOpacity="1" d="M0,0L80,5.3C160,11,320,21,480,42.7C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div className="bg-[#ffb524] relative px-24">
          <div className=" absolute top-[-100px] right-0">
            <img src={Leave} alt=""  />
          </div>
          <div className="bg_text absolute" >
            <p className='font-bold text-[200px] font-Fredoka text-center text-white/10'>Stats</p>
          </div>
          <div className="features_content w-full h-full text-white">
            <div className='flex items-center  mb-14 justify-center'>
              <FontAwesomeIcon icon={faChartSimple} className="text-white mr-3 text-4xl" />
              <p className="title font-bold text-4xl ">Stats</p>
            </div>
            <div className="features_explanation flex items-center justify-evenly">
              <div className="flex items-center justify-evenly">
                <FontAwesomeIcon icon={faFaceSmileWink} className="text-white mr-3 text-7xl mb-4  " />
                <div className='text-center'>
                  <p className="fresh_from_farm font-semibold uppercase text-5xl">1143+</p>
                  <p className=" mt-4 m-auto">Satisfied cutsomer</p>
                </div>
              </div>
              <div className="flex items-center justify-evenly">
                <FontAwesomeIcon icon={faHandshake} className="text-white mr-3 text-7xl mb-4 " />
                <div className='text-center'>
                  <p className="organic_natural font-semibold uppercase text-5xl">99%</p>
                  <p className=" mt-4 m-auto">Quality of service</p>
                </div>
              </div>
              <div className="flex items-center justify-evenly">
                <FontAwesomeIcon icon={faVialCircleCheck} className="text-white mr-3 text-7xl mb-4 " />
                <div className='text-center'>
                  <p className="premium_quality font-semibold uppercase text-5xl">22</p>
                  <p className=" mt-4 m-auto">Quality certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  absolute left-0 bottom-0">
          <img src={Leave2} alt=""  />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path fill="#ffb524" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      {/* Subscribe to NewsLetter */}
     
      {/* reviews / feedback */}

    </div >
  )
}

export default HomePage