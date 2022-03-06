import React from 'react';
import Friend from '../Friend/Friend';

import { useEffect, useState } from 'react';

const Home = () => {
    const [friends, setfriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
        .catch(err => console.error(err))
      }
    )
    return (
        <div>
            <h1>Friends : {friends.length}</h1>
        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
        </div>
    );
};

export default Home;