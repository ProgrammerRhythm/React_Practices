import React, { useEffect, useState } from 'react';

function App() {
  
  return (
    <div>
      <LoadUser></LoadUser>
    </div>
  );
 
}

function ShowUser(props) {
  const style = {
    borderRadius: '20px',
    border: '1px solid black',
    margin: '40px',
    padding: '50px',
    textAlign: 'center',
  }
  return (
    <div style={style}>
      <h2>Name : {props.name}</h2>
      <img style={{borderRadius: '50%'}} src={props.img} alt="" />
      <h5>Phone : {props.phone}</h5>
      <h5>Email : {props.email}</h5>
      <h5>Gender : {props.gender}</h5>
      <h5>Age : {props.age}</h5>
    </div>
  )
}

function LoadUser() {
  const [users,setUsers] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])
  return(
    <div>
      {
       users.map(user => <ShowUser name={user.name.first + ' ' + user.name.last} img={user.picture.large} phone={user.phone} email={user.email} gender={user.gender} age={user.dob.age} key={user.postcode}></ShowUser>)
      }
    </div>
  )
}

export default App;
