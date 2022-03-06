import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries,setCountries] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {setCountries(data)
    console.log(data);
    })
  }, [])
  const handleAdded = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (

    <div className="App">
      <h1 style={{textAlign:'center', marginBottom:'30px'}}>Total Country : {countries.length}</h1>
      <h2>Country Added {cart.length}</h2>
        {
          countries.map(country => <Country value={country} handleAdded={handleAdded} key={country.ccn3}></Country>)
        }
    </div>
  );
  }
export default App;
