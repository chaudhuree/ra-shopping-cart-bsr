import React from 'react'

function Header({amount}) {
  return (
    <div className='header'>
      <p className='logo'>chaudhuree</p>
      <p className='cart-item'>cart- <span>{amount}</span></p>
    </div>
  )
}

export default Header