import React, { useContext, useState } from 'react'
import { CartItem, BottomBar, Button, products, Cart, Price } from '..'
import Exit from '../../picture/Vector (1).svg'
import '../../index/cart.css'
import { ShopContext } from '../../provider/shop-context'

const Carts = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log('clicked')
    }

    const { addCartItem, cartItems } = useContext(ShopContext)
    let quantity = cartItems.map((el) => el.quantity)
    const [number, setNumber] = useState(true)

    const [numberPlus, setNumberPlus] = useState(quantity)
    return (
        <div className='cart'>
            <div className="header">
                My  Cart
            </div>
            <hr />
            {cartItems.map((el) => <CartItem name={el.name} img={el.img} detail={el.detail} price={el.price} quantity={el.quantity} setNumberPlus={setNumberPlus} numberPlus={numberPlus} />)}

            <div className='check'>
                {cartItems.map((el, ind) => <Button word='Go to Checkout' path='' ind={ind} cost={numberPlus * el.price} toggleModal={toggleModal} isOpen={isOpen} />)}
            </div>
            <BottomBar />
            <Price toggleModal={toggleModal} isOpen={isOpen} />
        </div>
    )
}

export { Carts }
