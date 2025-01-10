import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCards from '../cards/ProductCards';

const Slider = ({ countPerView, typeOfSlider }) => {
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