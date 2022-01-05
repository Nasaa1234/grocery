import React from 'react'
import '../../index/cart.css'
import img from '../../picture/Vector (5).svg'
const Name = ({ name, method }) => {
    return (
        <div>
            <div className='inside-inside'>
                <div className='name-name'>
                    {name}
                </div>
                <div className='name-detail'>
                    {method}
                </div>
                {/* <hr /> */}
            <img src={img} alt="" />

            </div>
        </div>

    )
}

export { Name }
