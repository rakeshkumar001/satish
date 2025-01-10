import { motion } from "framer-motion"
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
        favourite: boolean,
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
                        <motion.div variants={SA_childItems} key={item.id} className="my-6 w-full max-w-60 relative hover:cursor-pointer pl-5" >

                            <div className=" text-center transform skew-y-3 relative px-5 pb-3 pt-2 mt-6  mx-auto bg-orange-50 border-1 border-gray group  rounded-lg hover:shadow-lg hover:bg-white hover:shadow-orange-200 dark:hover:shadow-orange-200/40 dark:bg-gray-700 transition ease-in-out duration-300 hover:scale-110  hover:-translate-y-1 ">
                                <div className="-skew-y-3">
                                    {
                                        item.favourite &&
                                        <Icons iconName="heart" classname="text-pink-400 absolute top-0 -left-2 h-6 z-10 drop-shadow-md w-6 hover:scale-110 hover:text-pink-500" />
                                    }
                                    <div className={ `${!item.favourite && 'scale-125'} img_wrapper  flex justify-center group-hover:scale-110 transition-transform ease-linear  mx-auto`}>
                                        <img className={ `${!item.favourite && '-top-9 '} absolute w-full -top-16 -left-5 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]`} src={require(`../assets/images/categories${item.image_url}`)} alt="product img" />
                                    </div>
                                    <Icons iconName='foodType' classname={`${item.food_type == 'veg' ? ' text-green-700 dark:green-red-500' : ' text-red-700 dark:text-red-500'} h-5 w-5 absolute right-1 top-1`} />
                                    <h5 className=" line-clamp-1 max-h-14 text-sm font-semibold tracking-tight h-16 pt-8 text-slate-600 dark:text-white">{item.name}</h5>
                                    {showDescription &&
                                        <p className="text-xs font-normal line-clamp-3 min-h-12 tracking-tight text-slate-600 dark:text-white">{item.description}</p>
                                    }
                                    <div className="separator via-gray-300"></div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-orange-500 ">&#8377;{item.variant_category[0].variants[0].price}/-</span>
                                        <Icons iconName="cart" classname="text-gray-400 h-5 w-5 hover:text-orange-500 hover:scale-105" />
                                    </div>
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