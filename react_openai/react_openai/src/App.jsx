import React, { useEffect, useState } from 'react';

function App() {
  const [users,setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
  },[])

  return (
    <div>
      {
        users.map(user => <User user={user} />)
      }
    </div>
  );
}

function User(props){
  const {id,picture,name,phone} = props.user;
  return(
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      
    </div>
  )
}

export default App;
