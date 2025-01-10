import { BellAlertIcon, FireIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Icons from '../components/Icons'

const MainHeader = () => {
    return (
        <div className='bg-gradient-to-r from-orange-500 to-red-500 rounded-md shadow-sm flex items-center justify-between w-full px-2 py-1'>
            <div className="salutation">
                <h1 className='text-lg text-white font-medium drop-shadow-md'>Welcome, <b className='ml-1'>User</b></h1>
                <p className='text-xs flex dark:text-gray-300'>Discover what your taste buds craving for... <FireIcon className='h-4 w-4 text-white drop-shadow-md' /></p>
            </div>
            <div className="rightSideNavigation flex items-center">
                <div className="notification">
                    <BellAlertIcon className='h-5 w-5 mx-2 drop-shadow-md' />
                </div>
                <div className="cart">
                    <ShoppingCartIcon className='h-5 w-5 mx-2 drop-shadow-md' />
                </div>
                <div className="rounded-full shadow-md  bg-white h-8 w-8 overflow-hidden block">
                    <img className='w-full' src={"https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainHeader