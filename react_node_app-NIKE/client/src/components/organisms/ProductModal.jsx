import { faClose, faStarHalfAlt, faStar, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'flowbite-react';
import React from 'react'
import CustomButton from '../atoms/CustomButton';

export default function ProductModal(props) {
    const { data, modalClose } = props;
    return (
        < div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 bg-gray-900/60 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center flex">
            <div className="relative w-full h-full max-w-4xl md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between  border-b rounded-t dark:border-gray-600">
                        <button onClick={() => modalClose(false)} type="button" className="bg-primary p-3 px-3.5 relative -right-3 -top-2 rounded-full text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <FontAwesomeIcon icon={faClose} />
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 py-0">
                        <div class="grid grid-cols-2 divide-x">
                            <div>
                                <img src={data.images.squarishURL} alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-primary">
                                    {data.title}
                                </h3>
                                <p className='text-gray-400'>{data.subtitle}</p>
                                <div className="ratings flex items-center">
                                    <div className=" flex items-center my-4">
                                        <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                                        <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                                        <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                                        <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                                        <FontAwesomeIcon className="text-gray-500" icon={faStarHalfAlt} />
                                    </div>
                                    <p className='text-xs mx-4 text-gray-400'>4.5/5 ( 321 reviews)</p>
                                </div>
                                <div className="price">
                                    <p className='font-semibold text-xl text-primary'>
                                        Rs.  {data.price.currentPrice} /-
                                        {
                                            data.price.discounted ?
                                                <span className="beforePrice line-through text-gray-400 font-normal mx-2  text-[12px]">
                                                    Rs. {data.price.fullPrice}
                                                </span>
                                                :
                                                null
                                        }
                                    </p>
                                </div>
                                <div className="flex">
                                    <div className="colors my-5">
                                        <p className=" text-sm text-gray-400 dark:text-white">Colors</p>
                                        <div className='w-fit  flex justify-between rounded-lg p-2 dark:bg-gray-800 bg-gradient-to-b from-primary/20 to-secondary/20'>
                                            <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 mr-2 text-red-600  bg-red-600 border-gray-300 rounded-full  focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2  dark:border-gray-600" />
                                            <input id="green-checkbox" type="checkbox" value="" className="w-4 h-4 mr-2 text-green-600  bg-green-600 border-gray-300 rounded-full  focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2  dark:border-gray-600" />
                                            <input id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 mr-2 text-purple-600 bg-purple-600 border-gray-300 rounded-full  focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2  dark:border-gray-600" />
                                            <input id="orange-checkbox" type="checkbox" value="" className="w-4 h-4 mr-2 text-orange-500 bg-orange-500 border-gray-300 rounded-full  focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2  dark:border-gray-600" />
                                        </div>
                                    </div>
                                    <div className="size my-5 ml-10">
                                        <p className=" text-sm text-gray-400 dark:text-white">Size</p>
                                        <div className='shadow-lg  rounded-lg p-2 dark:bg-gray-800 bg-gradient-to-b from-primary/20 to-secondary/20 '>
                                            <div className="flex flex-wrap ">
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">5</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">5.5</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">6</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">6.5</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">7</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">7.5</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">8</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">8.5</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">9</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">9.5</div>
                                                <div className="bg-gray-50 hover:bg-secondary/60 hover:text-white cursor-pointer shadow flex items-center justify-center rounded-sm px-3 w-8 h-5 text-xs m-1 text-gray-400 dark:text-gray-500">10</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="quantity ">
                                    <p className='text-gray-400 mb-3 text-sm'>Quantity</p>
                                    <div class="relative flex items-center">
                                        <select class="rounded border h-10 appearance-none text-xs border-gray-400 focus:outline-none focus:border-red-500  ">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                        <div className='-my-10 mx-10'>
                                            <CustomButton text="Add To Cart" />
                                        </div>
                                    </div>
                                </div>
                                <div className="delivery my-4">
                                    <p className='text-gray-400 mb-3 text-sm'>Delivery & Services</p>
                                    <form class="flex items-center">
                                        <div class="relative  flex items-baseline justify-between">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 h-10 pointer-events-none">
                                                <FontAwesomeIcon icon={faTruck} />
                                            </div>
                                            <input type="text" id="voice-search" class="bg-gray-50 border focus:border-primary ring-primary border-gray-300 p-0 h-10 text-gray-900 text-sm rounded-lg  block w-full pl-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Enter Pincode..." required />
                                            <button className='bg-primary p-0 ml-2 h-10 text-sm overflow-hidden w-96 hover:shadow-lg text-white rounded-lg hover:bg-primary'>Check Delivery</button>
                                        </div>
                                    </form>
                                    <p className='text-[10px]'>Home Delivery by Tomorrow</p>
                                </div>

                            </div>
                        </div>
                        {/* <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className='deliveryDetails text-[10px] text-gray-400 font-Poppins'>
                            <h4 className='text-sm text-gray-400'>Delivery Details</h4>
                            <p className='my-1'>Free delivery for purchases above ₹14,000.00</p>
                            <p className='my-1'>Standard delivery 4–9 Business Days</p>
                            <p className='my-1'>Orders are processed and delivered Monday–Friday (excluding public holidays)</p>
                            <p className='my-1'>Nike Members enjoy <a class="u-underline" href="https://en-eu-help.nike.com/app/answer/article/returns-policy/country/in">free returns</a></p>
                        </div> */}
                    </div>
                    {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
