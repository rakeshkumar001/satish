import React from 'react'

interface ButtonProps {
    className?: string,
    text?: string,
    children?: React.ReactNode,
}
const Button: React.FC<ButtonProps> = ({ className, text, children }) => {
    return (
        <button className={`${className} btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white border-orange-500 border py-1 px-2 rounded-full hover:bg-white group hover:shadow-md hover:shadow-gray-400/50`}>
            <span className="w-0 h-0 bg-gradient-to-r from-orange-500 to-red-500 absolute top-0 left-0 ease-out duration-200 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full h-full  text-xs transition-colors duration-100 ease-in-out group-hover:text-white z-10">
                {children ? children : text}
            </span>
        </button>
    )

}

export default Button