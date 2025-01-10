import { Link } from "react-router-dom";
interface LinkInterface {
    to: string,
    className: string,
    text: string,
    isButton?: boolean,
    showArrow?: boolean
}

const Buttons = ({ to = "/", className, text, isButton = true, showArrow = true }: LinkInterface) => {
    return (
        <Link to={to} className={isButton ? `border-2 group border-primary bg-primary/50 transition-all ease-linear hover:bg-primary shadow-md  rounded-full w-fit  
             ${className} 
             ${showArrow ? "py-4 px-4 flex items-center justify-between" : "w-fit px-2 text-sm text-center  inline-block"}`
            : className} >
            {(isButton && text) && <p className="pr-2">{text}</p>}
            <p className="text-lg font-bold  -rotate-45 group-hover:rotate-0 transition-all ease-linear">
                {
                    showArrow &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                }
            </p>
        </Link>
    )
}

export default Buttons
