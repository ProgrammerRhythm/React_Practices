import React from 'react';

const Cart = (props) => {
    let totalPopulation = 0;
    props.cart.map(country => totalPopulation += country.population)
    // console.log(props.cart,totalPopulation)
    return (
        <div>
           
            <h2>Selected Country Population : {totalPopulation}</h2>
        </div>
    );
};



export default Cart;