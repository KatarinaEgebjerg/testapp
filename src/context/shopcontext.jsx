import React, { createContext, useState } from "react"; 
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState (getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount;
    };

    const getProfitAndLemonsUsed = () => {
        let totalCost = 0;
        let totalLemonsUsed = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalCost += cartItems[item] * itemInfo.cost; 
                totalLemonsUsed += cartItems[item] * itemInfo.lemonsUsed; 
            }
        }
        const totalSales = getTotalCartAmount(); // This is your total revenue from sales
        const profit = totalSales - totalCost; // Profit calculation
        return { profit, totalLemonsUsed };
    };
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };

    const contexValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getProfitAndLemonsUsed,};

    console.log(cartItems);

    return <ShopContext.Provider value={contexValue}>{props.children}</ShopContext.Provider>
};
