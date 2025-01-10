import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faHeart, faPlusCircle, faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import ProductModal from './ProductModal';

export default function ProductCard(props) {
    const { data } = props;
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState()
    const modalHandler = (data) => {
        setModalData(data)
        setShowModal(true)
    }
    return (
        <>
            <div className='relative mb-10 group'  >


                {
                    data.inStock ? null
                        :
                        <div className="flex items-center justify-center">
                            <span className='outOfStock absolute top-1/2 text-primary bg-gray-50 font-Oswald  z-10 px-3 py-1 rounded-md shadow'>
                                Out Of Stock
                            </span>
                        </div>
                }
                <div className={data.inStock ? " wrapper antialiased cursor-pointer mb-5 " : "grayscale pointer-events-none blur-sm"} id={data.id}>
                    <div className='relative '>

                        <div className="imageContainer relative h-48 mt-10 rounded-lg bg-blue-50/50 group-hover:shadow-lg ">
                            <div className='flex items-center'>
                                {
                                    data.isBestSeller ?
                                        < span className='text-[10px] bg-primary px-2 rounded-full group-hover:-ml-2 transition-all ease-in-out duration-200 mt-2 shadow-sm drop-shadow-lg text-white py-1'>Best Seller</span>
                                        :
                                        null
                                }
                            </div>
                            <div className="wishList absolute right-1  top-2 drop-shadow-4xl ">
                                {
                                    data.subtitle.includes("Men") ?
                                        <FontAwesomeIcon icon={faHeart} className="text-primary grayscale drop-shadow-lg" />
                                        :
                                        <FontAwesomeIcon icon={faHeart} className="text-primary drop-shadow-lg" />
                                }

                            </div>
                            <img src={data.images.squarishURL} alt=" random imgee" className="group-hover:rotate-[0deg] transition-all ease-in-out duration-200 -rotate-[25deg] w-full -top-12 absolute" />
                        </div>
                        <div className="px-4 -mt-8 w-full absolute group-hover:-mt-12 transition-all ease-in-out duration-200">
                            <div className="bg-gray-50 dark:bg-gray-700 p-3 relative rounded-lg shadow-lg">
                                <h4 className="mt-1 text-sm font-semibold uppercase leading-tight h-10 dark:text-white">{data.title}</h4>
                                <p className='text-xs text-gray-400 dark:text-gray-200'>{data.subtitle}</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <p className='font-semibold text-primary'>
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
                                    <button type="button" onClick={() => modalHandler(data)} className='absolute -right-10 bottom-8 opacity-0 group-hover:-right-3  group-hover:opacity-100 transition-all ease-in-out duration-200' >
                                        <FontAwesomeIcon icon={faEye} className="bg-primary text-white rounded-full text-xs p-3 shadow-md" />
                                    </button>
                                    <div className="addToCart absolute -right-10 opacity-0 group-hover:-right-3 -bottom-2 group-hover:opacity-100 transition-all ease-in-out duration-200">
                                        <FontAwesomeIcon icon={faPlus} className="bg-primary text-white rounded-full text-xs p-3 shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
            {
                modalData && showModal &&
                <ProductModal data={modalData} modalClose={() => setShowModal(false)} />
            }
        </>
    )
}
