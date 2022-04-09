import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Country from './components/Country'

function App() {
  return (
    <div>
      
      <ShowData></ShowData>
    </div>
  );
}

function ShowData(){
  const [countres,setcountry] = useState([]);
  const [cart,setCart] = useState([])
  const handleCountryAdded = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setcountry(data))
    .catch(err => console.log(err));
  },[]);
  return(
    <div style={{textAlign:'center'}}>
      <h2>Total country : {countres.length}</h2>
      <h2>Country added : {cart.length}</h2>
      <Cart  cart={cart}></Cart>
      {
        countres.map(country => <Country  name={country.name} capital={country.capital} img={country.flags.png} region={country.region} population={country.population} nativName={country.nativeName} area={country.area} key={country.alpha3Code} handleCountryAdded={handleCountryAdded}></Country >)
      }
    </div>
  )
}

export default App;
