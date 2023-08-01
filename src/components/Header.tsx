import { useContext, useState } from 'react'
import './Header.css'
import {appContext } from '../context/Context';
import { nanoid } from 'nanoid'
import { ProductCard } from './ProductCard';
// import React from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const {cart, setCart} = useContext(appContext);

  // TOGGLE CART

  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  // CART BUTTON + 
  
  const handleMore = (item:ProductCard)=>{
    const cartCopy = [...cart];
    const currentItem = cartCopy.find(current => current.id === item.id)
    if(currentItem){
     currentItem.count = currentItem.count + 1;
      setCart(cartCopy)
    }  
  }

    // CART BUTTON -

  const handleLess = (item:ProductCard)=>{
    const cartCopy = [...cart];
    const currentItem = cartCopy.find(current => current.id === item.id)

    if(currentItem){
     currentItem.count = currentItem.count - 1;
     setCart(cartCopy)
     
     if(currentItem.count === 0){
      const cartFiltered =  cartCopy.filter(item => item !== currentItem)
      setCart(cartFiltered)
     }
    }
  }

  // TOTAL CART


  return (
    <>
      <header>
        <a id="logo" href="#sectionOne"> Natural.</a>
        <nav>
          <ul>
            <li><a href='#sectionOne'>Home</a></li>
            <li><a href='#last'>Shop</a></li>
            <li><a href='#sectionFour'>About</a></li>
          </ul>
        </nav>
        <div className="otherBtn">
          <div className={toggle ? "onglet visible" : 'onglet'}>
            <span onClick={handleToggle} className="material-symbols-sharp" id="cart">shopping_cart</span>
          
          </div>
          
          
          <button className='btnCall'>Get started</button>
        </div>
        
      </header>
      
        <div 
        className={toggle ? ' cartContainer animatedCart' : 'cartContainer'}>
          <h1>Your items</h1>
          <div className="cartItem" key={nanoid()}>
            <p className={cart.length === 0 ? 'empty' : 'hidden'}>Your cart is empty</p>
            {cart.map((item)=>{
              return(
                <div className='cart-grid' key={item.id}>
                <p>{item.name}</p>
                  <button onClick={()=>handleMore(item)}>+</button>
                  <button id='counter'>x {item.count}</button>
                  <button onClick={()=>handleLess(item)}>-</button>
                  <p>{item.total = item.price*item.count}$</p>

                </div>
              )
            })}
          </div>
          <div className="bottomCart">
            <hr />
            <div className="bottomContent">
              <h2>Total :</h2>
              <h2>
                {cart.reduce((total: number, item: ProductCard) => {
                  return total += item.price * item.count;
                }, 0)}$
              </h2>
            </div>
            
          </div>

        </div>

    </>
    
  )
}