import React, { useContext } from 'react';
import { CategoryContext } from '../App';
const Header = (props) => {
    const category = useContext(CategoryContext)
    const {count,setCount} = props;
    const handleAdded = (() => {
        const newCount = count + 1;
        setCount(newCount)
    })
    return (
        <div>
            <h6>Select Category: {category}</h6>
            <button onClick={() =>handleAdded()}>Click Me</button>
        </div>
    );
};

export default Header;