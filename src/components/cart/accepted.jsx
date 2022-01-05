import React from 'react'
import { Button } from '..'
import { Link } from 'react-router-dom'
import '../../index/cart.css'
import amazing from '../../picture/Group 6872.svg'
const Accepted = () => {
    return (
        <div className='accepted'>
            <img src={amazing} alt="" />
            <div className='orshil'>
                Your Order has been
                accepted
            </div>
            <div className='tailbar2'>
                Your items has been placcd and is on<br />
                it’s way to being processed
            </div>
            <Button path='' word='Track Order' />
            <Link to='/market'>
                <div className='back'>
                    Back to home
                </div>
            </Link>
        </div>
    )
}

export { Accepted }
