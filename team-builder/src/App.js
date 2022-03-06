import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users,serUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res =>res.json())
    .then(data => serUsers(data.results))
  },[]);
  const [show,setShow] = useState([]);
  const handleAdded = (props) => {
    const newUser = [...show, props];
    setShow(newUser)
  }
  return (
    <div>
      <h3>Team Members</h3>
      <ul>
        {
          show.map((v,idx)=> <li key={idx}>{v}</li>)
        }
      </ul>
      {
        users.map(user => <User user={user} handleAdded={handleAdded}></User>)
      }
    </div>
  );
}

export default App;
