import React from 'react'

function Product({product, addToCart}) {
  return (
    <div className='product'>
    <img className="img" src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <div>${product.price}</div>

     
      <button className='button' onClick={()=>addToCart(product)}>Add To Cart</button>
     { /* to work it by only id in the app.jsx optional function addToCart we have to pass addToCart(product.id)
      */}


    </div>
  )
}

export default Product