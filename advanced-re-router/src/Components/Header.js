// import React, { useState } from 'react';

const Header = (props) => {
    const {count,setCount} = props;
    const handleAdded = () => {
        const newcount = count +1;
        setCount(newcount);
    }
    return (
        <div>
            <h1>This Freking Header: {count}</h1>
            <button onClick={handleAdded}>Add</button>
        </div>
    );
};

export default Header;