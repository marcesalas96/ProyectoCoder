import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const copyCart = cart.slice();
        copyCart.push(item)
        setCart(copyCart)
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalPriceCalculator = () => {
        return cart.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
    }
    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
    const deleteCart = () => {
        setCart([])
    }
    const removeQty = (id) => {
        const index = cart.findIndex((item) => item.id === id)
        const item = cart[index]
        if (item.cantidad === 1) {
            removeItem(id)
        }
        else {
            const newQty = item.cantidad - 1
            const copyCart = cart.slice();
            copyCart[index].cantidad = newQty
            setCart(copyCart)
        }
    }

    const addQty = (id) => {
        const index = cart.findIndex((item) => item.id === id)
        const item = cart[index]
        if(item.cantidad<item.stock){
            const newQty = item.cantidad + 1
            const copyCart = cart.slice();
            copyCart[index].cantidad = newQty
            setCart(copyCart)
        }
    }
    
    const removeItem = (id) => {
        setCart(cart.filter(product => (product.id !== id)))
        }

    return (
        <CartContext.Provider value={{
            cart, addItem, isInCart, totalPriceCalculator, totalQuantity, deleteCart, removeQty, addQty, removeItem
        }
        }>

            {children}
        </CartContext.Provider>
    )
}

