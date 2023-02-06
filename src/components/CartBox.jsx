import React from 'react';

function CartBox({ cartItems, addToCart, removeItem }) {


  return (
    <div className='cart-box'>
      {cartItems.length === 0 && <div className='empty-box'>Cart is empty</div>}
      {
        cartItems.map((item) => (
          <div key={item.id} className="cart-item-box">
            <img src={item.image} />
            <p>{item.name}</p>
            <div className='cart-btn'>
              quantity:
              <button className='remove-btn' onClick={() => removeItem(item)}>-</button>
              {item.qty}
              <button className='add-btn' onClick={() => addToCart(item)}>+</button></div>
            <p>price: {item.price}</p>
          </div>
        ))

      }
    </div>
  )
}

export default CartBox