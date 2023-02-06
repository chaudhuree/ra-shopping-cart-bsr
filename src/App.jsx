import React, { useState } from 'react';
import './App.css';
import CartBox from './components/CartBox';
import CartContainer from './components/CartContainer';
import Header from './components/Header';
import data from './data';
function App() {
  const { products } = data;
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

  //second approach add to cart function by only id
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
  // remove from cart function
  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) { //if quantity is 1 then remove the item
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else { //if quantity is more than 1 then decrease the quantity
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // total price and other summary information
  //calculate toal price of the product in the cart and total number of items in the cart
  let { total, amount } = cartItems.reduce((cartTotal, cartItem) => {
    const { price, qty } = cartItem;
    const itemTotal = price * qty;
    cartTotal.total += itemTotal;
    cartTotal.amount += qty;
    return cartTotal;
  }, {
    total: 0,
    amount: 0
  });
  total = parseFloat(total.toFixed(2));
  // console.log(total)
  //adding 20% tax and 20$ shipping charge(if total price is less than 2000$ shipping charge will be 20$)
  const taxPrice = total * 0.2; 
  const shippingPrice = total > 2000 ? 0 : 20;
  //after adding all in total the whole price is,
  const totalAmmountToPay = total + taxPrice + shippingPrice;
  //price list object
  const priceList={
    total,
    shippingPrice,
    taxPrice,
    totalAmmountToPay
  }
  console.log(priceList)
  return (
    <div className='container'>
      <Header amount={amount} ></Header>
      <main>
        <CartContainer products={products} addToCart={addToCart}></CartContainer>
        <CartBox cartItems={cartItems} addToCart={addToCart} removeItem={removeItem} priceList={priceList}></CartBox>
      </main>
    </div>
  )
}

export default App
