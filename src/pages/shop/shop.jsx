import React from 'react';
import { PRODUCTS } from '../../products'
import { Product } from './products'
import "./shop.css";

export const ProductList = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Lemonade stand</h1>
        </div>
        <div className='products'>
          {" "}
          {PRODUCTS.map((product) => (
            <Product data={product}/>
        ))}</div>
    </div>

  )  ;
};


export default ProductList;
