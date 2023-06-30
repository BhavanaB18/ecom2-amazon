import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import './slider.css'
import 'swiper/css'
// import 'swiper/css/Pagination'
// import 'swiper/css/Navigation'

import {SliderProducts} from '../../data/products';


const slider = () => {
  return (
    <div className='s-container'>
        <Swiper
        // modules={[pagination, navigation]}
        className='mySwiper'
        // loopFillGroupWithBlank={true}

        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
            {SliderProducts.map((slide,i)=>(
            <SwiperSlide>
                <div className="left-s">
                    <div className="name">
                        <span>{slide.name}</span>
                        <span>{slide.detail}</span>
                    </div>
                    <span>{slide.price}</span>
                <div className='shop'>Shop Now</div>
                </div>
                <img src={slide.img} alt="product" className='img-p'/>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default slider
