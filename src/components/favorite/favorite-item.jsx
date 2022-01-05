import React from 'react'
import { products } from '..'
import kiwi from '../../picture/kiwi.jpeg'
import '../../index/favorite.css'
import arrow from '../../picture/Vector (1).svg'

const FavoriteItem = () => {
    return (
        <div className='all1'>
            <img src={kiwi} alt="" className='img' />
            <div className="name">
                Sprite Can
                <div className="detail">
                    325ml, Price

                </div>
            </div>

            <div className="price">
                $1.50
            </div>

            <img src={arrow} alt="" />
        </div>
    )
}

export { FavoriteItem }
