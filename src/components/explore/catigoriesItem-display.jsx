import React from 'react'
import { BottomBar, CategoryProducts, products } from '..'
import shuultuur from '../../picture/Group 6839.svg'
import Arrow from '../../picture/back arrow.svg'
import { Link, useParams } from 'react-router-dom'
import '../../index/explore.css'

const CatigoriesItemDisplay = () => {
    const { category } = useParams();

    return (
        <div>
            <div className='header'>
                <div className='back'>
                    <Link to='/Explore'>
                        <img src={Arrow} alt="" />
                    </ Link>

                </div>

                <h3>{category}</h3>
                <img src={shuultuur} alt="" />
            </div>
            <div className="Products-Item">
                {products.map((el) => {
                        if (el.category === category) {
                            return <CategoryProducts img={el.img} name={el.name} nameDetail={el.nameDetail} price={el.price} quantity={el.quantity} desc={el.desc} />
                        }



                })}
            </div>

        </div>
    )
}

export { CatigoriesItemDisplay }
