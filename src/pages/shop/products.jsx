import React from "react"; 

export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    return <div className="product">
        <img class="w-full" src={productImage}/>
  <div class="px-6 py-4" className="description">
    <p>{productName}</p>
    <p class="text-gray-700 text-base">
      Kr{price}
    </p>
  </div>
  <button class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
  Add To Cart
</button>
  </div>

};
