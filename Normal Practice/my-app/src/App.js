/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  
  return (
    <div>
        <Users></Users>
    </div>
  );
 
}
function Users(){
  const [users,serUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => serUsers(data))
  },[])
  const [click, setClick] = useState(10);
  const showUser = () => {
      const newUser = click-1;
      setClick(newUser);
  }
  // const Names = users.map(user => user.name);
  
   return (
     <div>
       <h1>Unshowing Users: {click}</h1>
        {
          users.map(user => <img src={user.url} alt={user.name}/>)
        }
       <button onClick={showUser}>Click For Remove New User</button>
     </div>
   )
 }

export default App;
