import React, {useContext} from 'react';
import { PRODUCTS } from '../../products';
import {ShopContext} from '../../context/shopcontext'
import { CartItem } from './cart-item'
import "./cart.css"

import { useNavigate} from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return <div className="cart">
    <div> 
      <h1>Your Cart</h1>
    </div>
    <div className="cartItems">
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0){
          return <CartItem data={product}/>
        }
      })}
    </div>
    <div className='checkout'>
        <p>Subtotal: Kr{totalAmount}</p>
        <button onClick={() => navigate("/")} class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"> Continue Shopping</button>
        <button class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">Checkout</button>
    </div>
  </div>;
};

export default Cart;