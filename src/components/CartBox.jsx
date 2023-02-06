import React from 'react'

function CartBox({cartItems,addToCart}) {
  return (
    <div className='cart-box'>
    {cartItems.length === 0 && <div className='empty-box'>Cart is empty</div>}
    {
      cartItems.map((item) => (
        <div key={item.id} className="cart-item-box">
        <img src={item.image}  />
          <p>{item.name}</p>
          <p className='cart-btn'>quantity: <button className='remove-btn'>-</button>{item.qty}<button className='add-btn' onClick={()=>addToCart(item)}>+</button></p>
          <p>price: {item.price}</p>
          </div>
      ))

    }
    </div>
  )
}

export default CartBox