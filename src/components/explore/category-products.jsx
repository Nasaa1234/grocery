import React, { useContext } from 'react'
import '../../index/explore.css'
import { ShopContext } from '../../provider/shop-context'
import {Link } from 'react-router-dom'

const CategoryProducts = ({ img, name, nameDetail, price, quantity , desc}) => {

    const { addCartItem, cartItems } = useContext(ShopContext)
    console.log(addCartItem)
    return (
        <div className='more'>
            <div className="productsItem">
                    <img src={img} />
                <div className="name">
                    {name}
                </div>
                <div className="detail">
                    {nameDetail}
                </div>
                <div className="price">
                    ${price}
                    <button onClick={() => addCartItem({ img, name, nameDetail, price, quantity })}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export { CategoryProducts }