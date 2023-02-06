import React from 'react'

function Product({image, name, price, id}) {
  return (
    <div className='product'>
    <img className="img" src={image} alt={name} />
    <h3>{name}</h3>
    <div>${price}</div>
    <div>
      <button className='button'>Add To Cart</button>
    </div>
    </div>
  )
}

export default Product