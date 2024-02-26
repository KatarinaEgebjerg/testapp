import React, { useContext } from "react"; 
import {ShopContext} from '../../context/shopcontext'

export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    
    return <div className="product">
        <img class="w-full" src={productImage}/>
  <div class="px-6 py-4" className="description">
    <p>{productName}</p>
    <p class="text-gray-700 text-base">
      Kr{price}
    </p>
  </div>
  <button class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => addToCart(id)}>
  Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
</button>
  </div>

};
