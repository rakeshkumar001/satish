import React from 'react';
import CallUs from '../../assets/lottie-animation/call-us.json';
import Fog from '../../assets/lottie-animation/fog.json';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocation, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="w-screen  h-screen p-10  bg-gray-50 dark:bg-gray-900 ">
      <div className="absolute z-0 top-0 left-0">
        <Lottie animationData={Fog} />
      </div>
      <div className="relative z-10 w-2/3 h-full m-auto flex rounded-xl overflow-hidden shadow-box-shadow ">
        <div className="w-1/2">
          <form className="p-10 h-full w-full bg-white dark:bg-slate-700  space-y-3" action="">
            <h1 className="text-3xl font-Fredoka text-secondary">Let's Talk</h1>
            <p className='text-xs text-gray-400'>To request a quote or want to meet up for coffe, contact us directly or fill out the form and we will get back to you promptly. </p>
            <div className="flex flex-col">
              <label className='font-Poppins text-xs mb-2 text-gray-400' for="name">Name</label>
              <input type="text" name="name" id="name" required className="peer border-0 drop-shadow  dark:text-gray-700 text-gray-400 bg-orange-50 text-xs dark:text-white rounded-full" />

              <p className="invisible mt-1 peer-invalid:visible text-red-700 dark:text-rose-300 font-Poppins text-[8px]">
                Please enter your name
              </p>
            </div>
            <div className="flex flex-col">
              <label className='font-Poppins text-xs mb-2 text-gray-400' for="email">Email</label>
              <input type="email" name="email" id="email" required className="peer border-0 drop-shadow  dark:text-gray-700 text-gray-400 bg-orange-50 text-xs dark:text-white rounded-full" />
              <p className="invisible mt-1 peer-invalid:visible text-red-700 dark:text-rose-300 font-Poppins text-[8px]">
                Please enter a valid email address
              </p>
            </div>
            <div className="flex flex-col">
              <label className='font-Poppins text-xs mb-2 text-gray-400' for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="3" required
                className="peer border-0 drop-shadow dark:text-gray-700 text-gray-400 bg-orange-50 text-xs dark:text-white rounded-xl"></textarea>
              <p className="invisible mt-1 peer-invalid:visible text-red-700 dark:text-rose-300 font-Poppins text-[8px]">
                This field cannot be empty
              </p>
            </div>
            <button type="submit" className="px-5 mt-10 py-2 text-sm rounded-full border text-secondary hover:text-white border-secondary hover:bg-amber-500 ">Send Message</button>
          </form>
        </div>
        <div className="w-1/2 relative text-gray-400">
          <div className="bg-orange-50 drop-shadow-imgDropShadow h-full dark:bg-slate-800">
            <div className="opacity-[0.3]">
              <div className="vetables-background-effect "></div>
            </div>
            <Lottie style={{ width: '80%', margin: '0 auto' }} animationData={CallUs} />
            <div className="contactInfo p-10 space-y-3" >
              <div className="flex">
                <FontAwesomeIcon icon={faMapLocation} />
                <p className="font-Poppins text-xs mb-2 text-gray-400 ml-4"> 151 New Park Avenue, Hartford, CT 06106 United States</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <p className="font-Poppins text-xs mb-2 text-gray-400 ml-4"> +1 (203) 302-95454</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="font-Poppins text-xs mb-2 text-gray-400 ml-4"> contactus@organic.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact