import { faEye, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lottie from 'lottie-react';
import Heart from '../../../assets/lottie-animation/Heart.json';
import React, { useEffect, useState } from 'react'

const ProductCards = ({ cardData }) => {

    const [productLiked, setProductLiked] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const [currentQuantity, setCurrentQuantity] = useState(0)
    // const [productLiked, setProductLiked] = useState(false)
    // const [productLiked, setProductLiked] = useState(false)
    useEffect(() => {
        if (currentQuantity === 0) setAddedToCart(false)
    }, [currentQuantity])



    return (
        <div className='my-14'>
            <div className="shadow-card-shadow group/productCard relative border-2 float-left w-64 m-2 my-6 max-w-sm bg-orange-50 dark:bg-gray-700 rounded-lg overflow-hidden  dark:border-gray-700 hover:shadow-hover-card-shadow" >
                <div className="flex justify-between items-center p-4 absolute w-full z-10">
                    <span className='border-2 border-gray-800 text-[8px] bg-rose-500 text-white rounded-full p-1 flex justify-center items-center'>
                        {cardData.discount}% Off
                    </span>
                </div>
                <div className='relative h-44'>
                    <img className="p-4 m-auto " src={cardData.img} alt="productimage" />
                </div>
                <div className="rounded-t-[50%] bg-white dark:bg-gray-600 absolute w-[300px] left-[-10%]  mx-auto h-40 z-[0]"></div>
                <div className="p-5 pt-4 bg-transparent relative z-10 text-center">
                    <h5 className="text-md font-bold tracking-tight text-primary">{cardData.title}</h5>
                    <div className="priceDrop flex justify-between items-center w-1/2 my-2 mx-auto">
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">Rs {Math.round(cardData.price - (cardData.price * cardData.discount / 100))} /-</p>
                        <p className="text-xs text-gray-300 font-light line-through ">Rs {cardData.price} /-</p>
                    </div>
                    <div className="flex items-center mt-2 w-fit mx-auto scale-75">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{cardData.starRating}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 w-full mx-auto">
                        <button className='flex items-center justify-center' onClick={() => setProductLiked(!productLiked)}>
                            {
                                productLiked ? <div className="scale-110 relative left-[-5px]"><Lottie style={{ width: 35, scale: 1.5 }} animationData={Heart} loop={false} /></div> : <FontAwesomeIcon icon={faHeart} className="text-gray-300 text-lg cursor-pointer hover:text-secondary ml-1" />
                            }
                        </button>
                        {
                            addedToCart ?
                                <div className="flex justify-center items-center">
                                    <button className=" rounded-full p-1 bg-orange-50  shadow-other-card-shadow" onClick={() => setCurrentQuantity(currentQuantity + 1)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <input type="text" value={currentQuantity} className='mx-2 other-card-shadow rounded-lg border-secondary h-8 w-10 text-center' />
                                    <button className=" rounded-full p-1 bg-orange-50  shadow-other-card-shadow" onClick={() => setCurrentQuantity(currentQuantity - 1)}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                                :
                                <button onClick={() => { setAddedToCart(true); setCurrentQuantity(currentQuantity + 1) }} className=" block border border-secondary shadow-btn-shadow font-Poppins text-xs hover:border-white cursor-pointer p-2 rounded-full text-secondary hover:bg-secondary hover:shadow-btn-shadow  hover:text-white">Add to cart</button>
                        }
                        <FontAwesomeIcon icon={faEye} className="text-gray-300 text-lg cursor-pointer hover:text-secondary ml-1" />
                    </div>
                </div>
                <p className='group-hover/productCard:bg-orange-300  w-24 h-1 mx-auto relative z-20'></p>
            </div>
        </div>
    )
}

export default ProductCards