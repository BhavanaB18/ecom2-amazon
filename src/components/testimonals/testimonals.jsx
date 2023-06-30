import React from 'react'
import css from './testimonals.module.css';
import hero from '../../assets/testimonialHero.png'
import {TestimonalsData} from '../../data/testimonials' 
import {Swiper,SwiperSlide} from 'swiper/react';
const Testimonals = () => {
  return (
      <div className={css.testimonals}>
        <div className={css.wrapper}>
            <div className={css.container}>
            <span>High rated</span>
            <span>What Our Customers Say</span>
            </div>
        
        <img className={css.hero} src={hero}/>
        <div className={css.container}>
            <span>100k</span>
            <span>Happy Customer With us</span>
        </div>
      </div>
        <div className={css.reviews}>Reviews</div>
        <div className={css.carousel}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            >
                {
                    TestimonalsData.map((testimonal,i)=>(
                        <SwiperSlide>
                            <div className={css.testimonal}>
                                <img src={testimonal.image} />
                                <span>{testimonal.comment}</span>
                                <hr/>
                                <span>{testimonal.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

      </div>
    
  )
}

export default Testimonals
