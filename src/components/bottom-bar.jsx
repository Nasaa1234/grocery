import React, { useState } from 'react'
import { Shop, Explore, Favorite, Account, Cart } from '../components'
import { Link, useLocation } from "react-router-dom";


const BottomBar = () => {
    let loc = useLocation()
    console.log(loc.pathname)



    return (
        <div>
            <div className='bottom-bar'>
                <Link to='/market'  >
                    <Shop color={loc.pathname == '/market' ? 'green' : 'black'} />
                </Link>

                <Link to='/Explore' >
                    <Explore color={loc.pathname=='/Explore' ? 'green' : 'black'} />
                </Link>
                <Link to='/Cart'>
                    <Cart color={loc.pathname == '/Cart' ? 'green' : 'black'} />
                </Link>
                <Link to='/Favorite' >
                    <Favorite color={loc.pathname == '/Favorite' ? 'green' : 'black'} />
                </Link>
                <Link to='/Account' >
                    <Account color={loc.pathname == '/Account' ? 'green' : 'black'} />
                </Link>
            </div>

        </div >
    )
}

export { BottomBar }
