import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Shipment from './Components/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count,setCount] = useState(0)
  return (
    <CategoryContext.Provider value={count}>
      <p>Count Values</p>
      <Header count={count} setCount={setCount}></Header>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
