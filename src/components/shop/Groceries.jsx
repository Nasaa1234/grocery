import React from 'react'
import '../../index/index.css'

const Groceries = ({ tittle, img, color }) => {
    return (
        <div className='div-box'>
            <div className='box' style={{backgroundColor:color}}>
                <img src={img} alt="" />
                <div className='tottle'>
                {tittle}
                </div>
               
            </div>
        </div>
    )
}

export { Groceries }
