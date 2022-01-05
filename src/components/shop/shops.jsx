import React from 'react'
import { Banner, Section, Groceries, BottomBar, products } from '..'
import banana from '../../picture/banana.svg'
import apple from '../../picture/apple.svg'
import '../../index/index.css'
import strawberry from '../../picture/strawberry.jpeg'
import kiwi from '../../picture/kiwi.jpeg'
import tomato from '../../picture/tomato.jpeg'
import orange from '../../picture/orange.jpeg'
import pulses from '../../picture/pulses.svg'
import rice from '../../picture/rice.svg'



const Shops = () => {
    console.log(products.filter((e) => e.name).map((el) => el.name))

    return (
        <div className="all-product">
            <div className="tittle">
                Exclusive Offer
            </div>
            <div className='products'>
                {products.filter((e) => e.name).map((el) => {
                    if (el.name === 'product') {
                        return <Section name={el.ProductName} img={el.img} desc={el.desc} price={el.price} quantity={el.quantity} />
                    }
                })
                }

            </div>
            <div className="tittle1">
                Best Selling
            </div>
            <div className='products'>
                {products.filter((e) => e.name).map((el) => {
                    if (el.name === 'bestSelling') {
                        return <Section name={el.ProductName} img={el.img} desc={el.desc} price={el.price} quantity={el.quantity} />
                    }
                })
                }
            </div>
            <div className="Grocerier">

            </div>
            <BottomBar />
            <div className='tittle-groceries'>
                Groceries
            </div>
            <div className='grociries'>
                {products.filter((e) => e.name).map((el) => {
                    if (el.name === 'groceries') {
                        return <Groceries tittle={el.tittle} img={el.img} color={el.color} />
                    }
                })
                }

            </div>

            <div className='products1'>
                {products.filter((e) => e.name).map((el) => {
                    if (el.name === 'bottomSale') {
                        return <Section name={el.ProductName} img={el.img} desc={el.desc} price={el.price} quantity={el.quantity}/>
                    }
                })
                }
            </div>
        </div>
    )
}

export default Shops
