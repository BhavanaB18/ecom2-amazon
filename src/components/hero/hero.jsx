import React from 'react'
import css from './hero.module.css'
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const hero = () => {
  return (
    <div className={css.container}>
        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>rainy favorites</span>

            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Explore 100% toxin-free and safe Vitamin C</span>
            </div>
        </div>
        {/* middle side */}
        <div className={css.wrapper}>
            <div className={css.blueCircle}>
                <img src={HeroImg} alt='' width={600} />
                {/* <div className={css.cart2}>
                    <RiShoppingBagFill/>

                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div><BsArrowRight/></div>
                        
                    </div>

                </div> */}
            </div>
        </div>
        {/* right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy customers</span>
            </div>
        </div>
    </div>
  )
}

export default hero
