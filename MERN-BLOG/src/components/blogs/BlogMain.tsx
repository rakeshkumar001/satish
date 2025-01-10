import React, { useEffect, useState } from 'react'
import Quotations from '../../atoms/Quotations'
import BlogCard from '../../atoms/BlogCard'
import BlogData from "../../Data/BestBlogs.json"
import BreadCrumbs from '../../atoms/BreadCrumbs';

interface BlogInterface {
    imageUrl: any;
    id: number,
    tag: string,
    title: string,
    createdAt: string,
    time: number,
    body: string
}

const BlogMain = () => {
    const [blogData, setBlogData] = useState([[]])

    useEffect(() => {
        generateChunk(BlogData, 3)
    }, [])

    const generateChunk = (arr: any, size: number) => {
        let result = Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
        setBlogData(result)
    }

    return (
        <div className='py-10'>
            <BreadCrumbs />
            <h2 className='flex justify-center items-center text-4xl italic font-indie font-bold '>BLOGS...</h2>
            {/* Carousel - thoughts */}
            <Quotations />
            {/* All blogs list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    blogData && blogData.map((arr: any, i: number) => {
                        return (
                            <div className="grid gap-4" key={i}>
                                {arr.map((val: BlogInterface) => {
                                    return (
                                        <div key={val.id} className='max-w-full rounded-lg'>
                                            <BlogCard id={val.id} textSize={'2xl'} classname={''} showDescription={true} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogMain