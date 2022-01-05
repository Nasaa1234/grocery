import React, { useContext, } from 'react'
import '../../index/index.css'
import { ShopContext } from '../../provider/shop-context'
import { Link, useLocation } from 'react-router-dom'
import { Detail, products } from '..'

export function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const Section = ({ title, name, img, desc, price, quantity }) => {
    const { addCartItem, cartItems } = useContext(ShopContext)
    return (
        <div className='product'>
            <div className='section'>
                <Link to={`detail?name=${name}&price=${price}&img=${img}&desc=${desc}&quantity=${quantity}`}>
                    <img src={img} />
                </Link>
                <div className='product-name'>
                    {name}
                </div>
                <div className='product-desc'>
                    {desc}
                </div>
                <div className='product-price'>
                    <div className='Price'>
                        ${price}
                    </div>
                    <button onClick={() => addCartItem({ title, name, img, desc, price, quantity })}>
                        +
                    </button>
                </div>
            </div>

        </div>
    )
}

export { Section }
