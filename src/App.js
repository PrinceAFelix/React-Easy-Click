import React, { useContext, useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/pages/home/Home';
import { FoodContextProvider } from './components/context/food-context';
import { CartSummary } from './components/ui/summary/CartSummary';
import CartContext from './components/context/cart-context';
import { IconContextProvider } from './components/context/icon-context';


function App() {

  const cartCtx = useContext(CartContext);
  return (
    <div className="App">
      {cartCtx.isClick ? <CartSummary /> : null}
      <IconContextProvider>
        <Header />
      </IconContextProvider>
      <FoodContextProvider>
        <Home />
      </FoodContextProvider>
    </div>
  );
}

export default App;
