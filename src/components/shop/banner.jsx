import React from 'react'
import redCarrot from '../../picture/Group.png'
import icon from '../../picture/Exclude.svg'
import search from '../../picture/Vector (3).png'
import banner from '../../picture/banner.png'
import '../../index/index.css'
import { Section } from '..'
import Shops from './shops'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={redCarrot} /> <br />
            <div className='Country'>
                <img className='con' src={icon} alt="" />
                Dhaka, Banassre
            </div>
            <div className='input-search'>
                <img src={search} className='search-input-icon' />
                <input className='input' placeholder='Search Store' />
            </div>
            <div className='banner-picture'>
                <img src={banner} alt="" />
            </div>
            <div>
                <Shops />
            </div>
        </div>
    )
}

export { Banner }

