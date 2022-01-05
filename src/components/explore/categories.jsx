import React from 'react'
import '../../index/explore.css'
import search from '../../picture/Vector (3).png'
import { CategoryItem, BottomBar, products } from '..'

import { Link } from 'react-router-dom'

const Categories = () => {



    return (
        <div className=''>

            <div className='tittle'>
                Find Products
            </div>
            <div className='input-search'>
                <img src={search} className='search-input-icon' />
                <input className='input' placeholder='Search Store' />
            </div>
            <div className='all-item'>
                {products.map((el) => {
                    if (el.name === 'explore') {
                        return <Link to={`detail/${el.word}`}>
                            {console.log(el.word)}
                            <CategoryItem img={el.img} word={el.word} color={el.color} name={el.ProductName} img={el.img} desc={el.desc} price={el.price} quantity={el.quantity} />
                        </Link>
                    }
                })}
            </div>

            <BottomBar />
        </div>
    )
}

export { Categories }
