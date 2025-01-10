import React from 'react';
import Leaf from '../assets/images/green_leaf.png'
interface SectionInterface {
    children?: React.ReactNode,
    title?: string,
    classname?: string
}
const Section: React.FC<SectionInterface> = ({ children, title, classname }) => {
    return (
        <section className={classname + ' MenuCategory px-2 mb-8'}>
            <p className="ribbon mb-3 ">
                <span className='absolute h-10 w-10 -top-6 right-0'>
                    <img src={Leaf} alt="leaf" />
                </span>
                <span className='text font-semibold mb-3 min-w-40 text-left drop-shadow block h-[28px]'>{title}</span>
            </p>
            {children}
        </section>
    )
}

export default Section