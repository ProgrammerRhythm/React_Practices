import { useEffect, useState } from 'react';
import './App.css';
import User from './Components/User';

function App() {
  return (
    <div>
      <ShowUser></ShowUser>
    </div>
  );
}

function ShowUser() {
  const [cart,setCart] = useState([]);
  const handleAdded = (props) => {
    const newUser = [...cart,props];
    setCart(newUser);
  }
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => setUser(data.results))
  },[])

  return(
    <div>
      <h3 style={{textAlign: 'center'}}>Team Builder</h3>
      <ul>
        {
          cart.map((v) => <li>{v}</li>) 
        }
      </ul>
      {
        users.map(user => <User handleAdded={handleAdded} user={user} key={user.id.value}></User>)
      }
    </div>
  )
}

export default App;
