import { Button } from 'flowbite-react'
import React from 'react'

const CustomButton = (props) => {
    return (
        <Button className=' w-fit mx-auto h-10 bg-gradient-to-b hover:drop-shadow-3xl hover:bg-gradient-to-r transition ease-in-out delay-150 hover:scale-110 from-primary to-secondary rounded-[50px]'>
            <p className='text-xs flex items-center '>
                {props.text}
                <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </span>
            </p>
        </Button>
    )
}
export default CustomButton