import React, {useState }from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Shipment from './Components/Shipment';

function App() {
  const [cart, setCart] = useState(0)
  return (
    <div>
      <Header count={cart} setCount={setCart}></Header>
      <Home count={cart}></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
