import React, {useState} from 'react'; 
import css from './products.module.css'
import plane from '../../assets/plane.png'
import {ProductsData} from '../../data/products'
// import { useAutoAnimate } from '@formkit/auto-animate/react'


// import { useState } from 'react'
const Products = () => {
    // const [parent]= useAutoAnimate()
    const [MenuProducts,setMenuProducts]= useState(ProductsData)
    const filter=(type)=>{
        setMenuProducts(ProductsData.filter((product)=>product.type===type))
    }
    return (
    <div className={css.container}>
        <img src={plane}/>
        <h1>our feature products</h1>
        <div className={css.products}>
            
                <ul className={css.menu}>
                    <li onClick={()=>setMenuProducts(ProductsData)}>all</li>
                    <li onClick={()=>filter('skin care')}>Skin Care</li>
                    <li onClick={()=>filter('conditioner')}>Conditioner</li>
                    <li onClick={()=>filter('foundation')}>Foundations</li>
                </ul>
            <div className={css.list} >
                    {
                        MenuProducts.map((product,i)=> (
                            <div className={css.product}>
                              <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Shop now</div>
                                </div>  
                                <img src={product.img} className='img-p'></img>
                            </div>
                        ))
                    }
            </div>

            
        </div>
      
    </div>
    )
}

export default Products
