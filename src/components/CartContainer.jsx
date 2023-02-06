import React from 'react'
import Product from './Product'

function CartContainer({products}) {
  console.log(products)
  return (
    <div className='cart-container'>
      {products.map((product) => {
        return <Product key={product.id} {...product}></Product>
      })}
    </div>
  )
}

export default CartContainer