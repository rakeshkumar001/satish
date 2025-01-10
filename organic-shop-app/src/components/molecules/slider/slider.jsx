import React from 'react'
import FruitsSliderData from '../../../data/FruitsSliderData';
import VegetablesSliderData from '../../../data/VegetablesSliderData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCards from '../cards/ProductCards';

const Slider = ({ countPerView, typeOfSlider }) => {
    console.log(typeOfSlider, "typeOfSlider", "<<>>>>", countPerView, "countPerView")
    const ProductCardData = typeOfSlider === "fruits" ? FruitsSliderData : VegetablesSliderData
    return (
        <div>
            <Splide aria-label="My Product Card SLider">
                {
                    ProductCardData.map((data, i) => {
                        return (
                            <SplideSlide key={i}>
                                {
                                    data.map((val, i) => {
                                        return (
                                            <div key={i}>
                                                < ProductCards cardData={val} />
                                            </div>
                                        )
                                    })
                                }
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div >
    )
}

export default Slider