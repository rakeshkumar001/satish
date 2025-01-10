import React, { useEffect } from 'react';
import Logo from "../assets/images/logo.png"
import AvatarImg from "../assets/images/avatar.png"
import Icons from '../components/Icons';
import MenuItems from "../assets/Json/MenuItems.json"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMenuItem } from '../Redux/MenuItemReducer';


const SidePanel = () => {
    const selectedMenu = useSelector((state: any) => state.MenuItemSelected.selectedMenuItem);
    const dispatch = useDispatch();
    const handleSelectMenu = (id: number) => {
        dispatch(selectedMenuItem(id))
    }

    return (
        <section className='w-full my-auto relative rounded-2xl h-[calc(100vh-1rem)]'>
            <div className="absolute w-full h-full p-2 z-10 shadow-lg shadow-black/50  rounded-2xl glassEffect">
                <div className="logo  rounded-2xl  mx-auto w-full p-1 h-18 ">
                    <img className="h-full" src={Logo} alt="logo" />
                </div>
                <div className="separator"></div>
                <div className="avatar relative mx-auto w-full flex items-center">
                    <div className='relative'>
                        <span className="top-0 -right-1 absolute z-10  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        <img className="w-8 h-8 p-1 rounded-full ring-2 ring-white drop-shadow-md dark:ring-gray-500" src={AvatarImg} alt="Bordered avatar" />
                    </div>
                    <p className='font-bold text-xs pl-3'>Admin</p>
                </div>
                <div className="separator"></div>
                <div className="meuList">
                    <ul className=''>
                        {
                            MenuItems.map((item) => {
                                return (
                                    <li key={item.id}  onClick={() => handleSelectMenu(item.id)} >
                                        <>{console.log(selectedMenu, item.id,'first')}</>
                                        <Link to={"/" + item.redirectLink} className={`${selectedMenu === item.id ? ' text-orange-400 hover:text-orange-400 glassEffect elevatedShadow ' : ' hover:scale-105'} text-sm rounded-full p-2 showAtCenter justify-start my-2 `}>
                                            <Icons classname='h-5 w-5 mr-2' iconName={item._iconName} />
                                            {item.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default SidePanel