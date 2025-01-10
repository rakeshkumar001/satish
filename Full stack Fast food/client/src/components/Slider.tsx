import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface SliderInterface {
    children: React.ReactNode;
    sliderData: { _imgUrl: string }[]
}
const Slider: React.FC<SliderInterface> = ({ children, sliderData }) => {
    const [sliderImageList, setSliderImageList] = useState<any>()
    // useEffect(() => {
    //     let a: { _imgUrl: string }[] = sliderImageList;
    //     sliderData && sliderData.forEach((val) => {
    //         a.push({ _imgUrl: val._imgUrl })
    //     })
    //     setSliderImageList(a)
    //     console.log("useeffect", sliderImageList, "sliderImageList")
    // }, [sliderData])

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index: number, className: string) {
    //         // return '<span><img src="'+console.log(sliderImageList,"sliderImageList")+'" alt=""/></span>'
    //         console.log(sliderData, "bullet", sliderImageList, "sliderImageList")
    //         if (!sliderImageList) {
                // return ('<span class="' + className + '"><img src="' + require(sliderImageList[index]["_imgUrl"]) + '"/></span>')
    //             console.log("true", sliderImageList)
    //         }
    //         else {
    //             console.log("false", sliderImageList)
    //             // return ('<span class="' + className + '"></span>')
    //         }
    //     },
    // };

    return (
        <>
            {
                children && (
                    <Swiper
                        direction='vertical'
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        // pagination={pagination}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {children}
                    </Swiper>

                )
            }
        </>
    );
}
export default Slider
