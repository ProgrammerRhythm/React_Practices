import React from 'react';
import { Link } from 'react-router-dom';


const Friend = (props) => {
    const {name,email,id} = props.friend;
    const style = {
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    }
    return (
        <div style={style}>
            <h1>{name}</h1>
            <p>{email}</p>
             <Link to={`/about/${id}`}><button>View More</button></Link>
        </div>
    );
};

export default Friend;