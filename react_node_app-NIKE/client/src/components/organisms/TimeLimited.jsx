import React from 'react';
import Sale1 from "../../assets/images/sale1.jpg";
import Sale2 from "../../assets/images/sale2.jpg";
import Sale3 from "../../assets/images/sale3.jpg";
import Sale4 from "../../assets/images/sale4.jpg";
import Sale5 from "../../assets/images/sale5.jpg";
import Sale6 from "../../assets/images/sale6.jpg";
import Sale7 from "../../assets/images/sale7.jpg";
import Sale8 from "../../assets/images/sale8.jpg";

export default function TimeLimited() {
    return (
        <div className='flex items-center justify-between my-12'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale1} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale2} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale3} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale4} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale5} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale6} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale7} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale1} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale8} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale2} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale5} alt="" />
                    </div>
                    <div className='ease-in-out  transition-all duration-300 hover:drop-shadow-4xl hover:scale-150'>
                        <img className="h-auto max-w-full rounded-lg" src={Sale3} alt="" />
                    </div>
                </div>
            </div>

        </div>

    )
}
