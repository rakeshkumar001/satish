import React from 'react'
import Category1 from "../../assets/images/runningShoe.jpg";
import Category2 from "../../assets/images/athleticsShoe.jpg";
import Category3 from "../../assets/images/footballShoe.jpg";
import Category4 from "../../assets/images/tennisShoe.jpg";
import Category5 from "../../assets/images/basketballShoe.jpg";
import CustomButton from '../../components/atoms/CustomButton';

export default function Categories() {
    return (
        <div>
            <ul className='flex items-center justify-between my-12'>
                <li>
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:drop-shadow-3xl">
                        <div className="rounded-full m-5 overflow-hidden -rotate-45 hover:-rotate-0 transition-transform border-0 hover:border-2 border-solid border-primary ">
                            <img className="rounded-lg" src={Category1} alt="as description" />
                        </div>
                        <figcaption className=" text-center  text-lg text-primary">
                            <p>RUNNING</p>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:drop-shadow-3xl">
                        <div className="rounded-full m-5 overflow-hidden -rotate-45 hover:-rotate-0 transition-transform border-0 hover:border-2 border-solid border-primary ">
                            <img className="rounded-lg" src={Category2} alt="as description" />
                        </div>
                        <figcaption className=" text-center  text-lg text-primary">
                            <p>ATHLETIC</p>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:drop-shadow-3xl">
                        <div className="rounded-full m-5 overflow-hidden -rotate-45 hover:-rotate-0 transition-transform border-0 hover:border-2 border-solid border-primary ">
                            <img className="rounded-lg" src={Category3} alt="as description" />
                        </div>
                        <figcaption className=" text-center  text-lg text-primary">
                            <p>FOOTBALL</p>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:drop-shadow-3xl">
                        <div className="rounded-full m-5 overflow-hidden -rotate-45 hover:-rotate-0 transition-transform border-0 hover:border-2 border-solid border-primary ">
                            <img className="rounded-lg" src={Category4} alt="as description" />
                        </div>
                        <figcaption className=" text-center  text-lg text-primary">
                            <p>TENNIS</p>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:drop-shadow-3xl">
                        <div className="rounded-full m-5 overflow-hidden -rotate-45 hover:-rotate-0 transition-transform border-0 hover:border-2 border-solid border-primary ">
                            <img className="rounded-lg" src={Category5} alt="as description" />
                        </div>
                        <figcaption className=" text-center  text-lg text-primary">
                            <p>BASKETBALL</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <div className='m-auto w-fit'>
                <CustomButton text={"Shop Now"} />
            </div>
        </div>
    )
}
