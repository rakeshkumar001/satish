import React, { useState } from 'react';
import BannerSlider from '../../components/organisms/BannerSlider/BannerSlider';
import { faAppleAlt, faBasketShopping, faCarrot, faChartSimple, faCreditCard, faEye,  faHeadphones, faHeart, faSeedling, faTractor, faUserShield, faVialCircleCheck, faWheatAwn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from '../../components/molecules/slider/slider';
import SectionTitle from '../../components/molecules/SectionTitle/SectionTitle';
import Apricot from "../../assets/images/apricot.png";
import Strawberry from "../../assets/images/strawberry.png";
import Cherry from "../../assets/images/cherry.png";
import Pineapple from "../../assets/images/pineapple.png";
import Leave from "../../assets/images/leaves2.png";
import Leave2 from "../../assets/images/leaf-light2.webp";
import { faFaceSmileWink, faHandshake } from '@fortawesome/free-regular-svg-icons';


function HomePage() {
  const [productType, setProductType] = useState("fruits")
  const selectProductType = (type) => {
    setProductType(type)
  }
  return (
   <div>HOMEPAGE</div>
  )
}

export default HomePage