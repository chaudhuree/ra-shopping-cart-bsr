import React, { useState } from 'react';
import './App.css';
import CartBox from './components/CartBox';
import CartContainer from './components/CartContainer';
import Header from './components/Header';
import data from './data';
function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className='container'>
     <Header></Header>
     <main>
        <CartContainer products={products}></CartContainer>
        <CartBox cartItems={cartItems}></CartBox>
     </main>
    </div>
  )
}

export default App
