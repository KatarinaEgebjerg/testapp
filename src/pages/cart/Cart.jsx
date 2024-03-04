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
  return <div className="bg-gray-50 p-8 min-h-screen flex justify-center items-center"> 
  <div className="w-full max-w-3xl"> 
    <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h3>
    <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0){
            return <CartItem data={product} key={product.id} />
          }
          return null;
        })}
    </div>
    <div className='bg-white shadow rounded-lg p-6'>
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-medium text-gray-900">Subtotal: Kr{totalAmount.toFixed(2)}</p>
        <button onClick={() => navigate("/shop")} className="bg-yellow-400 hover:bg-yellow-500 text-white fo  nt-semibold py-2 px-4 rounded-lg shadow">Continue Shopping</button>
      </div>
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow">Checkout</button>
    </div>
  </div>
</div>;

};

export default Cart;