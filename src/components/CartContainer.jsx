import React from 'react'
import Product from './Product'

function CartContainer({products, addToCart}) {
  // console.log(products)
  return (
    <div className='cart-container'>
      {products.map((product) => {
        return <Product key={product.id} product={product} addToCart={addToCart}></Product>
      })}
    </div>
  )
}

export default CartContainer