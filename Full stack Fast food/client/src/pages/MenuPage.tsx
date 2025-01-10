import { useEffect } from 'react'
import MenuCategory from '../components/MenuCategory';
import ProductCardList from '../components/ProductCardList';
import { useSelector } from 'react-redux';
import Section from '../components/Section';

const MenuPage = () => {
    const selectedCategoryList = useSelector((state: any) => state.MenuCategorySlice.menuCategory[0].list);
    useEffect(() => {
    }, [selectedCategoryList])

    return (
        <>
            <MenuCategory />
            <Section title='Product list' classname='py-3'>
                <ProductCardList listItems={selectedCategoryList} showDescription={true} />
            </Section>
        </>
        // <div className='overflow-hidden'>
        //     <section className="header dark:text-white text-gray-400 flex justify-between items-center w-full">
        //         <div className="relative mb-6">
        //             <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
        //             <input id="labels-range-input" type="range" defaultValue="100" min="0" max="500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        //             <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (0)</span>
        //             <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (200)</span>
        //         </div>

        //         <div className="search-filter flex justify-center items-center">
        //             <form className='mr-4'>
        //                 <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        //                 <div className="relative">
        //                     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        //                         <MagnifyingGlassCircleIcon className='h-6 w-6 text-amber-500' />
        //                     </div>
        //                     <input type="search" id="default-search" className="bg-white block w-full p-2 px-4 ps-10 pe-10 text-sm text-gray-400 dark:text-white dark:bg-slate-600 shadow border-none outline-none  rounded-full " placeholder="Search product..." required />
        //                 </div>
        //             </form>
        //             {/* <p className='text-xs mx-5 flex justify-between items-center'>
        //                 Veg Type:
        //                 <Switch
        //                     checked={enabled}
        //                     onChange={setEnabled}
        //                     className={`${enabled ? 'bg-red-600' : 'bg-green-600'}
        //   relative inline-flex h-4 w-8 mx-2 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        //                 >
        //                     <span
        //                         aria-hidden="true"
        //                         className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
        //                     pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        //                     />
        //                 </Switch>
        //             </p> */}
        //             <div className="filter">
        //                 <div className="text-right">
        //                     <Menu as="div" className="relative inline-block text-left">
        //                         <div>
        //                             <Menu.Button className=" dark:bg-slate-600 inline-flex w-full justify-center rounded-md shadow px-2 py-2 text-sm font-medium text-white bg-white">
        //                                 <FunnelIcon className='h-5 w-5 text-amber-500' />
        //                                 <ChevronDownIcon
        //                                     className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
        //                                     aria-hidden="true"
        //                                 />
        //                             </Menu.Button>
        //                         </div>
        //                         <Transition
        //                             as={Fragment}
        //                             enter="transition ease-out duration-100"
        //                             enterFrom="transform opacity-0 scale-95"
        //                             enterTo="transform opacity-100 scale-100"
        //                             leave="transition ease-in duration-75"
        //                             leaveFrom="transform opacity-100 scale-100"
        //                             leaveTo="transform opacity-0 scale-95"
        //                         >
        //                             <Menu.Items className="absolute dark:bg-slate-900 text-gray-500 dark:text-white right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        //                                 <div className="px-1 py-1 ">
        //                                     <Menu.Item >
        //                                         {({ active }) => (
        //                                             <button
        //                                                 className={`${active ? 'bg-orange-100 hover:text-orange-400 text-white' : 'text-gray-400'
        //                                                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        //                                             >
        //                                                 Edit
        //                                             </button>
        //                                         )}
        //                                     </Menu.Item>
        //                                 </div>
        //                             </Menu.Items>
        //                         </Transition>
        //                     </Menu>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        //     <section className='h-[calc(100vh-150px)] overflow-auto'>
        //         <motion.div variants={container} initial="hidden" animate="show" className=" productCards grid grid-cols-1 md:grid-cols-4 gap-4">
        //             {BurgerProductList.map((item: any, index: number) => {
        //                 return (
        //                     <motion.div variants={listItem} initial="hidden" animate="show"  key={item.id} className="mt-5 w-full max-w-60  hover:cursor-pointer" >
        //                         <div className='relative'>
        //                             <div className='animate-pulse dark:bg-gray-600 h-28 rounded-md w-full flex justify-center items-center'>
        //                                 <svg className="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        //                                     <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        //                                 </svg>
        //                             </div>
        //                             <img className="absolute top-0 rounded-md shadow" src={item.image_url} alt="product image" />
        //                         </div>
        //                         <div className="px-5 pb-5 max-w-56 mx-auto bg-white border-1 border-gray rounded-lg -translate-y-1 shadow hover:scale-105 transition-all ease-in-out hover:shadow-lg dark:bg-gray-800">
        //                             <ViewfinderCircleIcon className={`${item.food_type == 'veg' ? ' text-green-700' : ' text-red-700'} h-5 w-5 absolute right-1 top-1`} />
        //                             <h5 className=" text-xs font-semibold tracking-tight pt-4 text-slate-700 dark:text-white my-2 line-clamp-2">{item.name}</h5>
        //                             <p className='text-gray-500 dark:text-gray-400 text-xs font-normal line-clamp-3 min-h-12'>{item.description}</p>
        //                             <div className="flex items-center justify-between mt-3">
        //                                 <span className="text-xl font-bold text-orange-500 ">&#8377;{item.variant_category[0].variants[0].price}/-</span>
        //                                 <button className="text-xs px-2 py-1 hover:text-white hover:bg-orange-400 hover:border-orange-400 border border-gray-400 rounded-full text-gray-400">Add to cart</button>
        //                             </div>
        //                         </div>
        //                     </motion.div>

        //                 )
        //             })}
        //         </motion.div>
        //     </section>
        // </div>
    )
}

export default MenuPage