import React from 'react';

function CartBox({ cartItems, addToCart, removeItem, priceList }) {

  const { total,
    shippingPrice,
    taxPrice,
    totalAmmountToPay } = priceList;
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
      <>
        {cartItems.length !== 0 && <div>
          <hr />
          <strong>total price: {total}</strong><br />
          <strong>shipping price: {shippingPrice}</strong><br />
          <strong>tax price: {taxPrice}</strong><br />
          <strong>Amount to pay: {totalAmmountToPay}</strong><br />
        </div>
        }
      </>
    </div>
  )
}

export default CartBox