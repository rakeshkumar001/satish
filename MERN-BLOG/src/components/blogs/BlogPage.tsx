import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBlogData } from '../../utils/Utils';
import BreadCrumbs from '../../atoms/BreadCrumbs';
import Buttons from '../../atoms/Buttons';

const BlogPage = () => {
    const { id, slug } = useParams();
    const blogData = getBlogData(id)
    const postCreatedDate = new Date(blogData?.time).toDateString();

    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-10 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-6xl mx-auto overflow-hidden rounded relative">
                    <div className="flex justify-between items-center">
                        <BreadCrumbs />
                        <Buttons to="/blogs" className={"h-10"} text={"See all blogs"} />
                    </div>
                    {/* banner img */}
                    <div className="h-[75vh] mt-5 bg-top shadow-xl rounded-lg drop-shadow-lg relative" style={{ 'backgroundImage': `url(${blogData?.imageUrl})` }}>
                        <div className="text-sm absolute top-5  right-5 flex justify-center items-center">
                            <p className="border shadow-md border-white  h-5 rounded-full px-2 bg-white mr-2">{postCreatedDate}</p>
                            <p className="border shadow-md border-white  h-5 rounded-full px-2 text-white bg-secondary flex justify-between items-center">
                                <span className="scale-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                {blogData?.tag}
                            </p>
                        </div>
                        <div className="h-full w-full flex absolute items-center justify-center">
                            <h2 className="inline-block font-bold font-Poppins text-white text-3xl lg:text-6xl drop-shadow-xl ">
                                {blogData.title}
                            </h2>

                        </div>
                    </div>
                    {/* blog content */}
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 w-11/12 rounded-lg bg-white drop-shadow-lg  dark:bg-gray-50">
                        <div className="space-y-2 border-b-2 pb-5 mb-3 relative flex justify-between items-center">
                            <p className="text-xs text-gray-500 flex justify-center items-center">By:-
                                <span className="text-xs hover:underline font-semibold font-Roboto flex justify-center items-center ml-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    {blogData.author}
                                </span>
                            </p>
                            <p className='text-xs text-gray-500'>
                                <span>Tags:- </span>
                                <span className=' text-secondary border-secondary border bg-primary/50 rounded-full px-3'>{blogData.tag}</span>
                            </p>
                        </div>
                        <div className="dark:text-gray-800 text-left">
                            <p className='blog_body'>
                                {blogData.body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
