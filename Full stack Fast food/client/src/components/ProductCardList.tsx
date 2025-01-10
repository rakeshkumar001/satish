import React from 'react';
import PopularCategoriesList from "../assets/Json/PopularCategories.json"
import { motion } from "framer-motion"
import { ViewfinderCircleIcon } from '@heroicons/react/20/solid';
import Section from './Section';
import Button from './Button';
import { SA_childItems, SA_mainContainer } from '../Utlity/SwaggerAnimation';
import Icons from './Icons';

interface ProductCardProps {
    listItems: {
        id: string,
        food_type: string,
        image_url: string,
        name: string,
        description: string,
        variant_category: {
            name: string; variants: { addons: never[]; entity_id: string; is_takeway_support: boolean; name: string; price: number; service: string; takeaway_price: null; }[];
        }[]
    }[],
    showDescription: boolean
}

const ProductCardList = ({ listItems, showDescription }: ProductCardProps) => {
    return (
        <motion.div variants={SA_mainContainer(2)} initial="hidden" animate="show" className=" productCards grid grid-cols-1 md:grid-cols-4 gap-4">
            {
                listItems.map((item) => {
                    return (
                        <motion.div variants={SA_childItems} key={item.id} className="my-6 w-full max-w-60   hover:cursor-pointer " >
                            <div className=" text-center relative px-5 pb-3 pt-8 mt-6  mx-auto bg-slate-100 border-1 border-gray shadow-lg rounded-lg hover:shadow-lg hover:shadow-orange-200 dark:hover:shadow-orange-200/40 dark:bg-gray-700 transition ease-in-out duration-300 hover:scale-110  hover:-translate-y-1 ">
                                <div className="img_wrapper flex justify-center">
                                    <img className="absolute -top-16 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]" src={require("../assets/images/categories" + `${item.image_url}`)} alt="product image" />
                                </div>
                                <Icons iconName='foodType' classname={`${item.food_type == 'veg' ? ' text-green-700 dark:green-red-500' : ' text-red-700 dark:text-red-500'} h-5 w-5 absolute right-1 top-1`} />
                                <h5 className=" line-clamp-1 max-h-14 text-sm font-semibold tracking-tight h-16 pt-8 text-slate-600 dark:text-white">{item.name}</h5>
                                {showDescription &&
                                    <p className="text-xs font-normal line-clamp-3 min-h-12 tracking-tight text-slate-600 dark:text-white">{item.description}</p>
                                }
                                <div className=" border-t-2 border-gray-200 flex items-center justify-between pt-2 mt-3">
                                    <span className="text-xl font-bold text-orange-500 ">&#8377;{item.variant_category[0].variants[0].price}/-</span>
                                    <Button className='text-xs px-2 py-1 hover:text-white hover:bg-orange-400 hover:border-orange-400 border border-gray-400 rounded-full text-gray-600 dark:bg-slate-500 dark:text-white' text="Add to cart" />
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            }
        </motion.div>
    )
}

export default ProductCardList