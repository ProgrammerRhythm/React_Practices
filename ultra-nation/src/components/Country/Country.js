import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,population, region, flags} = props.value;
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h1>This is {name.common}</h1>
            <p>Population: {population}</p>
            <p><small>Regiom: {region}</small></p>
            <button onClick={() => props.handleAdded(props.value)}>Add Now</button>
        </div>
    );
};

export default Country;