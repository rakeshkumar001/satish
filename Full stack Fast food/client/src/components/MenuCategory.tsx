import { useEffect, useState } from 'react'
import MenuCategoriesList from "../assets/Json/MenuCategories.json";
import BurgerProductList from "../assets/Json/Burgers.json";
import SidesProductList from "../assets/Json/Sides.json";
import BeveragesProductList from "../assets/Json/Beverages.json";
import DessertsProductList from "../assets/Json/Desserts.json";
import HotCafeProductList from "../assets/Json/HotCafe.json";
import Section from './Section';
import Button from './Button';
import { SA_childItems, SA_mainContainer } from '../Utlity/SwaggerAnimation';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../Redux/MenuCategoryReducer';


const MenuCategory = () => {
    const dispatch = useDispatch();
    const selectedCategoryID = useSelector((state: any) => state.MenuCategorySlice.menuCategory[0].id);
    const [menuCategoryList, setMenuCategoryList] = useState<any>(BurgerProductList)
    const [menuCategoryID, setmenuCategoryID] = useState<string>(MenuCategoriesList[0].id)

    const CategoryFilter = (name: string, id: string) => {
        let filteredCategory = MenuCategoriesList.filter((val) => { if (val.name == name) { return val } })
        setmenuCategoryID(filteredCategory[0].id)
        switch (filteredCategory[0].name) {
            case 'Burgers':
                setMenuCategoryList(BurgerProductList)
                break;
            case 'Sides':
                setMenuCategoryList(SidesProductList)
                break;
            case 'Beverages':
                setMenuCategoryList(BeveragesProductList)
                break;
            case 'Desserts':
                setMenuCategoryList(DessertsProductList)
                break;
            case 'Hot Cafe':
                setMenuCategoryList(HotCafeProductList)
                break;
            default:
                setMenuCategoryList(BurgerProductList)
                break;
        }
    }

    useEffect(() => {
        dispatch(selectedCategory({ id: menuCategoryID, list: menuCategoryList }))
    }, [menuCategoryList])

    return (
        <Section title='Menu Categories' classname='py-3'>
            <motion.ul className="category__buttons flex items-center w-full" variants={SA_mainContainer(1)} initial="hidden" animate="show"  >
                {
                    MenuCategoriesList.map((val) => {
                        return (
                            <motion.li variants={SA_childItems} key={val.id} onClick={() => CategoryFilter(val.name, val.id)}>
                                <Button text={''} className={`${selectedCategoryID === val.id ? 'elementGradient dark:bg-orange-100 text-white font-medium' : 'bg-white text-gray-700 dark:text-gray-200'}
                            text-center  min-w-24  mr-5 text-xs shadow p-1 rounded-md hover:shadow-md hover:cursor-pointer hover:shadow-orange-200 relative  dark:bg-gray-700`}>
                                    <div className='h-10 max-w-10 mx-auto'>
                                        <img className="w-full h-full" src={val.image_url} alt="" />
                                    </div>
                                    <p className='mt-1'>{val.name}</p>
                                </Button>
                            </motion.li>
                        )
                    })
                }
            </motion.ul>
        </Section >
    )
}

export default MenuCategory