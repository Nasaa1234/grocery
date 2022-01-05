import React from 'react'
import { BottomBar } from '..'
import '../../index/account.css'
import { Link, useLocation } from "react-router-dom";

const LogIn = () => {
    const wait = () => {
        
        setTimeout(() =>  {
            
        }, 3000)
    }
    return (
        <div className='body'>
            <div className='green'>
            </div>
            <div className='welcome1'>
                Welcome to
                <div style={{ color: 'yellowgreen' }}>
                    Groceriet
                </div>

            </div>
            <div className='green1'>
            </div>
            <div className='green2'>
            </div> <div className='green3'>
            </div>

            <div className='login'>
                <div className='login-login'>Login</div>
                <div className='name-input'>
                    <input type="text" placeholder='Username' />
                </div>
                <div className='password-input'>
                    <input type="password" placeholder='Password' />
                </div>
                <div className='Login-button'>
                    <button>
                        <Link to='/market'>
                            Login
                        </Link>
                    </button>
                </div>
                <i class="fas fa-eye"></i>
                <div className='haventAccount'>Don't have an account?
                    <Link to='Sign-Up' >
                        Sign up
                    </Link>  </div>
            </div>


            <BottomBar />
        </div >
    )
}

export { LogIn }
