import React from 'react'
import css from './header.module.css';
import Logo from '../../assets/logo.png';
import {CgShoppingBag} from 'react-icons/cg'
const header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} />
            <span>amazon</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>

            </div>
            <input type='text' className={css.search} placeholder='Search'></input>
            {/* <span>PNG icon of cart</span> */}
            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default header
