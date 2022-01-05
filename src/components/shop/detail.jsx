import React, { useState, useContext } from 'react'
import { Love, products, useQuery } from '..'
import { ShopContext } from '../../provider/shop-context'
import { Link, useParams } from 'react-router-dom'
import arrow from '../../picture/Vector (2).svg'
import Download from '../../picture/Vector (3).svg'
import '../../index/index.css'
import pic from '../../picture/download.jpeg'
import love from '../../picture/Vector (4).svg'



const Detail = () => {
    const { activeProduct, setActiveProduct } = useContext(ShopContext)
    console.log(setActiveProduct)
    const [color, setColor] = useState('gray')
    const [plus, setPlus] = useState(1)
    const query = useQuery();
    const changeColor = () => {
        if (color === 'gray') {
            setColor('red')
        } else {
            setColor('gray')
        }
    }

    const Plus = () => {
        setPlus(plus + 1)
    }

    const min = () => {
        setPlus(plus - 1)
    }
    let name = query.get('name')
    let price = query.get('price')
    let img = query.get('img')
    let desc = query.get('desc')
    let quantity = query.get('quantity')


    const { addCartItem, cartItems } = useContext(ShopContext)
    return (

        <div className="modal">
            <div className="modal-top">
                <div className="modal-top-top">
                    <Link to="/market">
                        <img src={arrow} height="20px" width="20px" />
                    </Link>
                    <img src={Download} height="20px" width="20px" />
                </div>
                <div className="img1">
                    <img src={img} />
                </div>

            </div>
            <div className="modalthing">
                <div className="modaltopth">
                    <div className="modaltext">{name}</div>
                    <div onClick={changeColor}>
                        <Love color={color} />
                    </div>
                </div>
                <div className="modaltopthh">
                    <div className="modalsmalltext">{desc}</div>
                </div>
            </div>
            <div className="pricecontainer">
                <div className="modalprice">
                    <button onClick={min}>-</button>
                    <div className="counter">{plus}</div>
                    <button onClick={Plus}>+</button>
                </div>
                <div className="price">${price}</div>
            </div>
            <div className="product-detail">
                <div className="modaldetail">
                    <div className="detailtop">Product Detail</div>
                    <div className="detailbottom">Size:
                        {desc}</div>
                </div>
            </div>
            <div className="status">
                <div>Available</div>
                <div className="yes">yes</div>
            </div>
            <div className="modalbottom">
                <div>Review</div>
                <div className="basket" onClick={() => addCartItem({ name, img, desc, price, quantity })} > Add To Basket</div>
            </div>
        </div>
    )
}

export { Detail }
