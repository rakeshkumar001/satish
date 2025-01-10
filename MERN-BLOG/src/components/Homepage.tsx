import BlogCard from "../atoms/BlogCard";
import Buttons from "../atoms/Buttons";
import { getAllCategoryNames, getAllTitles } from '../utils/Utils'


const Homepage = () => {
    return (
        <div className='py-10'>
            <div className="flex justify-between items-center">
                <h2 className='flex justify-center items-center text-4xl italic font-indie font-bold '>Best blog of the week...</h2>
                <Buttons to={"/blogs"} className={""} text={"See all blogs"} />
            </div>
            <div className="best_blog_container my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <BlogCard id={1} scale={false}/>
                    <div>
                        <div className="grid grid-rows-2 grid-flow-col gap-4 max-h-screen">
                            <div className="col-span-1 bg-dummyImg rounded-md shadow-md hover:shadow-lg p-5 ">
                                <p className="border-b border-secondary border-dotted font-bold w-2/3 mx-auto mb-5 pb-3 text-xl uppercase">Topics</p>
                                <div className=" grid grid-rows-5 grid-flow-col">
                                    {
                                        getAllTitles().map((val: String) => {
                                            return (
                                            <p className=" transition-all ease-linear border-b  border-secondary border-dotted text-xs text-left py-1 items-center flex mr-5 w-fit hover:cursor-pointer text-gray-600 hover:text-secondary hover:font-bold">{val}</p>)
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                    <>
                                        <BlogCard id={4} textSize={'2xl'} classname={""} scale={false}/>
                                    </>
                                    <div className="w-full rounded-lg bg-dummyImg p-5 relative shadow-md hover:shadow-lg hover:bg-blend-darken">
                                        <p className="border-b mb-5 pb-3 border-secondary border-dotted font-bold w-2/3 mx-auto uppercase text-xl">Categories</p>
                                        {getAllCategoryNames().map((val: string) => {
                                            return (
                                                <Buttons to="/blogs" className={"bg-primary/50 hover:bg-primary rounded-full hover:shadow-lg text-lg  border/50 cursor-pointer mb-5 shadow-md mr-2 h-fit"} text={val} showArrow={false} />
                                            )
                                        })}
                                        <Buttons to="/blogs" className={"absolute right-5 bottom-5"} text={"See all blogs"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default Homepage
