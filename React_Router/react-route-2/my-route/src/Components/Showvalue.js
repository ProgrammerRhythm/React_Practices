import React from 'react';
import { useEffect, useState } from 'react';
import LoadUser from './LoadUser';

const Showvalue = () => {
    const [users,setUser] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUser(data))
    },[])
    console.log(users);
    return (
        <div>
            {
                users.map(post => <LoadUser post={post}></LoadUser>)
            }
        </div>
    );
};

export default Showvalue;