import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const {id} = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h1>This is about of {id}</h1> 
            Name: <strong>{user.name}</strong> <br /> 
            Email: <strong>{user.email}</strong><br />
            Phone: <strong>{user.phone}</strong><br />
            Website: <strong>{user.website}</strong>
        </div>
    );
};

export default About;
