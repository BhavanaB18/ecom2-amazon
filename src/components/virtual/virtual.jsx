import React from 'react'
import css from './virtual.module.css'
import shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImage from 'react-compare-image';
const Virtual = () => {
  return (
    <div className={css.Virtual}>
        <div className={css.left1}>
            <span>CHECK IT OUT</span>
            <span>100% toxin-free and safe </span>
            <span>Try Now</span>
            <img src={shade} alt=""/>
        </div>

        <div className={css.right}>
            {/* hello i am bhavana */}
            <div className={css.wrapper}>
                <ReactCompareImage leftImage={Before} 
                rightImage={After} />
            </div>
        </div>
    </div>
  )
}

export default Virtual
