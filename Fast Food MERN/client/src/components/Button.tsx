import React from 'react'

interface ButtonProps {
    className?: string,
    text?: string,
    children?: React.ReactNode,
    type?: 'submit' | 'reset' | 'button' | undefined;
}
const Button: React.FC<ButtonProps> = ({ className, text, children, type = 'button' }) => {
    return (
        <button type={type} className={` min-w-20 w-fit h-fit bg-orange-50 hover:bg-gradient-to-l hover:from-orange-500 hover:to-red-500 text-gray-700 hover:text-white
          text-xs transition-colors duration-100 ease-in-out rounded-full py-2 px-4  hover:shadow-xs ${className} `} >
            {children ? children : text}
        </button>
    )

}

export default Button