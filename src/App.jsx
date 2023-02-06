import React, { useState } from 'react';
import './App.css';
import CartBox from './components/CartBox';
import CartContainer from './components/CartContainer';
import Header from './components/Header';
import data from './data';
function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)


const addToCart = (product) => {
const exist = cartItems.find((item) => item.id === product.id);
console.log(`exist:${exist}`) //first time undefined so will go to else part
    if (exist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

//add to cart function by only id
  // const addToCart=(id)=>{
  //   const exist = cartItems.find((item) => item.id === id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((cartItem) =>
  //         cartItem.id === id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
  //       )
  //     );
  //   }else{
  //     products.map((product)=>{
  //       if(product.id===id){
  //         setCartItems([...cartItems, { ...product, qty: 1 }]);
  //       }
  //     }
  //     )
  //   }
  // }

  return (
    <div className='container'>
     <Header></Header>
     <main>
        <CartContainer products={products}  addToCart={addToCart}></CartContainer>
        <CartBox cartItems={cartItems}></CartBox>
     </main>
    </div>
  )
}

export default App
