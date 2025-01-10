import React, { useEffect } from 'react'
import Button from '../../components/Button'
import Icons from '../../components/Icons'
import Categories from './Categories'
import OrderList from "../../assets/Json/Orderlist.json"
import Section from '../../components/Section'
import ProductCardList from '../../components/ProductCardList'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const selectedCategoryList = useSelector((state: any) => state.MenuCategorySlice.menuCategory[0].list);
    useEffect(() => {
    }, [selectedCategoryList])
    return (
        <div className="grid grid-cols-7 gap-4 w-full h-full overflow-hidden">
            <div className="col-span-5 h-screen">
                <div className="glassEffect w-full h-[calc(100vh-20px)] p-4 rounded-2xl overflow-auto">
                    <div className="searchBar">
                        <form>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <Icons iconName='search' classname='' />
                                </div>
                                <input type="search" id="default-search" className="block w-full py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full" placeholder="Search your food ..." required />
                                <Button type="submit" className="absolute end-1.5 bottom-[4px]">Search</Button>
                            </div>
                        </form>
                    </div>
                    <div className="menuCategories">
                        <Section title='Categories'>
                            <Categories />
                        </Section>
                    </div>
                    <div className="productList">
                        <Section title='Product List'>
                            <ProductCardList listItems={selectedCategoryList} showDescription={true} />
                        </Section>
                    </div>
                </div>
            </div>
            <div className="col-span-2 relative h-[calc(100vh-20px)] overflow-hidden">
                <div className="glassEffect h-full  p-4 rounded-2xl text-gray-500 flex flex-col justify-between ">
                    <section className="delivery_address p-2 rounded-xl bg-orange-50 ">
                        <p className='font-bold text-xs'>Delivery Address</p>
                        <div className='separator via-gray-300 my-1 h-[1px]'></div>
                        <div className='text-xs '>
                            <p className='flex'><Icons iconName='mapPin' classname='text-gray-500 h-5 w-5 mr-1' /> 6, Nirman Kendra, Dr E Moses Road, Mahalaxmi, Mumbai</p>
                            <p className='flex'><Icons iconName='time' classname='text-gray-500 h-4 w-4 mr-1' /> 20 min</p>
                        </div>
                    </section>
                    <div className='separator h-[2px]'></div>
                    <section className="cart_container p-2 ">
                        <div className='flex justify-between items-center'><p className='flex font-bold text-xs'> <Icons iconName='cart' classname='h-4 w-4 mr-1' />Cart</p> <p className='text-xs'>Order Id: <b>{OrderList[0].orderID}</b></p> </div>
                        <div className="cart__list  my-2">
                            <ul>
                                {
                                    OrderList[0].ordered_products.map((item, index) => {
                                        return (
                                            <>
                                                <li key={index} className='grid grid-cols-6 glassEffect bg-orange-50 border rounded-md hover:glassEffect my-1 hoverScale'>
                                                    <div className="image_wrapper h-10 col-span-2">
                                                        <img className='h-full' src={require(`../../assets/images/categories${item.image_url}`)} alt="" />
                                                    </div>
                                                    <p className='text-xs col-span-3'>
                                                        {item.name}
                                                        <form className="mx-auto my-1">
                                                            <div className="relative flex items-center max-w-[8rem]  rounded-full w-fit">
                                                                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-full p-1  focus:ring-gray-100 dark:focus:ring-gray-700">
                                                                    <Icons iconName="minus" classname="w-2 h-2 text-gray-900 dark:text-white" />
                                                                </button>
                                                                <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-transparent border-x-0 border-gray-300  text-center text-gray-900 text-sm  block w-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="0" required />
                                                                <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-full p-1  focus:ring-gray-100 dark:focus:ring-gray-700">
                                                                    <Icons iconName="plus" classname="w-2 h-2 text-gray-900 dark:text-white" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </p>
                                                    <div className="delete_item col-span-1 flex justify-center items-center hover:cursor-pointer hover:drop-shadow hover:text-orange-500">
                                                        <Icons iconName='delete' />
                                                    </div>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    <div className='flex justify-between items-center relative'>
                        <span className='h-10 w-10 bg-orange-500/50 rounded-full absolute -left-10'></span>
                        <div className='border-2 w-full border-dashed border-orange-500'></div>
                        <span className='h-10 w-10 bg-orange-500/50 rounded-full absolute -right-10'></span>
                    </div>
                    <section className="cart_total p-2 ">
                        <p className='flex justify-between items-center text-xs mb-4'>Have coupon to apply?
                            <span className='relative'>
                                <input className='rounded-md ml-3 p-2 shadow-md pr-10 overflow-hidden text-ellipsis max-w-32 border-none outline-none' maxLength={5} type="text" placeholder='Enter coupon...' />
                                <button className='bg-orange-50 border border-orange-300 hover:bg-orange-500 hover:text-white px-2 rounded-md shadow-sm absolute right-0 h-full'>Apply</button>
                            </span>
                        </p>
                        <div className='glassEffect bg-orange-50 text-xs p-2'>
                            <p className='flex justify-between items-center'>
                                <span className='font-bold'>Subtotal</span>
                                <span>300</span>
                            </p>
                            <p className='flex justify-between items-center'>
                                <span className='font-bold'>Tax</span>
                                <span>10</span>
                            </p>
                            <div className='separator via-gray-300 my-1 h-[1px]'></div>
                            <p className='flex justify-between items-center'>
                                <span className='font-bold'>Total</span>
                                <span className='font-bold text-orange-500'>310</span>
                            </p>
                        </div>
                        <Button text='Proceed to checkout' className='shadow-md mt-3 w-full hov'/>
                    </section>
                </div>
            </div >
        </div >
    )
}

export default Homepage