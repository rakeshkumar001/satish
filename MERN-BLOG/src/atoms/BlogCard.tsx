import { useState } from "react"
import BlogData from "../Data/BestBlogs.json"
import Buttons from "./Buttons";
import { generateSlug } from "../utils/Utils";

interface BlogCardInterface {
    imageUrl: any;
    id: number,
    tag: string,
    title: string,
    createdAt: string,
    time: number,
    body: string
}
interface BlogCardPropInterface {
    id: number,
    textSize?: string,
    classname?: string,
    showDescription?: boolean,
    scale?: boolean
}

const BlogCard = ({ id, textSize = '4xl', classname, showDescription = false, scale = true }: BlogCardPropInterface) => {
    const [blogData, setBlogData] = useState<BlogCardInterface>(BlogData[id - 1]);
    const postCreatedDate = new Date(blogData?.time).toDateString();
    return (
        <div style={{ 'backgroundImage': `url(${blogData?.imageUrl})` }} className={` max-w-full min-h-full relative bg-dummyImg bg-no-repeat bg-cover bg-right rounded-md  transition-all ease-linear hover:bg-center p-5 hover:shadow-xl grid grid-rows-2 grid-flow-col gap-4 ${classname} ${scale && 'hover:scale-105'}`}>
            <div className="text-sm flex justify-end items-top">
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
            <div className="relative min-h-24 ">
                <div className="text-left">
                    <h5 className={`text-${textSize}  font-bold tracking-tight text-gray-900 dark:text-white mb-5 w-4/5 leading-normal`}>
                        <span className="text-white drop-shadow-xl p-2 rounded-md"> {blogData?.title}</span>
                    </h5>
                    {
                        showDescription &&
                        <p className="font-normal text-gray-700 dark:text-gray-400 bg-white/75 p-1 text-xs rounded-lg line-clamp-3 h-14 text-wrap overflow-clip  mr-20">
                            {blogData?.body}
                        </p>
                    }
                </div>
                <Buttons to={'/blogs/' + blogData.id + "/" + generateSlug(blogData.title)} className={"absolute right-0 bottom-0"} text={""} />
            </div>
        </div >
    )
}

export default BlogCard
