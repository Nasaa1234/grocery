import React, { useState, useContext } from 'react'
import { BottomBar } from '..'
import Exit from '../../picture/Vector (1).svg'
import Exit1 from '../../picture/Vector (2).svg'
import '../../index/cart.css'

import { ShopContext } from '../../provider/shop-context'

const CartItem = ({ name, img, detail, price, number, quantity, setNumberPlus, numberPlus, ind }) => {

    const { removeCartItem, cartItems } = useContext(ShopContext)
    const AddNumber = () => {
        setNumberPlus(parseInt(numberPlus) + 1)
    }

    const Number = () => {
        setNumberPlus(numberPlus - 1)
        if (numberPlus === 1) {
            setNumberPlus(1)
        }
    }

    return (
        <div className='all'>
            <img src={img} alt="" className='img' />
            <div className="center">
                <div className="name">
                    <div>
                        {name}
                    </div>
                    <div className='exit' onClick={() => removeCartItem({ ind, name })}>
                        <img src={Exit} alt="" />
                        <img src={Exit1} alt="" />
                    </div>
                </div>
                <div className="detail">{detail}</div>
                <div className='button'>
                    <button onClick={Number}>-</button>
                    <div className='number'>
                        {numberPlus}
                    </div>
                    <button onClick={AddNumber} className='buttonGreen'>+</button>
                    <div className='price'>
                        ${price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CartItem }
