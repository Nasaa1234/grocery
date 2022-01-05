import React from 'react'
import { BottomBar, Favorite, FavoriteItem } from '..'
import '../../index/favorite.css'

const Favorites = () => {
    return (
        <div>
            <div className="name1">
                Favorurite
            </div>
            
            <hr />
            <FavoriteItem /> 
           

                <BottomBar />
        </div>
    )
}

export {Favorites}