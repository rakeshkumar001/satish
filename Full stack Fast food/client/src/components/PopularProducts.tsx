import PopularCategoriesList from "../assets/Json/PopularCategories.json"
import Section from './Section';
import ProductCardList from './ProductCardList';

const PopularProducts = () => {
    return (
        <Section title='Popular Products'>
            <ProductCardList listItems={PopularCategoriesList} showDescription={false}/>
        </Section>
    )
}

export default PopularProducts