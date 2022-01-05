import '../../index/index.css'
import React from 'react'
import next from '../../picture/Group.svg'
import { Button } from '..'

const Next = () => {
    return (
        <div className='next'>
            <div>
                <img src={next} ></img>
            </div>
            <div className='welcome'>
                Welcome <br /> to our store
            </div>
            <div className='get'>
                Ger your groceries in as fast as one hour
            </div>
            <Button word='Get Started' path='/market' />
        </div>
    )
}

export { Next }
