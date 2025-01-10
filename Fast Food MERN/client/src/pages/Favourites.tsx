import PopularCategoriesList from "../assets/Json/PopularCategories.json"
import Section from '../components/Section';
import ProductCardList from '../components/ProductCardList';

const Favourites = () => {
    return (
        <Section title='Favourite Products'>
            <ProductCardList listItems={PopularCategoriesList} showDescription={true}/>
        </Section>
    )
}

export default Favourites