import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider =({children})=>{
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const copyCart = cart.slice();
        copyCart.push(item)
        setCart(copyCart)
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const totalPriceCalculator = () => {
        return cart.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
    }
    const totalQuantity = () => {
        return cart.reduce( (acc, prod) => acc += prod.cantidad,0)
    }
    const deleteCart = () => {
        setCart([])
    }
    const removeItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }

    return(
        <CartContext.Provider value={{
            cart, addItem, isInCart, totalPriceCalculator, totalQuantity, deleteCart}
        }>

            {children}
        </CartContext.Provider>
    )
}

