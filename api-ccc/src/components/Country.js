import React from 'react';

const country = (props) => {
    const style = {
        border: '1px solid black',
        textAlign: 'center',
        margin: '30px',
        padding: '50px'
      }
      return (
        <div style={style}>
          <img src={props.img} alt="" />
          <h3>Name:{props.name}</h3>
          <h5>Capital:{props.capital}</h5>
          <p>Region : {props.region}</p>
          <p>Population:{props.population}</p>
          <p>nativeName : {props.nativeName}</p>
          <p>Area:{props.area}</p>
          <button onClick={() => props.handleCountryAdded(props)}>Add Country</button>
        </div>
      )
    }

export default country;