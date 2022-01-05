import React, { useState } from 'react'
import '../../index/main.css'
import { Link } from "react-router-dom";

const Button = ({ word, cost, path, toggleModal }) => {

    return (
        <div className='word'>
            <Link to={path}>
                <button onClick={toggleModal}>
                    <div>
                        {word}
                    </div>
                    <div className='number'>
                        {cost}
                    </div>
                </button>
            </Link>
        </div>
    )
}

export { Button }
