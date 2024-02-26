import React, {useContext} from "react";
import {ShopContext} from '../../context/shopcontext'

export const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return(
        <div className="cartItem">
            <img src={productImage}/>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    Kr{price}
                </p>
                <div className="countHandler">
                    <button class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};