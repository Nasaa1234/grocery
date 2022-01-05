import React from 'react'
import { Link } from "react-router-dom";
import { CatigoriesItemDisplay } from './catigoriesItem-display';




const CategoryItem = ({ img, word, color, title, name, desc, price, quantity }) => {



    return (
        <div className='Item' style={{ backgroundColor: color, border: `2px solid ${color}` }}>
            <img src={img} />
            {word}
            {console.log(word)}
        </div>
    )
}

export { CategoryItem }
