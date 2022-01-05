import React, { createContext, useState } from "react";
import { products } from "../components";

export const ShopContext = createContext({
    categories: [],
    products: [],
    cartItems: [],
    favoriteItems: [],
    activeProduct: {},
    totalCost: 0,
    addCartItem: () => { },
    addFavItem: () => { },
    removeCartItem: () => { },
    removeFavItem: () => { },
    setActiveProduct: () => { },
    setTotalCost: () => { }
})


export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [activeProduct, setActiveProduct] = useState({})
    const [totalCost, setTotalCost] = useState(0)
    const addCartItem = (item) => {
        //condition
        let cart = cartItems.filter((el) => el.name === item.name)
        if (cart.length === 0) {
            console.log("working")
            setCartItems([...cartItems, item])
        } else {
            setCartItems(cartItems.map((el) => el.name === item.name ? { ...el, quantity: el.quantity + 1 } : el))
        }

    }

    const addFavItem = (item) => {
        console.log('hi', activeProduct)
    }
    const removeFavItem = (itemm, index) => {

    }
    const removeCartItem = (item) => {
        let remove = cartItems.filter((el) => el.name !== item.name)
        console.log(remove)
        setCartItems(remove)
    }




    return (
        <ShopContext.Provider value={{
            cartItems,
            favoriteItems,
            activeProduct,
            totalCost,
            addCartItem,
            addFavItem,
            removeCartItem,
            removeFavItem,
            setActiveProduct,
            setTotalCost
        }}>
            {children}
        </ShopContext.Provider>
    )
}