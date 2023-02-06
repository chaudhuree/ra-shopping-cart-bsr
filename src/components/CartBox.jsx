import React from 'react'

function CartBox({cartItems}) {
  return (
    <div className='cart-box'>
    {cartItems.length === 0 && <div className='empty-box'>Cart is empty</div>}
    </div>
  )
}

export default CartBox