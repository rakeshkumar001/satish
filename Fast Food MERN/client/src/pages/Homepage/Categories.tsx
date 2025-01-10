import { useEffect, useState } from 'react'
import MenuCategoriesList from "../../assets/Json/MenuCategories.json";
import BurgerProductList from "../../assets/Json/Burgers.json";
import SidesProductList from "../../assets/Json/Sides.json";
import BeveragesProductList from "../../assets/Json/Beverages.json";
import DessertsProductList from "../../assets/Json/Desserts.json";
import HotCafeProductList from "../../assets/Json/HotCafe.json";
import Button from '../../components/Button';
import { SA_childItems, SA_mainContainer } from '../../Utlity/SwaggerAnimation';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../../Redux/MenuCategoryReducer';


const Categories = () => {
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
        <motion.ul className="category__buttons flex items-center w-full" variants={SA_mainContainer(1)} initial="hidden" animate="show"  >
            {
                MenuCategoriesList.map((val) => {
                    return (
                        <motion.li variants={SA_childItems} key={val.id} onClick={() => CategoryFilter(val.name, val.id)}>
                            <Button text={''} className={`${selectedCategoryID === val.id ? 'elementGradient text-white font-semibold elevatedShadow hoverScale' : '  '}  flex items-center justify-between h-10 w-44 mr-3 `}>
                                <div className='w-8 h-8 mr-3'>
                                    <img className=" h-full" src={val.image_url} alt="" />
                                </div>
                                <p className='min-w-12 text-left'>{val.name}</p>
                            </Button>
                        </motion.li>
                    )
                })
            }
        </motion.ul>
    )
}

export default Categories